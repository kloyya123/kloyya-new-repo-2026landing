import { useEffect, useRef, useState } from 'react';
import { nav } from '../content/site.js';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef(null);

  /* Close the dropdown on outside click and on Escape — a menu you
     can only close by clicking the trigger again feels broken. */
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <img src="/kloyya-mark.png" alt="" width="23" height="23" />
        <span className="nav__wordmark">Kloyya</span>
      </a>

      <nav className="nav__links" ref={wrapRef}>
        <button
          type="button"
          className="nav__trigger"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Product <span className="nav__caret" aria-hidden="true">▼</span>
        </button>

        {nav.links.map((l) => (
          <a key={l.href} className="nav__link" href={l.href}>{l.label}</a>
        ))}

        {menuOpen && (
          <div className="nav__menu" role="menu">
            {nav.menu.map((m) => (
              <a
                key={m.name}
                className="nav__menuItem"
                href={m.href}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav__menuGlyph" style={{ background: m.color }} aria-hidden="true">{m.glyph}</span>
                <span className="nav__menuCopy">
                  <span className="nav__menuName">{m.name}</span>
                  <span className="nav__menuDesc">{m.desc}</span>
                </span>
              </a>
            ))}
            <div className="nav__menuFoot">
              <span>{nav.menuFootNote}</span>
              <a href={nav.menuFootLink.href} onClick={() => setMenuOpen(false)}>{nav.menuFootLink.label}</a>
            </div>
          </div>
        )}
      </nav>

      <div className="nav__actions">
        {/* TODO: wire to /login and /signup once auth exists — spec § 4.
            Until then the CTAs open a mail draft to support. */}
        <a className="nav__signin" href="/login">Sign in</a>
        <a className="btn btn--ghost btn--sm" href="mailto:contactsupport@kloyya.com?subject=Kloyya%20demo%20request">Book a demo</a>
        <a className="btn btn--dark btn--sm" href="mailto:contactsupport@kloyya.com?subject=Get%20started%20with%20Kloyya">Get started free</a>
      </div>
    </header>
  );
}
