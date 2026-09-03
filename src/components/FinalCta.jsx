import { finalCta as c } from '../content/site.js';
import './FinalCta.css';

export default function FinalCta() {
  return (
    <section className="section">
      <div className="cta">
        <div className="cta__aurora" aria-hidden="true" />
        <div className="cta__scrim" aria-hidden="true" />
        <div className="cta__inner">
          <h2 className="cta__heading">{c.heading}</h2>
          <p className="cta__sub">{c.sub}</p>
          <div className="cta__actions">
            {/* TODO: wire to /signup and demo booking — spec § 6/§7. */}
            <a className="btn btn--dark" href="mailto:contactsupport@kloyya.com?subject=Start%20a%20Kloyya%20trial">{c.primary}</a>
            <a className="btn btn--ghost" href="mailto:contactsupport@kloyya.com?subject=Talk%20to%20the%20Kloyya%20team">{c.secondary}</a>
          </div>
          <p className="cta__footnote">{c.footnote}</p>
        </div>
      </div>
    </section>
  );
}
