import { useState } from 'react';
import { faq } from '../content/site.js';
import './Faq.css';

export default function Faq() {
  const [open, setOpen] = useState(faq.initialOpen);

  return (
    <section className="section">
      <div className="section--center">
        <p className="eyebrow" id="faq">{faq.eyebrow}</p>
        <h2 className="h2 faq__heading">{faq.heading}</h2>
        <p className="faq__sub">{faq.sub}</p>
      </div>

      <div className="faq__list">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;
          return (
            <div key={item.q} className="faq__item">
              <h3>
                <button
                  type="button"
                  id={btnId}
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq__qText">{item.q}</span>
                  <span className={`faq__caret${isOpen ? ' faq__caret--open' : ''}`} aria-hidden="true">▼</span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="faq__a"
                hidden={!isOpen}
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>

      <p className="faq__foot">
        Still unsure?{' '}
        <a href="mailto:contactsupport@kloyya.com?subject=Kloyya%20demo%20request">Book a demo</a>{' '}
        and we&rsquo;ll run one of your own outcomes live.
      </p>
    </section>
  );
}
