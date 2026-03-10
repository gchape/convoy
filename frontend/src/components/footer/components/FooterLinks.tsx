const FooterLinks = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
      {title}
    </p>

    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item}>
          <a className="text-sm text-zinc-400 hover:text-orange-400 transition-colors duration-200 cursor-pointer">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
