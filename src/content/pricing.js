/**
 * Pricing arithmetic — one place, derived, never hand-typed.
 *
 * Yearly = round(monthly × 12 × (1 − discount)). The prototype and
 * the backend spec both compute it this way; if you hardcode a
 * yearly figure anywhere it will silently desync the day someone
 * changes a monthly price.
 *
 * NOTE for the backend: prices belong in CENTS server-side, and the
 * client must never send back a price it computed. Spec § 6.
 */

export const usd = (n) => '$' + n.toLocaleString('en-US');

export const yearlyFor = (monthly, discount) => Math.round(monthly * 12 * (1 - discount));

export const savingFor = (monthly, discount) => monthly * 12 - yearlyFor(monthly, discount);

/**
 * Resolves one tier into the strings the card renders.
 * Handles the three shapes: free ($0), paid, and custom-priced.
 */
export function resolveTier(tier, discount) {
  const isCustom = tier.monthly === null;
  const isFree = tier.monthly === 0;

  if (isCustom || isFree) {
    return {
      ...tier,
      priceLabel: isCustom ? 'Custom' : usd(0),
      cadenceLabel: tier.cadenceLabel || 'forever',
      yearlyLabel: tier.yearlyOverride || ''
    };
  }

  const yearly = yearlyFor(tier.monthly, discount);
  const saving = savingFor(tier.monthly, discount);

  return {
    ...tier,
    priceLabel: usd(tier.monthly),
    cadenceLabel: 'per month',
    yearlyLabel: `${usd(yearly)} a year — saves ${usd(saving)}`
  };
}
