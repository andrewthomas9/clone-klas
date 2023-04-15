import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavigation = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button className="w-[40px] h-[40px] rounded-[50%] cursor-pointer bg-blue-100" onClick={() => swiper.slidePrev()}>
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#prev_svg__a)">
            <path
              d="M14.711 8.12 10.831 12l3.88 3.88a.996.996 0 1 1-1.41 1.41l-4.59-4.59a.996.996 0 0 1 0-1.41l4.59-4.59a.996.996 0 0 1 1.41 0c.38.39.39 1.03 0 1.42Z"
              fill="#fff"
            ></path>
          </g>
          <defs>
            <clipPath id="prev_svg__a">
              <path
                fill="#fff"
                transform="matrix(0 -1 -1 0 24 24)"
                d="M0 0h24v24H0z"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </button>
      <button className="w-[40px] h-[40px] rounded-[50%] cursor-pointer bg-blue-100" onClick={() => swiper.slideNext()}>
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#next_svg__a)">
            <path
              d="m9.289 8.12 3.88 3.88-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42Z"
              fill="#fff"
            ></path>
          </g>
          <defs>
            <clipPath id="next_svg__a">
              <path
                fill="#fff"
                transform="rotate(-90 12 12)"
                d="M0 0h24v24H0z"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavigation;
