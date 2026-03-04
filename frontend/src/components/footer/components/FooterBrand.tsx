import Logo from "../../logo/Logo";

const FooterBrand = () => (
  <div className="col-span-1 md:col-span-1">
    <Logo clickable={false} />

    <p className="text-zinc-400 text-sm leading-relaxed">
      The smarter way to manage your fleet and deliveries. Fast, reliable, and
      built for scale.
    </p>
  </div>
);

export default FooterBrand;
