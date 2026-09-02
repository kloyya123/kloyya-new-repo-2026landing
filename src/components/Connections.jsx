import { connections as c } from '../content/site.js';
import { allTools } from '../content/tools.js';
import ToolIcon from './ToolIcon.jsx';
import './Connections.css';

export default function Connections() {
  const tools = allTools();
  return (
    <section className="section">
      <div className="conn__head">
        <p className="conn__title" id="connections">
          {c.headingPlain}
          <strong className="conn__count">{c.headingStrong}</strong>
        </p>
        <a className="conn__link" href={c.link.href}>{c.link.label}</a>
      </div>

      <div className="conn__grid">
        {tools.map((t) => (
          <div key={t.id} className="conn__chip">
            <ToolIcon tool={t} size={20} glyph={11} />
            {t.name}
          </div>
        ))}
      </div>
    </section>
  );
}
