import { useEffect, useRef, useState } from 'react';
import { hero } from '../content/site.js';
import './Hero.css';

/* Static bar heights for the "listening" waveform. Deterministic so
   the layout never jumps between renders. */
const BARS = Array.from({ length: 28 }, (_, i) => ({
  delay: `${(i * 0.07).toFixed(2)}s`,
  height: `${26 + ((i * 37) % 60)}%`
}));

export default function Hero() {
  const [query, setQuery] = useState('');
  const [recording, setRecording] = useState(false);
  const [secs, setSecs] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => clearInterval(timer.current), []);

  /**
   * SIMULATED voice capture. It fakes a transcription by appending
   * words on an interval.
   *
   * Replace with the real flow: getUserMedia → MediaRecorder →
   * POST /api/outcomes/:id/transcribe. Do not persist the audio
   * after transcription. See backend spec § 9.
   */
  const toggleRecording = () => {
    if (recording) {
      clearInterval(timer.current);
      setRecording(false);
      return;
    }
    let i = 0;
    setRecording(true);
    setSecs(0);
    setQuery('');
    timer.current = setInterval(() => {
      setSecs((s) => s + 1);
      if (i < hero.transcript.length) {
        setQuery((q) => q + hero.transcript[i]);
        i += 1;
      } else if (i >= hero.transcript.length + 2) {
        clearInterval(timer.current);
        setRecording(false);
      } else {
        i += 1;
      }
    }, 620);
  };

  const submit = () => {
    clearInterval(timer.current);
    setRecording(false);
    /* TODO: POST /api/outcomes then redirect to the plan screen.
       Signed-out visitors should land on /signup with the query
       preserved — it is the single highest-intent signal you get. */
    console.info('[kloyya] outcome submitted:', query);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const recTime = `0:${String(secs).padStart(2, '0')}`;

  return (
    <section className="hero" id="top">
      <div className="hero__panel">
        <div className="hero__aurora" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />

        <div className="hero__inner">
          <div className="hero__badge">
            <span className="hero__badgeTag">{hero.badge.tag}</span>
            {hero.badge.text}
            <span className="hero__badgeDot" aria-hidden="true">·</span>
            <a href={hero.badge.href}>{hero.badge.linkLabel}</a>
          </div>

          <h1 className="hero__headline">
            {hero.headline} <em className="hero__accent">{hero.headlineAccent}</em>
          </h1>

          <p className="hero__sub">{hero.sub}</p>

          <div className="ask">
            <label className="ask__label" htmlFor="ask">Ask Kloyya for an outcome</label>
            <textarea
              id="ask"
              className="ask__field"
              rows={3}
              value={query}
              placeholder={hero.placeholder}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
            />

            {recording && (
              <div className="ask__listening">
                <span className="ask__listeningLabel">
                  <span className="ask__listeningDot" aria-hidden="true" />
                  Listening
                </span>
                <div className="ask__wave" aria-hidden="true">
                  {BARS.map((b, i) => (
                    <span key={i} className="ask__waveBar" style={{ height: b.height, animationDelay: b.delay }} />
                  ))}
                </div>
                <span className="ask__timer mono">{recTime}</span>
              </div>
            )}

            <div className="ask__toolbar">
              <button type="button" className="ask__attach" aria-label="Attach a file">+</button>

              <button
                type="button"
                className={`ask__mic${recording ? ' ask__mic--on' : ''}`}
                onClick={toggleRecording}
                aria-pressed={recording}
              >
                <span aria-hidden="true">●</span>
                {recording ? 'Stop' : 'Speak it'}
              </button>

              <span className="ask__hint">{hero.micHint}</span>

              <button type="button" className="ask__send" onClick={submit} aria-label="Submit outcome">↑</button>
            </div>
          </div>

          <div className="hero__chips">
            {hero.chips.map((c) => (
              <button key={c} type="button" className="hero__chip" onClick={() => setQuery(c)}>{c}</button>
            ))}
          </div>

          <p className="hero__footnote">{hero.footnote}</p>
        </div>
      </div>
    </section>
  );
}
