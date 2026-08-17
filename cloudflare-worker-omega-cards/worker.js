// Omega skladove karty (Eshop) - male API, ktore drzi data/omega-stock-cards.json ako jediny
// zdroj pravdy a commitne kazdu zmenu priamo do GitHub repozitara (cez GitHub Contents API), aby
// naskladnenie.html (aj scripts/transform-omega-prijemka.js) nemuseli rucne stahovat/nahradzat
// aktualizovanu databazu po kazdom pouziti.
//
// GET  /state              -> aktualny stav (verejne citatelne, neobsahuje citlive udaje)
// POST /reserve             -> { items: [{ean, name, supplier}, ...] }
//                              pre kazdu polozku bez existujuceho zaznamu pridel'uje dalsie volne
//                              cislo karty (eshop.nextCardNumber), commitne zmenu do repozitara a
//                              vrati mapovanie ean -> {kod, nazov, dodavatel, isNew}
//                              vyzaduje hlavicku X-Api-Key (zdielany tajny kluc, viz secrets nizsie)

const FILE_PATH = 'data/omega-stock-cards.json';
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Api-Key',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS_HEADERS });

    try {
      if (url.pathname === '/state' && request.method === 'GET') {
        const { db } = await fetchFile(env);
        return jsonResponse(db);
      }

      if (url.pathname === '/reserve' && request.method === 'POST') {
        if (request.headers.get('X-Api-Key') !== env.API_KEY) {
          return jsonResponse({ error: 'Unauthorized' }, 401);
        }
        const body = await request.json();
        const items = Array.isArray(body.items) ? body.items : [];
        return await reserveCards(env, items);
      }

      return jsonResponse({ error: 'Not found' }, 404);
    } catch (err) {
      return jsonResponse({ error: String(err && err.message || err) }, 500);
    }
  },
};

async function reserveCards(env, items, attempt = 0) {
  const { db, sha } = await fetchFile(env);
  const assigned = {};
  let changed = false;

  for (const item of items) {
    if (!item.ean) continue;
    let card = db.eshop.cards[item.ean];
    let isNew = false;
    if (!card) {
      card = { kod: String(db.eshop.nextCardNumber), nazov: item.name, dodavatel: item.supplier || '' };
      db.eshop.cards[item.ean] = card;
      db.eshop.nextCardNumber += 1;
      changed = true;
      isNew = true;
    }
    assigned[item.ean] = { ...card, isNew };
  }

  if (!changed) return jsonResponse({ assigned, nextCardNumber: db.eshop.nextCardNumber });

  const commitOk = await commitFile(env, db, sha, items);
  if (!commitOk) {
    // GitHub SHA konflikt (subezny zapis) - skus znova s cerstvym stavom, max 3x
    if (attempt < 2) return reserveCards(env, items, attempt + 1);
    return jsonResponse({ error: 'Konflikt pri ukladani, skus znova.' }, 409);
  }

  return jsonResponse({ assigned, nextCardNumber: db.eshop.nextCardNumber });
}

async function ghFetch(env, path, options = {}) {
  return fetch(`https://api.github.com/repos/${env.GH_REPO}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      'User-Agent': 'omega-cards-worker',
      Accept: 'application/vnd.github+json',
      ...(options.headers || {}),
    },
  });
}

async function fetchFile(env) {
  const res = await ghFetch(env, `contents/${FILE_PATH}`);
  if (!res.ok) throw new Error(`GitHub fetch zlyhalo: ${res.status}`);
  const data = await res.json();
  const content = decodeURIComponent(escape(atob(data.content.replace(/\n/g, ''))));
  return { db: JSON.parse(content), sha: data.sha };
}

async function commitFile(env, db, sha, items) {
  const content = JSON.stringify(db, null, 2) + '\n';
  const encoded = btoa(unescape(encodeURIComponent(content)));
  const names = items.map((i) => i.name).slice(0, 3).join(', ');
  const res = await ghFetch(env, `contents/${FILE_PATH}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: `Omega Eshop: nove skladove karty - ${names}`,
      content: encoded,
      sha,
      branch: 'main',
    }),
  });
  if (res.status === 409) return false; // sha konflikt - zavolajuci zopakuje
  if (!res.ok) throw new Error(`GitHub commit zlyhal: ${res.status} ${await res.text()}`);
  return true;
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
