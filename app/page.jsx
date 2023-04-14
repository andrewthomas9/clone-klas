"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import { images } from "@/data/Data";
import { marqueeData } from "@/data/Data";
import Marquee from "react-fast-marquee";
import { Features_one, Features_two, Features_three } from "@/data/Data";
import Feature from "./components/Feature";
import { FeatureCard } from "./components/Feature";
import { FeaturesCard } from "@/data/Data";
import { BeforeData } from "@/data/Data";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="gradient">
          <div className="container">
            <div className="grid tab:grid-cols-2 mb-[120px] items-start gap-[80px] tab:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] tab:pb-[35px]">
              <div>
                <motion.h1
                  transition={{ duration: 0.5 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="font-bold max-md:text-[42px] max-md:leading-[48px] max-md:mb-4 mb-10 leading-[68px] text-[64px] text-white"
                >
                  Anyone, anywhere can teach live
                </motion.h1>
                <motion.p
                  transition={{ duration: 0.7 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]"
                >
                  Bring together live classes, community, and payments- all on
                  Klas.
                </motion.p>
                <motion.div
                  transition={{ duration: 0.9 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="flex items-center gap-6"
                >
                  <Link
                    href="/login"
                    className="bg-white rounded-[50px] text-base font-bold py-[14px] px-[30px] text-blue-100"
                  >
                    Sign up free
                  </Link>
                  <Link
                    className="text-white flex gap-[5px] hover:gap-[10px] duration-300 transition-all justify-center items-center text-base font-bold"
                    href="https://calendly.com/nathanstark101/chat"
                  >
                    Request demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        d="m9.29 8.119 3.88 3.88-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42Z"
                      ></path>
                    </svg>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                transition={{ duration: 0.7 }}
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className="flex justify-center"
              >
                <Image src="/images/hero.png" width={640} height={640} />
              </motion.div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="mb-[160px]">
              <div className="flex text-left max-md:items-center max-md:justify-center max-md:text-center flex-wrap justify-between max-w-[1030px] mx-auto mb-[80px]">
                <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
                  <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
                  <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">
                    <CountUp end={85000} duration={2} enableScrollSpy={true} />+
                  </h3>
                  <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">
                    Students globally
                  </p>
                </div>
                <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
                  <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
                  <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">
                    <CountUp end={1200} duration={2} enableScrollSpy={true} />+
                  </h3>
                  <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">
                    Virtual academies
                  </p>
                </div>
                <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
                  <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
                  <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">
                    <CountUp end={27} duration={2} enableScrollSpy={true} />
                  </h3>
                  <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">
                    Countries reached
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center lg-1150:justify-between gap-[40px] flex-wrap">
                {images.map(({ name, url }) => (
                  <img key={name} alt={name} src={url} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-[160px]">
            <div className="flex flex-col gap-[80px]">
              <h1 className="text-5xl leading-[62px] max-md:text-[32px] max-md:leading-[42px] text-black text-center font-bold">
                Teach anything online with Klas
              </h1>
              <div className="grid">
                <div className="overflow-hidden 2xl:w-[2000px] 2xl:mx-auto">
                  <Marquee
                    pauseOnHover
                    speed={45}
                    className="flex gap-6"
                    gradient={false}
                  >
                    <span className="grid grid-cols-4 tab-800:grid-cols-6 gap-4 tab-800:gap-6 mr-3 ">
                      {marqueeData.map(({ text, url }) => (
                        <div
                          className="relative grid place-items-center"
                          key={text}
                        >
                          <img
                            className="w-[192px] h-[181px] tab-800:w-[311px] tab-800:h-[292px]"
                            src={url}
                            alt={text}
                          />
                          <h3 className="relative text-white text-base bottom-[30px] font-bold text-center">
                            {text}
                          </h3>
                        </div>
                      ))}
                    </span>
                    <span className="grid tab-800:gap-6 gap-4 grid-cols-4 tab-800:grid-cols-6 ml-3">
                      {marqueeData.map(({ text, url }) => (
                        <div
                          className="relative grid place-items-center"
                          key={text}
                        >
                          <img
                            className="w-[192px] h-[181px] tab-800:w-[311px] tab-800:h-[292px]"
                            src={url}
                            alt={text}
                          />
                          <h3 className="relative text-white text-base bottom-[30px] font-bold text-center">
                            {text}
                          </h3>
                        </div>
                      ))}
                    </span>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="">
            <div className="pb-[120px]">
              <div className="flex items-center justify-center">
                <h1 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]">
                  One platform to power your live classes
                </h1>
              </div>
            </div>
            <div className="container">
              {Features_one.map((featureData) => (
                <Feature key={featureData.name} data={featureData} />
              ))}
            </div>
          </div>

          <div className="gradient pt-[160px] mb-[160px] pb-[10px]">
            <div className="container text-white">
              {Features_two.map((featureData) => (
                <Feature key={featureData.name} data={featureData} />
              ))}
            </div>
          </div>

          <div className="container">
              {Features_three.map((featureData) => (
                <Feature key={featureData.name} data={featureData} />
              ))}
            </div>
        </section>

        <section>
          <div className="container">
              <div className="pb-[120px]">
                <div>
                  <h2 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]">And many more features</h2>
                </div>
                <div className="mt-[80px] grid features_grid gap-6">
                  {
                    FeaturesCard.map((cardData) => (
                      <FeatureCard data={cardData} key={cardData.heading}/>
                    ))
                  }
                </div>
              </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div>
              <div>
                <h3 className="text-center font-medium text-[32px] leading-[42px] mb-[45px]">Before</h3>
                <div className="grid max grid-cols-5 max-lg-1150:gap-[10px] gap-y-[20px] lg-1150:grid-cols-11 lg-1150:gap-x-[40px] place-items-center">
                  {
                    BeforeData.map(beforeData => (
                      <>
                        <div className="flex flex-col gap-4 items-center justify-center">
                          <div className="w-[63px] h-[63px] lg-1150:w-[90px] lg-1150:h-[90px] grid place-items-center p-4 lg-1150:p[22px] bg-white shadow-md rounded-[50%]">
                            <img src={beforeData.img} alt={beforeData.name} />
                          </div>
                          <p className="lg-1150:text-base text-[12px] leading-[15px] lg-110:leading-[23px] whitespace-nowrap">{beforeData.name}</p>
                        </div>
                        {beforeData.span && <span className={`${beforeData.remove_Span ? "max-lg-1150:hidden" : ""} text-[28px]`}>+</span>}
                      </>
                    ))
                  }
                </div>
              </div>
              <div className="mt-[80px] flex flex-col items-center">
                  <h3 className="text-center font-medium text-[32px] leading-[42px] mb-[45px]">Now</h3>
                  <img className="w-[90px] h-[90px] mb-4" src="images/klas-logo.svg" alt="klas logo"/>
                  <p className="text-lg">All you need is Klas</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
