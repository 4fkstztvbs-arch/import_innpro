import os
import json,glob,re,csv,html,sys,collections
from bs4 import BeautifulSoup
slug=sys.argv[1]
base=os.environ.get('PSBASE','/mnt/project-files/popisy-kategorie')+f'/{slug}'
REL={
 'fotovoltaika':[('/solarne-panely/','Solárne panely','Panely pre vlastnú výrobu elektriny.'),('/kable-a-vodice/','Káble a vodiče','Solárne a silové káble.'),('/elektroinstalacia/','Elektroinštalácia','Rozvádzače, istenie a elektroinštalačný materiál.'),('/akumulatory-a-baterie/','Akumulátory a batérie','Úložisko energie.')],
 'kavovary-a-espressa':[('/fritezy-a-hrnce/','Fritézy a hrnce','Teplovzdušné fritézy a multicookery do kuchyne.'),('/mixery/','Mixery','Mixéry na smoothie a polievky.'),('/kuchynske-roboty/','Kuchynské roboty','Pomocník pri príprave jedla.'),('/domace-spotrebice/','Domáce spotrebiče','Ďalšie spotrebiče do domácnosti.')],
 'satelitne-prijimace':[('/televizory/','Televízory','Televízory na sledovanie digitálneho vysielania.'),('/anteny/','Antény','Antény pre príjem signálu.'),('/av-kable/','AV káble','Káble HDMI a AV k prijímaču.'),('/televizne-ovladace/','Televízne ovládače','Náhradné diaľkové ovládače.')],
 'fritezy-a-hrnce':[('/kavovary-a-espressa/','Kávovary a espressá','Čerstvá káva k raňajkám.'),('/domace-spotrebice/','Domáce spotrebiče','Ďalšie spotrebiče do kuchyne.'),('/mixery/','Mixery','Mixéry na polievky a smoothie.'),('/kuchynske-roboty/','Kuchynské roboty','Pomocník pri príprave jedla.')],
 'monitory':[('/televizory/','Televízory','Väčšia uhlopriečka pre obývačku.'),('/tv-stoliky-a-drziaky/','TV stolíky a držiaky','Držiaky a stolíky na obrazovky.'),('/av-kable/','AV káble','Káble HDMI a DisplayPort k monitoru.'),('/soundbary/','Soundbary','Lepší zvuk k obrazu.')],
 'projektory-4':[('/televizory/','Televízory','Alternatíva k projektoru.'),('/tv-stoliky-a-drziaky/','TV stolíky a držiaky','Držiaky a stolíky.'),('/av-kable/','AV káble','Káble k projektoru.'),('/soundbary/','Soundbary','Kvalitný zvuk k premietaniu.')],
 'sportove-vybavenie':[('/posilnovanie-a-fitness/','Posilňovanie a fitness','Vybavenie na cvičenie.'),('/cestovanie-sport-a-outdoor/','Cestovanie, šport a outdoor','Šport a outdoor.'),('/outdoor/','Outdoor','Výbava do prírody.'),('/fitness-naradie-a-vybavenie/','Fitness náradie','Náradie a vybavenie.')],
 'pracky':[('/susicky/','Sušičky','K práčke sa hodí sušička, ktorá ušetrí miesto na sušenie bielizne.'),('/velke-domace-spotrebice/','Veľké domáce spotrebiče','Ďalšie veľké spotrebiče do domácnosti na jednom mieste.'),('/chladnicky/','Chladničky','Chladničky pre každú domácnosť.')],
 'chladnicky':[('/mraznicky/','Mrazničky','Samostatná mraznička rozšíri zásoby potravín.'),('/vstavane-chladenie/','Vstavané chladenie','Chladničky do kuchynskej linky.'),('/velke-domace-spotrebice/','Veľké domáce spotrebiče','Ďalšie veľké spotrebiče do domácnosti.')],
 'mraznicky':[('/chladnicky/','Chladničky','Chladničky pre každú domácnosť.'),('/vstavane-chladenie/','Vstavané chladenie','Chladenie do kuchynskej linky.'),('/velke-domace-spotrebice/','Veľké domáce spotrebiče','Ďalšie veľké spotrebiče do domácnosti.')],
 'soundbary':[('/televizory/','Televízory','Televízory, ku ktorým soundbar pripojíte.'),('/hifi-a-domace-reproduktory/','HiFi a domáce reproduktory','Reproduktory pre domáce počúvanie.'),('/av-kable/','AV káble','Káble na prepojenie soundbaru s televízorom.'),('/tv-stoliky-a-drziaky/','Stolíky a držiaky pod televízor','Miesto pre televízor aj soundbar.')],
 'audio-technika-prenosne-bluetooth-reproduktory':[('/audio-technika/','Audio technika','Ďalšie audio zariadenia pre domov aj cesty.'),('/hifi-a-domace-reproduktory/','HiFi a domáce reproduktory','Reproduktory pre domáce počúvanie.'),('/soundbary/','Soundbary','Zvuk pre televízor.'),('/sluchadla/','Slúchadlá','Slúchadlá na hudbu aj hovory.')],
 'sluchadla':[('/audio-technika/','Audio technika','Reproduktory a ďalšie audio zariadenia.'),('/audio-technika-prenosne-bluetooth-reproduktory/','Bluetooth reproduktory','Prenosný zvuk na doma aj na cesty.'),('/hifi-a-domace-reproduktory/','HiFi a domáce reproduktory','Reproduktory pre domáce počúvanie.'),('/soundbary/','Soundbary','Zvuk pre televízor.')],
 'varne-dosky':[('/vstavane-rury/','Vstavané rúry','Rúra do kuchynskej linky k varnej doske.'),('/sporaky-a-rury/','Sporáky a rúry','Samostatné sporáky a rúry.'),('/digestory/','Digestory','Digestor nad varnú dosku.')],
}
BAD=re.compile(r'[Zz]droje? uvádz|v zdrojoch|maloobchodn|[Rr]etailov|overte u|si overte|v technickom liste|Podklady:|energetickou trie|zdroj\w* sa |zdrojov|podložen|nenašli|nenájdeme|neoveren|líšia|uvádzame|údaj\w* dodávateľ|dodávateľ|feed|podklad|nejednotn|vynechan|nepotvrd|nepodarilo|rozchád|neuvedený|neuvád|nezávisle|spotreb|energetick|údaj\w* výrobc|výrobca uvádza|nenájdete|nepodporuje|nevieme',re.I)
NEGFAQ=re.compile(r'^\s*Nie\b|nepodporuje|nenájdete|nepotvrd|nepodarilo|rozchád|nezávisle|chýba|nemá |bez možnosti',re.I)
def sent_filter(t): return ' '.join(p for p in re.split(r'(?<=[.!?])\s+',t) if not BAD.search(p))
def clean(v):
    s=BeautifulSoup(v,'html.parser')
    for e in s.select('.psc-sources'): e.decompose()
    for sp in s.select('.psc-spec'):
        if BAD.search(sp.get_text(' ')): sp.decompose()
    for f in s.select('.psc-facts > div'):
        if BAD.search(f.get_text(' ')): f.decompose()
    for d in s.find_all('details'):
        summ=d.find('summary');ans=' '.join(p.get_text(' ') for p in d.find_all('p'))
        if summ is None or BAD.search(summ.get_text()) or NEGFAQ.search(ans) or BAD.search(ans) and len(sent_filter(ans))<40: d.decompose()
    for n in s.select('.psc-note'):
        if re.match(r'(Dôležité pred|Pred nákupom|Čo .* nerieši|Pozrite sa pred|Čo nerieši)',n.get_text(strip=True)): n.decompose()
    for p in s.find_all(['p','li']):
        if p.name=='p' and p.find('a'): continue
        t=p.get_text(' ')
        if BAD.search(t):
            nt=sent_filter(t)
            if len(nt)<25: p.decompose()
            else: p.string=nt
    for n in s.select('.psc-note'):
        if len(n.get_text(strip=True))<20: n.decompose()
    out=str(s); return out[:out.rstrip().rfind('</div>')+6]
out={}
for f in sorted(glob.glob(f'{base}/vystup/skupina-*.json')): out.update(json.load(open(f)))
inp={}
for f in sorted(glob.glob(f'{base}/vstup/*.json')):
    for d in json.load(open(f)): inp[d['code']]=d
web=json.load(open(f'{base}/web-produkty.json'))  # code -> [url,name]
missing=[c for c in inp if c not in out]; extra=[c for c in out if c not in inp]
out={c:clean(v) for c,v in out.items() if c in inp}
def toks(n): return {t.lower() for t in re.findall(r'[A-Za-zÀ-ž]{3,}',n)}
def size(n):
    m=re.search(r'(\d{2,3})',n); return int(m.group(1)) if m else 0
nm=lambda c: re.sub(r'\s*\(katalógový kód [^)]*\)','',re.sub(r',? ?energetická trieda \w+','',html.unescape(web[c][1])))
cands=[c for c in out if c in web]
def sibs(c):
    n=nm(c);b=(inp[c]['manufacturer'] or n.split()[0]).lower();sc=[]
    for o in cands:
        if o==c or (inp[o]['manufacturer'] or nm(o).split()[0]).lower()!=b: continue
        sc.append((-(len(toks(n)&toks(nm(o)))*2),abs(hash(o))%1,o))
    sc.sort(); return [o for _,_,o in sc[:4]]
rel=''.join(f'<li><a href="{u}">{html.escape(t)}</a> – {html.escape(d)}</li>' for u,t,d in REL[slug])
final={};nolink=[];faq=[]
for c,h in out.items():
    ss=sibs(c) if c in web else []
    if not ss: nolink.append(c)
    links=''.join(f'<li><a href="{web[o][0]}">{html.escape(nm(o))}</a></li>' for o in ss)
    more=(f'<section id="psc-dalsie"><h2>Ďalšie modely, ktoré môžu zaujímať</h2><ul>{links}</ul></section>' if links else '')
    sect=f'<section class="psc-section psc-soft" id="psc-suvisiace"><h2>Súvisiace kategórie</h2><ul>{rel}</ul></section>'
    final[c]=h[:-6]+more+sect+'</div>'
    faq.append(len(BeautifulSoup(final[c],'html.parser').find_all('details')))
rows=[['code','pairCode','description']]+[[c,'',h] for c,h in sorted(final.items())]
fn=f'{base}/import-{slug}-2026-10-09.csv'
with open(fn,'w',encoding='utf-8-sig',newline='') as f:
    csv.writer(f,delimiter=';',quoting=csv.QUOTE_ALL,lineterminator='\r\n').writerows(rows)
t=' '.join(final.values())
print(slug,'vstup',len(inp),'hotove',len(final),'chyba',missing,'navyše',extra,'bez sourodencov',len(nolink),'FAQ min/avg',min(faq),round(sum(faq)/len(faq),1),'zakazane',len(re.findall(r'feed|dodávateľ|spotreb|energetick|neuvád|podklad',BeautifulSoup(t,'html.parser').get_text(),re.I)),'script' ,'<script' in t)
