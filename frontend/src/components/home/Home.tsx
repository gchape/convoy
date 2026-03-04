"use client";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import { HowItWorks } from "../section/HowItWorks";
import { Pricing } from "../section/Pricing";
import { Services } from "../section/Services";
import ScrollRings from "./ScrollRings";

const Home = () => (
  <div className="flex flex-col">
    <div className="flex flex-col place-items-center gap-8 py-24 px-10 font-[Bricolage_Grotesque,sans-serif]">
      <Hero />
      <ScrollRings />
    </div>

    <div className="flex flex-col place-items-center gap-24 px-10">
      <Services />
      <HowItWorks />
      <Pricing />
    </div>

    <div className="flex grow pt-24">
      <Footer />
    </div>
  </div>
);

export default Home;
