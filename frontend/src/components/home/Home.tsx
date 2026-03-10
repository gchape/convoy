"use client";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import { HowItWorks } from "../service/HowItWorks";
import { Pricing } from "../service/Pricing";
import { Services } from "../service/Services";
import Rings from "./Rings";

const Home = () => (
  <div className="flex flex-col">
    <div className="flex flex-col place-items-center gap-8 py-24 px-10">
      <Hero />
      <Rings />
    </div>

    <main className="flex flex-col place-items-center gap-24 px-10">
      <Services />
      <HowItWorks />
      <Pricing />
    </main>

    <div className="flex grow pt-24">
      <Footer />
    </div>
  </div>
);

export default Home;
