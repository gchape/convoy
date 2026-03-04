import React from "react";

const LeftPanelBg = () => (
  <React.Fragment>
    <div className="absolute inset-0 z-0 The class bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]" />

    <div className="absolute inset-0 z-0 pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_119px,rgba(255,255,255,0.03)_119px,rgba(255,255,255,0.03)_120px)] mask-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_70%)] [-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_70%)]" />

    <div className="absolute top-0 left-0 right-0 h-64 z-0 pointer-events-none [background:radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(255,92,26,0.07)_0%,transparent_70%)]" />

    <div className="absolute top-0 left-0 right-0 h-px z-10 [background:linear-gradient(90deg,transparent,rgba(251,146,60,0.5)_40%,rgba(251,146,60,0.5)_60%,transparent)]" />
  </React.Fragment>
);

export default LeftPanelBg;
