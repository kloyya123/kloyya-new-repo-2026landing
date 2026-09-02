import { pushback as p } from '../content/site.js';
import { TOOLS } from '../content/tools.js';
import ToolIcon from './ToolIcon.jsx';
import './Pushback.css';

export default function Pushback() {
  return (
    <section className="section">
      <div className="pb">
        <div className="pb__lead">
          <h2 className="h2 pb__heading">{p.heading}</h2>
          <p className="lede pb__sub">{p.sub}</p>
        </div>

        <div className="card pb__card">
          <div className="pb__quoteWrap">
            <span className="pb__tag">{p.tag}</span>
            <p className="voice pb__quote">
              {p.quoteBefore}
              <em className="pb__mark">{p.quoteHighlight}</em>
              {p.quoteAfter}
            </p>
          </div>

          <div className="pb__sources">
            <p className="pb__sourcesLabel mono">{p.sourcesLabel}</p>
            {p.sources.map((s) => (
              <div key={s.toolId} className="pb__source">
                <ToolIcon tool={TOOLS[s.toolId]} size={18} glyph={9} />
                <span className="pb__sourceName">{s.name}</span>
                <span className="pb__sourceDetail">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
