import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import { SwiperData } from "@/data/Data";
import "swiper/css";
import SwiperNavigation from "./SwiperNavigation";

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          {SwiperData.map(({ testimony, name, company, img }) => (
            <SwiperSlide>
              <div>
                <p>{testimony}</p>
                <div>
                  <img src={img} alt={name} />
                  <div>
                    <h3>{name}</h3>
                    <p>{company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavigation />
      </Swiper>
    </>
  );
};

export default SwiperComponent;
