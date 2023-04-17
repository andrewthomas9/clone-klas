import React from "react";
import CallToAction from "../components/CTA";
import Link from "next/link";
import FrequentlyAskedQuestions from "../components/FAQ";
import { PricingFaqData } from "@/data/Data";

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
            <div className="min-[500px]:w-[386px] max-[500px]:w-full flex items-center justify-center flex-col row-[1] col-[1] justify-self-center tab:row-[2] lg-1150:row-[1] tab:col-[1/4] lg-1150:col-[1/3] tab:justify-self-start lg-1150:justify-self-end h-[950px] rounded-3xl box-shadow bg-[rgba(17,39,227,.08)]">
              <div className="space-y-7 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
                <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
                  Free
                </h2>
                <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                  Everything you need to start teaching online
                </small>
                <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
                  $0
                  <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                    /month
                  </small>
                </h3>
                <Link
                  className="py-[20px] px-[40px] bg-transparent rounded-[50px] outline-none border border-blue-100 text-blue-100 font-semibold text-base leading-[18px] capitalize"
                  href="/login"
                >
                  Try for Free
                </Link>
              </div>
              <div className=" flex flex-col justify-start items-center w-full">
                <ul className="pricing-list">
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
                    Host up to 50 students per class
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
                    </svg>
                    Time limit is 40 mins
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
                    </svg>
                    Unlimited classes
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
                    </svg>
                    Easy scheduling
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
                    </svg>
                    Accept payments via Stripe
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
                    </svg>
                    Beautiful booking pages
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
                    </svg>
                    Built-in chat room
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
                    </svg>
                    Analytics & attendance tracking
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
                    </svg>
                    Resources library for docs, videos
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
                    </svg>
                    Student dashboard
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
                    </svg>
                    10% transaction fee on bookings
                  </li>
                </ul>
              </div>
            </div>

            <div className="min-[500px]:w-[386px] max-[500px]:w-full flex items-center justify-center flex-col max-tab:row-[2] row-[1] col-[1] tab:col-[2/5] justify-self-center h-[990px] rounded-3xl box-shadow z-10 bg-white">
              <div className="space-y-7 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
                <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
                  <img src="images/pricingpage/pro.svg" alt="pro" />
                  Pro
                </h2>
                <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                  Turn your Klas academy into a successful business
                </small>
                <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
                  $29
                  <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                    /mo
                  </small>
                </h3>
                <Link
                  className="py-5 px-[40px] bg-blue-100 rounded-[50px] text-white font-semibold text-base leading-[18px] capitalize"
                  href="/login"
                >
                  Get Started
                </Link>
              </div>
              <div className=" flex flex-col justify-start items-center w-full">
                <small className="mb-[25px] text-base leading-[18px] font-bold">
                  Everything in Free, including
                </small>
                <ul className="pricing-list">
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
                    Host up to 500 students per class
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
                    </svg>
                    Time limit is 2 hours
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
                    </svg>
                    Unlimited classes
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
                    </svg>
                    Custom branding
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
                    </svg>
                    Detailed class insights & analytics
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
                    </svg>
                    Class recordings and cloud storage
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
                    </svg>
                    Email marketing Email marketing
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
                    </svg>
                    3% transaction fee on bookings
                  </li>
                </ul>
              </div>
            </div>

            <div className="min-[500px]:w-[386px] max-[500px]:w-full flex items-center justify-center flex-col row-[3] col-[1] justify-self-center tab:row-[2] lg-1150:row-[1] tab:col-[3/-1] lg-1150:col-[4/-1] tab:justify-self-end lg-1150:justify-self-start h-[950px] rounded-3xl box-shadow bg-[rgba(17,39,227,.08)]">
              <div className="space-y-7 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
                <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
                  Plus
                </h2>
                <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                  Take your Klas academy to the next level
                </small>
                <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
                  $0.50
                  <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
                    /per student/mo
                  </small>
                </h3>
                <Link
                  className="py-[20px] px-[40px] bg-transparent rounded-[50px] outline-none border border-blue-100 text-blue-100 font-semibold text-base leading-[18px] capitalize"
                  href="/login"
                >
                  Coming Soon
                </Link>
              </div>
              <div className=" flex flex-col justify-start items-center w-full">
                <small className="mb-[25px] text-base leading-[18px] font-bold">
                  Everything in Pro, including
                </small>
                <ul className="pricing-list">
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
                    Host up to 1000 students per class
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
                    </svg>
                    No time limit
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
                    </svg>
                    Unlimited classes
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
                    </svg>
                    Password protected recordings
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
                    </svg>
                    Priority support
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
                    </svg>
                    Instant class transcriptions
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
                    </svg>
                    Fully customizable
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
                    </svg>
                    Custom onboarding
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
                    </svg>
                    2% transaction fee on bookings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[120px] pt-[80px]">
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-start mb-[80px]">
              <h3 className="text-[32px] leading-[35px] mb-[25px] font-bold text-center md:text-5xl md:leading-[53px]">
                *Optional Add-on Plans
              </h3>
              <p className="font-normal text-base md:text-2xl text-center">
                You must be a registered user to purchase any add-on plan
              </p>
            </div>
            <div className="flex items-center justify-center gap-[25px] flex-wrap">
              <div className="h-[350px] flex flex-col gap-[30px] rounded-[24px] p-[40px] box-shadow bg-white">
                <div className="mb-[30px]">
                  <h3 className="font-bold text-[17px] mb-[8px] leading-[19px]">
                    Large Classes
                  </h3>
                  <p className="text-sm font-normal leading-[15px] text-[rgba(0,0,0,.6)]">
                    Starting at $1,500 Per Mo
                  </p>
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
                </div>
                <Link
                  className="bg-blue-100 text-center text-white font-semibold text-sm py-[14px] px-[28px] rounded-[24px] leading-[15px]"
                  href="https://calendly.com/klas-demo/add-on-plans"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </Link>
              </div>
              <div className="h-[350px] rounded-[24px] p-[40px] justify-start flex flex-col gap-[10px] box-shadow bg-white">
                <div className="mb-[30px]">
                  <h3 className="font-bold text-[17px] mb-[8px] leading-[19px]">
                    Teams
                  </h3>
                  <p className="text-sm font-normal leading-[15px] text-[rgba(0,0,0,.6)]">
                    $15/Instructor Per Mo
                  </p>
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
                </div>
                  <Link
                    className="bg-blue-100 text-center text-white font-semibold text-sm py-[14px] px-[28px] rounded-[24px] leading-[15px]"
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
      </section>

      <FrequentlyAskedQuestions data={PricingFaqData} />
      
      <CallToAction />
    </main>
  );
};

export default PricingPage;
