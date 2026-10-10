import re,json,sys,html,os,glob
cd=lambda s:re.sub(r'^<!\[CDATA\[|\]\]>$','',s.strip())
feeds={}
for f in glob.glob('output/*.xml'):
    x=open(f,encoding='utf-8').read(); name=os.path.basename(f)[:-4]
    for it in re.findall(r'<SHOPITEM>.*?</SHOPITEM>',x,re.S):
        m=re.search(r'<CODE>(.*?)</CODE>',it,re.S)
        if not m: continue
        feeds.setdefault(cd(m.group(1)),[]).append((name,it))
def build(c,it):
    g=lambda t:(lambda m:html.unescape(cd(m.group(1))).strip() if m else '')(re.search(rf'<{t}>(.*?)</{t}>',it,re.S))
    props=[[html.unescape(cd(a)).strip(),html.unescape(cd(b)).strip()] for a,b in re.findall(r'<TEXT_PROPERTY>\s*<NAME>(.*?)</NAME>\s*<VALUE>(.*?)</VALUE>',it,re.S)]
    imgs=re.findall(r'<IMGURL>(.*?)</IMGURL>|<IMAGE[^>]*>(.*?)</IMAGE>',it,re.S)
    imgs=[re.sub(r'^<IMAGE[^>]*>','',cd(a or b)) for a,b in imgs][:6]
    d=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',g('DESCRIPTION')))).strip()
    return dict(code=c,name=g('NAME'),manufacturer=g('MANUFACTURER'),ean=g('EAN'),warranty=g('WARRANTY'),short=g('SHORT_DESCRIPTION'),description=d[:3000],images=imgs,props=props[:40])
tot=0
for slug in sys.argv[1:]:
    base=os.environ.get('PSBASE','/mnt/project-files/popisy-kategorie')+f'/{slug}'
    web=json.load(open(f'{base}/web-produkty.json'))
    have=set()
    for f in glob.glob(base+'/vstup/skupina-*.json'): have|={x['code'] for x in json.load(open(f))}
    items=[];miss=[]
    for c in web:
        if c in have: continue
        if c in feeds: items.append((feeds[c][0][0],build(c,feeds[c][0][1])))
        else:
            m=re.match(r'^([A-Z]{2,3})_(.+)$',c); fm={'AT':'atos','KB':'kb','PEN':'penta','BAS':'basys','SOL':'solight','MON':'monacor','WII':'wiim'}
            if m and m.group(1) in fm and m.group(2) in feeds and any(n==fm[m.group(1)] for n,_ in feeds[m.group(2)]):
                n,it=[x for x in feeds[m.group(2)] if x[0]==fm[m.group(1)]][0]; items.append((n,build(c,it)))
            else: miss.append(c)
    print(slug,'chyba vstup',len(web)-len(have),'najdene vo feedoch',len(items),'nenajdene',len(miss),[ (web[c][1][:30]) for c in miss][:5])
    L=[i for _,i in items]
    if L:
        json.dump(L,open(f'{base}/vstup/doplnok-01.json','w'),ensure_ascii=False,indent=1)
        print(' feedy:',sorted({n for n,_ in items}))
