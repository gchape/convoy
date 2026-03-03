export default function Logo() {
  return (
    <a href="/" className="flex items-center no-underline select-none">
      <svg
        width="140"
        height="32"
        viewBox="0 0 140 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="convoyOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8C32" />
            <stop offset="100%" stopColor="#D35400" />
          </linearGradient>
        </defs>

        <g transform="translate(0, 4)">
          <path d="M14 0 L24 12 L14 24 L19 24 L29 12 L19 0 Z" fill="#5C3317" />
          <path
            d="M2 0 L12 12 L2 24 L7 24 L17 12 L7 0 Z"
            fill="url(#convoyOrange)"
          />
        </g>

        <text
          x="38"
          y="25"
          fill="#FFFFFF"
          style={{
            fontSize: "24px",
            fontFamily: "Black Ops One, system-ui",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          CONVOY
        </text>
      </svg>
    </a>
  );
}
