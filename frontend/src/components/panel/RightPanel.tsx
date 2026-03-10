import RightPanelImage from "../../assets/6169060.webp";

const RightPanel = () => (
  <div className="relative flex-1 hidden lg:inline-block overflow-hidden">
    <img
      src={RightPanelImage}
      alt="Delivery truck"
      loading="lazy"
      className="w-full h-full object-cover brightness-75 saturate-50"
    />

    <div className="absolute inset-0 [linear-gradient(135deg, rgba(9,9,11,0.5) 0%, transparent 60%)]" />
  </div>
);

export default RightPanel;
