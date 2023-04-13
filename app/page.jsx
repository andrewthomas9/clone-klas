import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="gradient">
          <div className="container">
            <div className="grid tab:grid-cols-2 max-tab:mb-[120px] items-start gap-[80px] tab:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] tab:pb-[35px]">
              <div>
                <h1 className="font-bold max-md:text-[42px] max-md:leading-[48px] max-md:mb-4 mb-10 leading-[68px] text-[64px] text-white">
                  Anyone, anywhere can teach live
                </h1>
                <p className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]">
                  Bring together live classes, community, and payments- all on
                  Klas.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/login"
                    className="bg-white rounded-[50px] text-base font-bold py-[14px] px-[30px] text-blue-100"
                  >
                    Sign up free
                  </Link>
                  <Link className="text-white flex gap-[5px] justify-center items-center text-base font-bold" href="https://calendly.com/nathanstark101/chat">
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
                </div>
              </div>
              <div className="flex justify-center">
                {/* <img
                  src="/images/hero.png"
                  alt="hero"
                /> */}
                <Image src="/images/hero.png" width={640} height={640} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
