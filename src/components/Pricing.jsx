import { pricing as p } from '../content/site.js';
import { resolveTier } from '../content/pricing.js';
import './Pricing.css';

const CTA_CLASS = {
  primary: 'btn btn--primary',
  ghost: 'btn btn--ghost',
  dark: 'btn btn--dark'
};

/* Interim CTA target. Real wiring is /signup?plan=<id> — never let
   the client send back a price it computed. Backend spec § 6. */
const ctaHref = (tier) =>
  `mailto:contactsupport@kloyya.com?subject=${encodeURIComponent(`Kloyya ${tier.name} plan`)}`;

export default function Pricing() {
  /* Yearly figures are derived here, never authored — change a
     monthly price in site.js and every saving updates with it. */
  const tiers = p.tiers.map((t) => resolveTier(t, p.yearlyDiscount));

  return (
    <section className="section section--wide">
      <div className="section--center">
        <p className="eyebrow" id="pricing">{p.eyebrow}</p>
        <h2 className="h2 pr__heading">{p.heading}</h2>
        <p className="lede pr__sub">{p.sub}</p>
      </div>

      <div className="pr__grid">
        {tiers.map((t) => (
          <article key={t.id} className={`pr__tier${t.highlighted ? ' pr__tier--on' : ''}`}>
            <div className="pr__nameRow">
              <h3 className="pr__name">{t.name}</h3>
              {t.badge && <span className="pr__badge mono">{t.badge}</span>}
            </div>

            <div className="pr__priceRow">
              <span className="pr__price">{t.priceLabel}</span>
              <span className="pr__cadence">{t.cadenceLabel}</span>
            </div>

            <p className="pr__yearly mono">{t.yearlyLabel}</p>
            <p className="pr__desc">{t.desc}</p>

            <a href={ctaHref(t)} className={`${CTA_CLASS[t.ctaStyle]} pr__cta`}>{t.cta}</a>

            <ul className="pr__feats">
              {t.features.map((f) => (
                <li key={f} className="pr__feat">
                  <span className="pr__check" aria-hidden="true">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {p.terms && (
        <p className="pr__terms">
          {p.terms.text}{' '}
          <a href={p.terms.linkHref}>{p.terms.linkLabel}</a>
        </p>
      )}
    </section>
  );
}
