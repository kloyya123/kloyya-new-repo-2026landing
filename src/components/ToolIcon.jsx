/**
 * The one way a tool's brand mark is rendered anywhere on the page.
 *
 * Marks are drawn as a CSS background rather than an <img> so a
 * missing icon degrades to an empty chip instead of a broken-image
 * glyph. `size` is the chip; `glyph` is the mark inside it.
 */
export default function ToolIcon({ tool, size = 20, glyph = 11, radius = 5, className = '' }) {
  if (!tool) return null;
  return (
    <span
      className={`icon-chip ${className}`}
      style={{ width: size, height: size, borderRadius: radius }}
      aria-hidden="true"
    >
      <span
        className="icon-chip__glyph"
        style={{ width: glyph, height: glyph, backgroundImage: `url(${tool.icon})` }}
      />
    </span>
  );
}
