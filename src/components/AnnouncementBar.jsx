import { announcement as a } from '../content/site.js';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  return (
    <div className="announce">
      <span className="announce__tag">{a.tag}</span>
      <span className="announce__text">{a.text}</span>
      {a.linkLabel && a.href && (
        <a className="announce__link" href={a.href}>{a.linkLabel}</a>
      )}
    </div>
  );
}
