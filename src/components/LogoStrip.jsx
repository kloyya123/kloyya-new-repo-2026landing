import { logoStrip } from '../content/site.js';
import './LogoStrip.css';

/**
 * Wordmarks are set as type, not images — deliberate while these are
 * placeholder names. Swap for real SVG logos only once you have
 * written permission from each customer to use their brand.
 */
export default function LogoStrip() {
  return (
    <section className="logos">
      <p className="logos__label">{logoStrip.label}</p>
      <div className="logos__row">
        {logoStrip.names.map((n) => (
          <span key={n} className="logos__name">{n}</span>
        ))}
      </div>
    </section>
  );
}
