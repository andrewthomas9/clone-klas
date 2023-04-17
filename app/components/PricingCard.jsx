import React from "react";
import Link from "next/link";

const PricingCard = ({ data }) => {
  const newList = [];
  data.bottom.list.forEach((list, i) =>
    newList.push(
      <li key={i} >
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
        {list}
      </li>
    )
  );

  return (
    <div className="min-[500px]:w-[386px] max-[500px]:w-full flex items-center justify-center flex-col row-[1] col-[1] justify-self-center tab:row-[2] lg-1150:row-[1] tab:col-[1/4] lg-1150:col-[1/3] tab:justify-self-start lg-1150:justify-self-end h-[950px] rounded-3xl box-shadow bg-[rgba(17,39,227,.08)]">
      <div className="space-y-7 border-b w-full border-b-[rgba(0,0,0,.15)] flex flex-col justify-between mb-[40px] pb-[50px] px-[20px] items-center">
        <h2 className="font-bold text-[32px] leading-[35px] flex items-center justify-center gap-[10px]">
          {data.proIcon && <img href={data.proIcon} alt="pro"/>}{data.plan}
        </h2>
        <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
          {data.description}
        </small>
        <h3 className="font-semibold text-[32px] leading-[35px] flex items-center">
          ${data.top.price.amount}
          <small className="font-light text-sm leading-[15px] text-[rgba(0,0,0,.5)] text-center">
            {data.top.price.duration}
          </small>
        </h3>
        <Link className={data.top.button.styles} href="/login">
          {data.top.button.text}
        </Link>
      </div>
      <div className=" flex flex-col justify-start items-center w-full">
        {data.bottom.subhead && (
          <small className="mb-[25px] text-base leading-[18px] font-bold">
            {data.bottom.subhead}
          </small>
        )}
        <ul className="pricing-list">
            {newList}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
