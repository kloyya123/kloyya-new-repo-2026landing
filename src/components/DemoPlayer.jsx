import { useState } from 'react';
import { demo } from '../content/site.js';
import ToolIcon from './ToolIcon.jsx';
import './DemoPlayer.css';

/**
 * A click-through walkthrough standing in for a real product video.
 * Chapter chips are wired and change the active state; the frame
 * itself is a static composition.
 *
 * When you have a real recording: swap the frame for a <video> and
 * make `setChapter` seek it (`videoRef.current.currentTime = t`).
 * Keep the chapter list — it converts better than a bare play button.
 */
export default function DemoPlayer() {
  const [chapter, setChapter] = useState(demo.initialChapter);

  return (
    <section className="demo">
      <div className="demo__frame">
        <div className="demo__chrome">
          <span className="demo__dot" />
          <span className="demo__dot" />
          <span className="demo__dot" />
          <span className="demo__url mono">{demo.urlBar}</span>
        </div>

        <div className="demo__body">
          <div className="demo__query">
            <div className="demo__queryText">
              {demo.query}
              <span className="demo__caret" aria-hidden="true" />
            </div>
            <div className="demo__reading">
              <span className="demo__readingLabel">{demo.readingLabel}</span>
              {demo.readingTools.map((t) => (
                <span key={t.id} className="demo__tool">
                  <ToolIcon tool={t} size={16} glyph={9} radius={4} />
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <blockquote className="demo__quote">
            <p className="voice demo__quoteText">{demo.quote}</p>
            <cite className="demo__quoteCite mono">{demo.quoteAttribution}</cite>
          </blockquote>
        </div>

        <div className="demo__transport">
          <button type="button" className="demo__play" aria-label="Play the demo">▶</button>
          <span className="demo__time mono">{demo.elapsed} / {demo.duration}</span>
          <span className="demo__track">
            <span className="demo__trackFill" style={{ width: `${demo.progressPct}%` }} />
          </span>
          <span className="demo__chapterCount mono">
            CHAPTER {chapter + 1} OF {demo.chapters.length}
          </span>
        </div>
      </div>

      <div className="demo__chapters">
        {demo.chapters.map((c, i) => (
          <button
            key={c.t}
            type="button"
            className={`demo__chapter${chapter === i ? ' demo__chapter--on' : ''}`}
            aria-current={chapter === i}
            onClick={() => setChapter(i)}
          >
            <span className="demo__chapterTime mono">{c.t}</span>
            {c.label}
          </button>
        ))}
      </div>
    </section>
  );
}
