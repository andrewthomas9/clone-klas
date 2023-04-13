"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const images = [
  {
    name: "alida-school",
    url: "images/alida-school.svg"
  },
  {
    name: "univelcity",
    url: "images/univelcity.svg"
  },
  {
    name: "ai-school",
    url: "images/ai-school.svg"
  },
  {
    name: "mdena",
    url: "images/mdena.svg"
  },
  {
    name: "design-pal",
    url: "images/design-pal.svg"
  },
  {
    name: "dev-careers",
    url: "images/dev-careers.svg"
  },
]

const HomePage = () => {
  return (
    <>
      <main>
        <section className="gradient">
          <div className="container">
            <div className="grid tab:grid-cols-2 mb-[120px] items-start gap-[80px] tab:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] tab:pb-[35px]">
              <div>
                <motion.h1
                  transition={{ duration: 0.3 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="font-bold max-md:text-[42px] max-md:leading-[48px] max-md:mb-4 mb-10 leading-[68px] text-[64px] text-white"
                >
                  Anyone, anywhere can teach live
                </motion.h1>
                <motion.p
                  transition={{ duration: 0.5 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]"
                >
                  Bring together live classes, community, and payments- all on
                  Klas.
                </motion.p>
                <motion.div
                  transition={{ duration: 0.7 }}
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
                transition={{ duration: 0.5 }}
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
                  <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">85,000+</h3>
                  <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">Students globally</p>
                </div>
                <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
                  <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
                  <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">1,200+</h3>
                  <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">Virtual academies</p>
                </div>
                <div className="flex flex-col h-[100px] pl-[20px] justify-center relative">
                  <span className="absolute max-md:hidden h-full top-0 left-0 span_gradient w-[2px]"></span>
                  <h3 className="text-[32px] leading-[42px] max-md:text-2xl mb-[11px] font-bold">27</h3>
                  <p className="text-[20px] leading-[26px] text-[rgba(0,0,0,.8)] max-md:text-base">Countries reached</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg-1150:justify-between gap-[40px] flex-wrap">
                {images.map(({ name, url }) => (
                  <img key={name} alt={name} src={url}/>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
