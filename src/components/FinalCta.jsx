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
            <button type="button" className="btn btn--dark">{c.primary}</button>
            <button type="button" className="btn btn--ghost">{c.secondary}</button>
          </div>
          <p className="cta__footnote">{c.footnote}</p>
        </div>
      </div>
    </section>
  );
}
