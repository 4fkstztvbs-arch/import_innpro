import re,subprocess,sys,json,html
from concurrent.futures import ThreadPoolExecutor
slug=sys.argv[1]
def get(u): return subprocess.run(['curl','-sL',u],capture_output=True,text=True).stdout
def page(n):
    h=get(f'https://www.premiumstore.sk/{slug}/'+(f'strana-{n}/' if n>1 else ''))
    out={}
    for b in re.split(r'<div class="p" data-micro="product"',h)[1:]:
        sku=re.search(r'data-micro="sku">([^<]+)<',b); u=re.search(r'href="([^"]+)"\s+class="name"',b); nm=re.search(r'data-micro="name"[^>]*>(.*?)</span>',b,re.S)
        if sku: out[sku.group(1).strip()]=[u.group(1) if u else '',html.unescape(re.sub(r'\s+',' ',nm.group(1)).strip()) if nm else '']
    return out
h=get(f'https://www.premiumstore.sk/{slug}/')
pages=max([1]+[int(x) for x in re.findall(r'/strana-(\d+)/',h)])
res={}
with ThreadPoolExecutor(6) as ex:
    for o in ex.map(page,range(1,pages+1)): res.update(o)
print(slug,pages,len(res))
json.dump(res,open(f'/tmp/cat-{slug}.json','w'),ensure_ascii=False)
