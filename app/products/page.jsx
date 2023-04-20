import React from "react";
import PageHeaders from "../components/PageHeaders";
import Link from "next/link";
import { ProductsCardData } from "@/data/Data";

const ProductsPage = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center">
        <PageHeaders
          md={true}
          textColor="black"
          text="The world's first live learning API"
          paragraph="We power online classes for your users through our easy-to-use APIs"
        />
        <Link
          className="py-[16px] rounded-[24px] font-bold mt-[30px] mb-[100px] md:mb-[180px] px-[32px] text-[16px] leading-[18px] text-white bg-blue-200"
          href="/login"
        >
          Start building
        </Link>
      </section>

      <section className="container">
        <div>
          <div className="flex flex-col gap-[80px] md:gap-[160px] items-center justify-center">
            <div className="flex flex-col items-center justify-center text-black text-[30px] leading-[42px] text-center">
              <h2 className="max-md:text-[32px] max-md:leading-[42px] max-md:mb-[16px] mb-[25px] md:text-[48px] leading-[62px] md:leading-[73px] font-bold">
                Build and scale to millions
              </h2>
              <p className="max-md:text-[18px] max-md:leading-[22px] text-[24px] leading-[31px] text-center font-[400] text-[rgba(0,0,0,.5)] max-w-[1000px]">
                Host up to 1,000 students per class, run multiple classes at the
                same time, and track student activity on dashboard
              </p>
            </div>
            <div className="flex max-md:flex-col items-center gap-[50px] lg-1150:gap-[100px]">
              <div className="flex-1">
                <img
                  src="images/productspage/info-image-1.png"
                  alt="Customize your experience"
                />
              </div>
              <div className="lg-1150:w-485px flex flex-col gap-[10px] flex-1">
                <h3 className="text-2xl leading-[31px] font-bold tab:text-4xl md:leading-[47px]">
                  Customize your experience
                </h3>
                <p className="text-base tab:text-[20px] md:leading-[26px]">
                  Get complete control over colors and permissions. Fully
                  customize your virtual classroom.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-black text-[30px] leading-[42px] text-center">
              <p className="text-base leading-[24px] mb-[5px] font-[400] text-[rgba(0,0,0,.5)] text-center">
                Coming Soon
              </p>
              <h2 className="max-md:text-[32px] max-md:leading-[42px] max-md:mb-[18px] mb-[15px] md:text-[48px] leading-[62px] md:leading-[73px] font-bold">
                Plugins to boost your class experience
              </h2>
              <p className="max-md:text-[18px] max-md:leading-[22px] text-[24px] leading-[31px] text-center font-[400] text-[rgba(0,0,0,.5)] max-w-[1000px]">
                Use our 1-click plugins to make your classes more immersive and
                engaging
              </p>
            </div>

            <div className="flex flex-row-reverse max-md:flex-col items-center gap-[50px] lg-1150:gap-[100px]">
              <div className="flex-1">
                <img
                  src="images/productspage/info-image-2.png"
                  alt="Magic Board"
                />
              </div>
              <div className="lg-1150:w-485px flex flex-col gap-[10px] flex-1">
                <h3 className="text-2xl leading-[31px] font-bold tab:text-4xl md:leading-[47px]">
                  Magic Board
                </h3>
                <p className="text-base tab:text-[20px] md:leading-[26px]">
                  Your users can learn and brainstorm together with our in-built
                  whiteboard tool
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-[160px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-black text-[30px] leading-[42px] text-center">
            <h2 className="max-md:text-[32px] max-md:leading-[42px] max-md:mb-[16px] mb-[25px] md:text-[48px] leading-[62px] md:leading-[73px] font-bold">
              Tailored for your use case
            </h2>
            <p className="max-md:text-[18px] max-md:leading-[22px] text-[24px] leading-[31px] text-center font-[400] text-[rgba(0,0,0,.5)] max-w-[1000px]">
              No matter what you’re building, we help you quickly add live-audio
              in your app so that you can get started in hours
            </p>
          </div>
          <div className="mt-[80px] grid max-[530px]:grid-cols-2 grid-cols-3 gap-[20px]">
            {ProductsCardData.map(({ name, img }) => (
              <div className="relative grid place-items-center">
                <img src={img} alt={name} />
                <h3 className="md:text-[24px] leading-[21px] text-base bottom-[10px] absolute text-center  min-[700px]bottom-[20px] text-white font-semibold">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
