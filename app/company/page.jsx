"use client";

import React from "react";
import PageHeaders from "../components/PageHeaders";
import CountUp from "react-countup";

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
              <div className="max-[768px]:w-[200px]">
                <img src="images/companypage/d1.svg" alt="metrics images" />
              </div>
              <div className="max-[768px]:w-[200px]">
                <img src="images/companypage/d2.svg" alt="metrics images" />
              </div>
              <div className="max-[768px]:w-[200px]">
                <img src="images/companypage/d3.svg" alt="metrics images" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto max-md:flex-wrap max-md:px-[20px] justify-between max-md:py-[40px] px-[40px] py-[80px] max-w-[950px]">
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                2022
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">Launched in year</p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={85000} duration={2} enableScrollSpy={true} />
                +
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">Learners worldwide</p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={1200} duration={2} enableScrollSpy={true} />
                +
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">Active online schools</p>
            </div>
            <div className="flex flex-col max-md:mx-auto max-md:mb-[40px] items-center">
              <h3 className="font-semibold text-[32px] leading-[35px] text-center">
                <CountUp end={27} duration={2} enableScrollSpy={true} />
              </h3>
              <p className="text-base leading-[18px text-center font-[300] mt-[15px]">Countriess reached</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[80px]">
        <div>hello</div>
      </section>
    </main>
  );
};

export default CompanyPage;
