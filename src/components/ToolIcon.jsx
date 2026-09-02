
export default function ToolIcon({
  tool,
  size = 20,
  glyph = 11,
  radius = 5,
  className = '',
  bare = false,
}) {
  if (!tool) return null;

  if (bare) {
    return (
      <span
        className={`tool-icon--bare ${className}`}
        style={{
          width: size,
          height: size,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '0 0 auto',
          background: 'transparent',
          border: '0',
          boxShadow: 'none',
          borderRadius: 0,
        }}
        aria-hidden="true"
      >
        <span
          className="tool-icon--bare__glyph"
          style={{
            width: glyph,
            height: glyph,
            display: 'block',
            flex: '0 0 auto',
            backgroundImage: `url(${tool.icon})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />
      </span>
    );
  }

  return (
    <span
      className={`icon-chip ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
      }}
      aria-hidden="true"
    >
      <span
        className="icon-chip__glyph"
        style={{
          width: glyph,
          height: glyph,
          backgroundImage: `url(${tool.icon})`,
        }}
      />
    </span>
  );
}