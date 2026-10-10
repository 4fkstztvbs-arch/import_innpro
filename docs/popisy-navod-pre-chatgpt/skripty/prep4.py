import json,sys,os,subprocess
slug=sys.argv[1]; base=os.environ.get('PSBASE','/mnt/project-files/popisy-kategorie')+f'/{slug}'
os.makedirs(base+'/vstup',exist_ok=True); os.makedirs(base+'/vystup',exist_ok=True)
json.dump(json.load(open(f'/tmp/cat-{slug}.json')),open(base+'/web-produkty.json','w'),ensure_ascii=False)
print(subprocess.run(['python3',os.path.join(os.path.dirname(os.path.abspath(__file__)),'prep2.py'),slug],capture_output=True,text=True).stdout)
d=json.load(open(base+'/vstup/doplnok-01.json')); os.remove(base+'/vstup/doplnok-01.json')
d.sort(key=lambda i:(i['manufacturer'],i['name']))
for n in range(0,len(d),17): json.dump(d[n:n+17],open(f'{base}/vstup/skupina-{n//17+1:02d}.json','w'),ensure_ascii=False,indent=1)
print('skupin',(len(d)+16)//17,len(d))
