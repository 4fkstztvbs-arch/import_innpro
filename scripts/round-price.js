// Rounds a price to the nearest of X.00 / X.50 / X.90 (whichever euro-cents ending is
// numerically closest to the original price). On an exact tie, prefers the higher ending.
function roundPrice(price) {
  if (!price || price <= 0) return price;
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

// Like roundPrice, but only ever rounds UP to the next X.00/X.50/X.90 ending — used for safety
// floors (minimum margin) where rounding down could undo the guarantee the floor exists for.
function roundPriceUp(price) {
  if (!price || price <= 0) return price;
  const euros = Math.floor(price + 1e-9);
  const candidates = [euros, euros + 0.5, euros + 0.9, euros + 1.0];
  for (const c of candidates) {
    if (c >= price - 1e-9) return Math.round(c * 100) / 100;
  }
  return Math.round((euros + 1.0) * 100) / 100;
}

module.exports = { roundPrice, roundPriceUp };
