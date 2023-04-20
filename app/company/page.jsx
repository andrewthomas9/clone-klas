"use client";

import React from "react";
import PageHeaders from "../components/PageHeaders";
import CountUp from "react-countup";
import FrequentlyAskedQuestions from "../components/FAQ";
import { CompanyFaqData } from "@/data/Data";

const CompanyPage = () => {
  return (
    <main>
      <PageHeaders
        textColor="black"
        paragraph="Launched in 2022, Klas is on a mission to empower everyone to teach engaging online classes."
        text="Empowering everyone to teach online"
      />

      <section>
        <div>
          <div className="grid place-items-center max-[768px]:h-[300px] max-[768px]:w-full overflow-hidden mx-auto min-[768px]:w-[1250px]-hidden relative">
            <div className="flex max-[768px]:grid max-[768px]:place-items-center max-[768px]:absolute max-[768px]:gap-[10px] max-[768px]:w-[630px] max-[768px]:grid-cols-3 items-center justify-between mx-auto w-[1250px]">
              <div className="max-[768px]:w-[200px] overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/d1.svg" alt="metrics images" />
              </div>
              <div className="max-[768px]:w-[200px] overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/d2.svg" alt="metrics images" />
              </div>
              <div className="max-[768px]:w-[200px] overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/d3.svg" alt="metrics images" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto max-md:flex-wrap max-md:px-[20px] justify-between max-md:py-[40px] px-[40px] py-[80px] max-w-[950px]">
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                2022
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Launched in year
              </p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={85000} duration={2} enableScrollSpy={true} />+
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Learners worldwide
              </p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={1200} duration={2} enableScrollSpy={true} />+
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Active online schools
              </p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={27} duration={2} enableScrollSpy={true} />
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">
                Countriess reached
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[80px] pb-[130px]">
        <div className="flex flex-col items-center justify-center px-[40px] max-md:px-[20px]">
          <div className="max-w-[825px] text-center max-md:mb-[40px] mb-[80px]">
            <h2 className="font-semibold text-[48px] leading-[53px] text-center max-md:text-[32px] max-md:leading-[35px]">
              We look forward to a future where learning is even more
            </h2>
          </div>
          <div className="flex items-center justify-center gap-[25px] flex-wrap">
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/c1.svg" alt="culture @ klas" />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Fun
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/c2.svg" alt="culture @ klas" />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Collaborative
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/c3.svg" alt="culture @ klas" />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Borderless
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[12px] scale-image">
                <img src="images/companypage/c4.svg" alt="culture @ klas" />
              </div>
              <p className="mt-[20px] font-semibold text-[24px] leading-[26px]">
                Community-driven
              </p>
            </div>
          </div>
        </div>
      </section>

      <FrequentlyAskedQuestions data={CompanyFaqData} />

      <section className="pt-[50px] pb-[160px]">
        <div className="max-w-[1366px] px-[40px] mx-auto ">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-center text-[48px] leading-[53px] mb-[80px] max-md:text-[32px] max-md:leading-[38px]">
              As featured in
            </h2>
            <div className="flex items-center justify-center flex-wrap gap-[80px]">
              <div>
                <img src="images/companypage/techcabal.svg" alt="TechCabal" />
              </div>
              <div>
                <img
                  src="images/companypage/nairametrics.svg"
                  alt="NairaMetrics"
                />
              </div>
              <div>
                <img src="images/companypage/edtech.svg" alt="EdTech Review" />
              </div>
              <div>
                <img src="images/companypage/disrupt.svg" alt="disrupt" />
              </div>
              <div>
                <img src="images/companypage/db.svg" alt="DB" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyPage;
