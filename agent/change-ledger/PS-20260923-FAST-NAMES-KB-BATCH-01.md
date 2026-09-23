# Change ledger — fast Slovak product names batch 01

- Date: 2026-09-23
- Scope: K-B computers/mobile/tablets; 19 XML-matched product-name overrides.
- Production path: `data/localization/product-names-sk.json`, applied by the existing K-B nightly transform. No workflow, URL, identifier, price, CPC, image, description, category, tracking, or import logic changed.
- Safety: exact supplier + CODE + EAN + sourceName rows. Active CTR treatment and control cohort checked; overlap is 0. Candidate CODE collisions with current registry are 0.
- Validation: local dry-run against the current K-B XML snapshot changed exactly 19 NAME tags; 0 source/identity issues and 0 missing products. NAME-only validator passed (19 changed, 0 issues); existing localization unit tests passed 4/4.
- Publication: after merge, existing nightly K-B import applies names. Result in generated feed remains PENDING until that workflow run.
- Rollback: remove these 19 exact supplier+CODE rows from the registry; no pipeline code changed.

| CODE | EAN | Source XML name | New Slovak name |
|---|---|---|---|
| 100002204601 | 6939093020425 | Redmi Note 17 5G 6/256GB Black | Mobil Xiaomi Redmi Note 17 5G, 6/256 GB, čierny |
| 100002204613 | 6939093005057 | Redmi Note 17 Pro Max 8/256GB Black | Mobil Xiaomi Redmi Note 17 Pro Max, 8/256 GB, čierny |
| 100002141088 | 198157011274 | LENOVO IDEA TAB 11 5G 8/256GB ZAFM0053CZ | Tablet Lenovo Idea Tab 11 5G, 8/256 GB |
| 100002171985 | 6932554463786 | Redmi Pad 2 Pro 8/256GB šedá (70394) | Tablet Xiaomi Redmi Pad 2 Pro, 8/256 GB, sivý |
| 100002141331 | 8806097415459 | Samsung Galaxy Watch 8 46mm White | Hodinky Samsung Galaxy Watch 8, 46 mm, biele |
| 100002204595 | 6939093006696 | Redmi Note 17 4/128GB Black | Mobil Xiaomi Redmi Note 17, 4/128 GB, čierny |
| 100002202913 | 199274425197 | LENOVO IdeaPad Slim 3 (82XQ01ALCK) | Notebook Lenovo IdeaPad Slim 3, 82XQ01ALCK |
| 100002202783 | 6932554450960 | Redmi Pad 2 4/256GB šedá (79239) | Tablet Xiaomi Redmi Pad 2, 4/256 GB, sivý |
| 100002201276 | 8806097827122 | Samsung Galaxy S26 Ultra 5G 1TB Black | Mobil Samsung Galaxy S26 Ultra 5G, 1 TB, čierny |
| 100002204606 | 6932554425630 | Redmi Note 17 6/256GB Sky Teal | Mobil Xiaomi Redmi Note 17, 6/256 GB, Sky Teal |
| 100002127875 | 8806095862095 | Samsung Galaxy S25 Ultra 5G 512GB Blue | Mobil Samsung Galaxy S25 Ultra 5G, 512 GB, modrý |
| 100002141774 | 199271449158 | LENOVO IdeaPad Flex 5 (82XX00JKCK) | Notebook Lenovo IdeaPad Flex 5, 82XX00JKCK |
| 100002201271 | 8806097828105 | Samsung Galaxy S26+ 5G 512GB White | Mobil Samsung Galaxy S26+ 5G, 512 GB, biely |
| 100002127858 | 8806095851891 | Samsung Galaxy S25 5G 512GB Dark Blue | Mobil Samsung Galaxy S25 5G, 512 GB, tmavomodrý |
| 100002127859 | 8806095853765 | Samsung Galaxy S25 5G 512GB Light Blue | Mobil Samsung Galaxy S25 5G, 512 GB, svetlomodrý |
| 100002200393 | 6932554481605 | Redmi Note 15 Pro+ 5G 8/256GB Brown | Mobil Xiaomi Redmi Note 15 Pro+ 5G, 8/256 GB, hnedý |
| 100002204380 | 198158823258 | Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | Tablet Lenovo Idea Tab Plus, 8/256 GB, ZAG70373CZ |
| 100002204614 | 6939093012178 | Redmi Note 17 Pro Max 8/256GB Blush | Mobil Xiaomi Redmi Note 17 Pro Max, 8/256 GB, Blush |
| 100002171984 | 6932554467364 | Redmi Pad 2 Pro 6/128GB stříbrná (71048) | Tablet Xiaomi Redmi Pad 2 Pro, 6/128 GB, strieborný |
