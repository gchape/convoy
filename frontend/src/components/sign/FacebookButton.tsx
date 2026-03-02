const FacebookButton = () => (
  <button className="flex items-center justify-center gap-2 h-10 bg-zinc-900 border border-white/8 rounded-[9px] text-[12px] font-semibold text-zinc-500 cursor-pointer transition-all duration-150 hover:border-white/15 hover:text-zinc-100 hover:bg-zinc-800">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.986 3.657 9.165 8.438 9.883v-6.984h-2.54v-2.9h2.54v-2.2c0-3.424 2.028-5.462 5.167-5.462 1.5 0 2.778.111 3.141.162v2.838h-2.136c-1.672 0-2.085.833-2.085 2.09v2.632h3.69l-.476 2.9h-3.214v6.984C18.343 21.165 22 16.986 22 12z" />
    </svg>
    Facebook
  </button>
);

export default FacebookButton;
