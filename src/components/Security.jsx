import { security as s } from '../content/site.js';
import './Security.css';

export default function Security() {
  return (
    <section className="section">
      <div className="sec">
        <div className="sec__body">
          <p className="eyebrow eyebrow--dark" id="security">{s.eyebrow}</p>
          <h2 className="h2 sec__heading">{s.heading}</h2>

          <div className="sec__grid">
            {s.guarantees.map((g) => (
              <article key={g.tag} className="sec__card">
                <p className="sec__tag mono">{g.tag}</p>
                <h3 className="sec__cardTitle">{g.title}</h3>
                <p className="sec__cardText">{g.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/*
          ⚠ COMPLIANCE CLAIMS — do not ship until legal and security
          have signed off on every badge below. See README.
        */}
        <div className="sec__foot">
          {s.badges.map((b) => (
            <span key={b} className="sec__badge mono">{b}</span>
          ))}
          {s.link && <a className="sec__link" href={s.link.href}>{s.link.label}</a>}
        </div>
      </div>
    </section>
  );
}
