# PremiumStore font preload setup

This snippet is a manual Shoptet HEAD change. Add it before publishing the updated `premiumstore-cro.css` and `premiumstore-main.css` files. It is not deployed by this branch.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet">
```

After adding the links in Shoptet, remove/replace the previous stylesheet links only as directed by the deployment checklist. Verify the navigation font (Quicksand) and page font (Plus Jakarta Sans) on desktop and mobile.
