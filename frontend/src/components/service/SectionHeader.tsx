const SectionHeader = ({
  title,
  primary,
  secondary,
  margin = 16,
}: {
  title: string;
  primary: string;
  secondary: string;
  margin?: number;
}) => (
  <>
    <div className="flex items-center gap-3 mb-6">
      <span className="w-5 h-px bg-orange-400" />
      <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-widest">
        {title}
      </span>
    </div>

    <h2
      className={`text-3xl font-bold tracking-tight text-white/85 leading-tight mb-${margin} max-w-md`}
    >
      {primary}
      <br />
      <span className="text-zinc-500">{secondary}</span>
    </h2>
  </>
);

export default SectionHeader;
