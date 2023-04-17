import React from "react";
import PricingCard from "../components/PricingCard";
import { PricingData } from "@/data/Data";
import CallToAction from "../components/CTA";
import Link from "next/link";

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

      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div className="">
            <div className="flex flex-col items-center justify-start mb-[80px]">
              <h3 className="text-[32px] leading-[35px] mb-[25px] font-bold text-center md:text-5xl md:leading-[53px]">
                *Optional Add-on Plans
              </h3>
              <p className="font-normal text-base md:text-2xl text-center">
                You must be a registered user to purchase any add-on plan
              </p>
            </div>
            <div className="flex items-center justify-center gap-[25px] flex-wrap">
              <div className="h-[350px] rounded-[24px] p-[40px] flex justify-start flex-col box-shadow bg-white">
                <div className="mb-[30px]">
                  <h3 className="font-bold text-[17px] mb-[8px] leading-[19px]">Large Classes</h3>
                  <p className="text-sm font-normal leading-[15px] text-[rgba(0,0,0,.6)]">Starting at $1,500 per mo</p>
                </div>
                <div>
                  <div>
                    <ul class="pricing-list">
                      <li>
                        <svg
                          width="16"
                          height="17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.668 8.973 4 4 6.667-8"
                            stroke="#1127E3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        Host up to 10,000 students per class
                      </li>
                      <li>
                        <svg
                          width="16"
                          height="17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.668 8.973 4 4 6.667-8"
                            stroke="#1127E3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>{" "}
                        Annual and monthly billing available
                      </li>
                    </ul>
                  </div>
                  <Link
                  className="bg-blue-100 text-white font-semibold text-sm py-[14px] px-[28px] rounded-[24px] leading-[15px]"
                    href="https://calendly.com/klas-demo/add-on-plans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="h-[350px] rounded-[24px] p-[40px] justify-start flex flex-col box-shadow bg-white">
                <div className="mb-[30px]">
                  <h3 className="font-bold text-[17px] mb-[8px] leading-[19px]">Teams</h3>
                  <p className="text-sm font-normal leading-[15px] text-[rgba(0,0,0,.6)]">$15/instructor per mo</p>
                </div>
                <div>
                  <div className="mb-[20px]">
                    <ul class="pricing-list">
                      <li>
                        <svg
                          width="16"
                          height="17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.668 8.973 4 4 6.667-8"
                            stroke="#1127E3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        Invite unlimited instructors and admins
                      </li>
                      <li>
                        <svg
                          width="16"
                          height="17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.668 8.973 4 4 6.667-8"
                            stroke="#1127E3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>{" "}
                        Assign instructors to classes
                      </li>
                      <li>
                        <svg
                          width="16"
                          height="17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2.668 8.973 4 4 6.667-8"
                            stroke="#1127E3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>{" "}
                        Team reports and analytics
                      </li>
                    </ul>
                  </div>
                  <Link
                    className="bg-blue-100 text-white font-semibold mt-7 text-sm py-[14px] px-[28px] rounded-[24px] leading-[15px]"
                    href="https://calendly.com/klas-demo/add-on-plans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};

export default PricingPage;
