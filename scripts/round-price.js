// Rounds a price to the nearest of X.00 / X.50 / X.90 (whichever euro-cents ending is
// numerically closest to the original price). On an exact tie, prefers the higher ending.
//
// EXCEPTION: below €10, a 50-cent gap between endings is a large chunk of the price (and can
// force giving up margin unnecessarily just to avoid a competitor's price sitting mid-gap), so
// under €10 we round to the nearest 10 cents instead (X.00/X.10/X.20/.../X.90). €10 and above
// keeps the original three-tier rule.
function roundPrice(price) {
  if (!price || price <= 0) return price;
  if (price < 10) {
    return Math.round(price * 10) / 10;
  }
  const euros = Math.floor(price + 1e-9);
  const candidates = [euros, euros + 0.5, euros + 0.9, euros + 1.0];
  let best = candidates[0];
  let bestDiff = Math.abs(price - best);
  for (const c of candidates) {
    const diff = Math.abs(price - c);
    if (diff <= bestDiff) { bestDiff = diff; best = c; }
  }
  return Math.round(best * 100) / 100;
}

// Like roundPrice, but only ever rounds UP to the next valid ending — used for safety floors
// (minimum margin) where rounding down could undo the guarantee the floor exists for. Applies
// the same sub-€10 exception as roundPrice.
function roundPriceUp(price) {
  if (!price || price <= 0) return price;
  if (price < 10) {
    return Math.round((Math.ceil(price * 10 - 1e-9) / 10) * 100) / 100;
  }
  const euros = Math.floor(price + 1e-9);
  const candidates = [euros, euros + 0.5, euros + 0.9, euros + 1.0];
  for (const c of candidates) {
    if (c >= price - 1e-9) return Math.round(c * 100) / 100;
  }
  return Math.round((euros + 1.0) * 100) / 100;
}

module.exports = { roundPrice, roundPriceUp };
