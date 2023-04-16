import React from "react";
import PricingCard from "../components/PricingCard";
import { PricingData } from "@/data/Data";
import CallToAction from "../components/CTA";

const PricingPage = () => {
  return (
    <main>
      <section className="gradient mb-[80px]">
        <div className="container">
          <header className="md:pt-[210px] md:pb-[120px] pt-[170px] pb-[80px]">
            <div className="flex items-center justify-center md:text-[56px] md:leading-[73px] font-bold text-white text-[30px] leading-[42px] text-center">
              Set up your virtual academy today
            </div>
          </header>
        </div>
      </section>

      <section className="py-[80px] w-full h-fit">
        <div className="container">
          <div className="grid items-center gap-[50px] lg-1150:gap-[80px] justify-center grid-cols-1 tab:grid-cols-5">
            {PricingData.map((plan) => (
              <PricingCard key={plan.plan} data={plan} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};

export default PricingPage;
