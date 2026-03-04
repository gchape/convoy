import FooterBottom from "./components/FooterBottom";
import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";

const Footer = () => (
  <footer className="w-full bg-transparent text-zinc-50">
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <FooterBrand />

        <div className="flex grow justify-around">
          <FooterLinks
            title="Product"
            items={[
              "Features",
              "Pricing",
              "GPS Tracking",
              "Order Management",
              "Integrations",
            ]}
          />

          <FooterLinks
            title="Legal"
            items={[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Security",
            ]}
          />
        </div>
      </div>

      <FooterBottom />
    </div>
  </footer>
);

export default Footer;
