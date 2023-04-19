import React from "react";

const PageHeaders = ({ text, gradient, textColor, paragraph }) => {
  return (
    <section className={`${gradient && "gradient"}`}>
      <div className="container">
        <header className="md:pt-[210px] md:pb-[120px] pt-[170px] pb-[80px]">
          <div className={`flex flex-col items-center justify-center ${textColor== "black" ? "text-black" : "text-white"} text-[30px] leading-[42px] text-center`}>
            <h1 className="max-md:text-[32px] max-md:leading-[42px] max-md:mb-[16px] mb-[25px] md:text-[56px] md:leading-[73px] font-bold">{text}</h1>
            {paragraph && <p className="max-md:text-[18px] max-md:leading-[22px] text-[24px] leading-[31px] text-center font-[400] text-[rgba(0,0,0,.5)] max-w-[1000px]">{paragraph}</p>}
          </div>
        </header>
      </div>
    </section>
  );
};

export default PageHeaders;
