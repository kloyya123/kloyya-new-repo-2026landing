import { howItWorks as h } from '../content/site.js';
import ToolIcon from './ToolIcon.jsx';
import './HowItWorks.css';

const PLAN_TONE = {
  neutral: { bar: '#DDD8CE', border: 'var(--line-softer)' },
  blue:    { bar: '#C9D9F5', border: 'var(--blue-line)' },
  amber:   { bar: 'var(--amber-line)', border: 'var(--amber-line)' }
};

const LOG_TONE = { read: '#4C8B6B', plain: '#6B7079', signal: '#7C93C9', gap: '#C08A4C' };

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="section--center">
        <p className="eyebrow" id="product">{h.eyebrow}</p>
        <h2 className="h2 hiw__heading">{h.heading}</h2>
      </div>

      <div className="hiw__row hiw__row--two">
        <article className="card hiw__card">
          <div className="hiw__viz hiw__viz--composer">
            <div className="hiw__mockAsk">
              <p className="hiw__mockQuery">
                {h.composer.mockQuery}
                <span className="hiw__mockCaret" aria-hidden="true" />
              </p>
              <div className="hiw__mockToolbar" aria-hidden="true">
                <span className="hiw__mockRound">+</span>
                <span className="hiw__mockPill"><span className="hiw__mockRec">●</span>Speak it</span>
                <span className="hiw__mockSend">↑</span>
              </div>
            </div>
          </div>
          <div className="card__body">
            <p className="card__kicker">{h.composer.kicker}</p>
            <h3 className="card__title">{h.composer.title}</h3>
            <p className="card__text">{h.composer.text}</p>
          </div>
        </article>

        <article className="card hiw__card">
          <div className="hiw__viz hiw__viz--connected">
            <div className="hiw__mini">
              <p className="hiw__miniLabel mono">YOUR STACK</p>
              <div className="hiw__miniGrid">
                {h.connected.stack.map((t) => (
                  <ToolIcon key={t.id} tool={t} size={22} glyph={13} radius={6} />
                ))}
              </div>
            </div>
            <span className="hiw__arrow" aria-hidden="true">→</span>
            <div className="hiw__mini">
              <p className="hiw__miniLabel hiw__miniLabel--blue mono">{h.connected.answerLabel}</p>
              <p className="hiw__miniValue">{h.connected.answerValue}</p>
              <span className="hiw__miniBar">
                <span className="hiw__miniBarFill" style={{ width: `${h.connected.answerBarPct}%` }} />
              </span>
              <p className="hiw__miniNote">{h.connected.answerNote}</p>
            </div>
          </div>
          <div className="card__body">
            <p className="card__kicker">{h.connected.kicker}</p>
            <h3 className="card__title">{h.connected.title}</h3>
            <p className="card__text">{h.connected.text}</p>
          </div>
        </article>
      </div>

      <div className="hiw__row hiw__row--three">
        <article className="card hiw__card">
          <div className="hiw__viz hiw__viz--plan">
            {h.plan.steps.map((s) => (
              <div key={s.n} className="hiw__planStep" style={{ borderColor: PLAN_TONE[s.tone].border }}>
                <span className="hiw__planNum mono">{s.n}</span>
                <span className="hiw__planBar" style={{ width: s.w, background: PLAN_TONE[s.tone].bar }} />
              </div>
            ))}
          </div>
          <div className="card__body card__body--tight">
            <p className="card__kicker">{h.plan.kicker}</p>
            <h3 className="card__title card__title--sm">{h.plan.title}</h3>
            <p className="card__text card__text--sm">{h.plan.text}</p>
          </div>
        </article>

        <article className="card hiw__card">
          <div className="hiw__viz hiw__viz--log">
            {h.runs.log.map((l, i) => (
              <div key={i} className="hiw__logLine mono">
                <span className="hiw__logTime">{l.t}</span>
                <span style={{ color: LOG_TONE[l.tone] }}>{l.tag}</span>
                <span className="hiw__logMsg">{l.msg}</span>
              </div>
            ))}
          </div>
          <div className="card__body card__body--tight">
            <p className="card__kicker">{h.runs.kicker}</p>
            <h3 className="card__title card__title--sm">{h.runs.title}</h3>
            <p className="card__text card__text--sm">{h.runs.text}</p>
          </div>
        </article>

        <article className="card hiw__card">
          <div className="hiw__viz hiw__viz--lock">
            <div className="hiw__lockTile">
              <span className="hiw__lockBody"><span className="hiw__lockShackle" /></span>
            </div>
          </div>
          <div className="card__body card__body--tight">
            <p className="card__kicker">{h.enterprise.kicker}</p>
            <h3 className="card__title card__title--sm">{h.enterprise.title}</h3>
            <p className="card__text card__text--sm">{h.enterprise.text}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
