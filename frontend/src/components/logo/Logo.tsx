export default function Logo({ clickable = true }: { clickable?: boolean }) {
  return (
    <a
      href="/"
      className={`flex place-items-center gap-2 no-underline select-none ${clickable || "pointer-events-none"}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(180deg)" }}
      >
        <path d="M0 11L7 0L11 6L6 11L11 16L7 22L0 11Z" fill="#f97316" />
        <path
          d="M9 11L16 0L20 6L15 11L20 16L16 22L9 11Z"
          fill="#f97316"
          opacity="0.6"
        />
      </svg>

      <span className="text-2xl font-[Black_Ops_One,system-ui] uppercase text-zinc-100">
        Convoy
      </span>
    </a>
  );
}
