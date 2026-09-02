import { footer as f } from '../content/site.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__top">
        <div className="ft__brandCol">
          <div className="ft__brand">
            <img src="/kloyya-mark.png" alt="" width="22" height="22" />
            <span className="ft__wordmark">Kloyya</span>
          </div>
          <p className="ft__tagline">
            {f.tagline} <em className="ft__taglineAccent">{f.taglineAccent}</em>.
          </p>
        </div>

        {f.columns.map((col) => (
          <nav key={col.title} className="ft__col" aria-label={col.title}>
            <h2 className="ft__colTitle mono">{col.title}</h2>
            <div className="ft__links">
              {col.links.map((l) => (
                <a key={l} href="#" className="ft__link">{l}</a>
              ))}
            </div>
          </nav>
        ))}
      </div>

      <div className="ft__bottom">
        <span className="ft__copy">{f.copyright}</span>
        <div className="ft__meta">
          {/* TODO: wire to a real status source, or delete the row. */}
          <span className="ft__status">
            <span className="ft__statusDot" aria-hidden="true" />
            {f.status}
          </span>
          {f.socials.map((s) => (
            <a key={s.name} href={s.href} className="ft__social" aria-label={s.name}>
              <span className="ft__socialGlyph" style={{ backgroundImage: `url(${s.icon})` }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
