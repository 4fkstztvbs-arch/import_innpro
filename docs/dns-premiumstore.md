# Presun domény premiumstore.sk na Shoptet (DNS)


DNS pre `premiumstore.sk` sa spravuje u **Crooce** (`moj.crooce.com`, nameservery `1.ns.pri.crooce.com` / `1.ns.sec.crooce.com` — tie ostávajú nezmenené). Pošta (MX cez Seznam Email Profi) a ostatné subdomény (`imap`/`pop3`/`smtp`/`webmail`, `blog`, `helpdesk`, `shop`, `import`, `monacor`, `samsung`, `audio`, google-verifikačné CNAME) bežia nezávisle a touto zmenou sa nedotýkajú.

**Stav (2026-08-10): DNS prepnuté na Shoptet.**
- `premiumstore.sk` (root) — dva A záznamy: `185.184.254.10` a `185.184.254.11`
- `www.premiumstore.sk` — CNAME → `www.myshoptet.com.`
- Predtým obe smerovali na starý SHOPTEC eshop (A záznam, IP `185.59.208.190`). Starý eshop sa **nezachováva bežať súbežne** na inej subdoméne (vedomé rozhodnutie) — pôvodné produkčné dáta na `185.59.208.190` naďalej existujú, takže sa dá kedykoľvek vrátiť späť.

**Návrat späť (rollback), ak by bolo treba:**
1. V Crooce DNS zóne zmazať oba root A záznamy (`185.184.254.10`, `185.184.254.11`) a pridať jeden nový A záznam (bez návestia) s hodnotou `185.59.208.190`.
2. Zmazať `www` CNAME (`www.myshoptet.com.`) a pridať nový A záznam `www` s hodnotou `185.59.208.190`.

Po zmene DNS treba v Shoptet administrácii (Nastavenia → Prepojenie → Presun na doménu) potvrdiť/aktualizovať kontrolu DNS a počkať na vystavenie SSL certifikátu pre `premiumstore.sk` aj `www.premiumstore.sk` (propagácia do ~1h, TTL 3 600). Zvyšok checklistu pre deň D (presmerovania, Heureka feed URL, Search Console...) je v `reports/navod-migracia-na-shoptet.md`.

---
