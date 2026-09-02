import { connections as c } from '../content/site.js';
import { allTools } from '../content/tools.js';
import ToolIcon from './ToolIcon.jsx';
import './Connections.css';

export default function Connections() {
  const tools = allTools();
  const marqueeTools = [...tools, ...tools];

  return (
    <section className="section conn" aria-labelledby="connections">
      <div className="conn__head">
        <p className="conn__title" id="connections">
          {c.headingPlain}
          <strong className="conn__count">{c.headingStrong}</strong>
        </p>

        <a className="conn__link" href={c.link.href}>
          {c.link.label}
        </a>
      </div>

      <div
        className="conn__marquee"
        aria-label="Kloyya integrations"
      >
        <div className="conn__track">
          {marqueeTools.map((tool, index) => (
            <div
              key={`${tool.id}-${index}`}
              className="conn__chip"
              aria-hidden={index >= tools.length}
            >
              <ToolIcon
                tool={tool}
                size={38}
                glyph={26}
                bare
              />

              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}