import { footer as f } from '../content/site.js';
import './Footer.css';

/* A footer link is a real <a> only when it has an href; otherwise
   it renders as plain text so we never ship a dead "#" anchor. */
function FooterLink({ label, href }) {
  if (!href) return <span className="ft__link ft__link--soon">{label}</span>;
  return <a href={href} className="ft__link">{label}</a>;
}

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
                <FooterLink key={l.label} label={l.label} href={l.href} />
              ))}
            </div>
          </nav>
        ))}
      </div>

      <div className="ft__bottom">
        <span className="ft__copy">{f.copyright}</span>
      </div>
    </footer>
  );
}
