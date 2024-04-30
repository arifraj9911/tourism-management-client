import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import roomImg from "../../assets/Images/room-1.jpg";
import slider1 from "../../assets/Images/slider1.jpg";
import slider2 from "../../assets/Images/slider2.jpg";
import slider3 from "../../assets/Images/slider3.jpg";

import { useState } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import DatePicker from "react-date-picker";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Banner.css";
import { IoLocationOutline } from "react-icons/io5";

import { IoIosSearch, IoMdArrowForward, IoMdTime } from "react-icons/io";
// import { LuCalendarCheck2 } from "react-icons/lu";
import { TbCalendarShare, TbCalendarX } from "react-icons/tb";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [valueCheckIn, onChangeCheckIn] = useState(new Date());
  const [valueCheckIOut, onChangeCheckOut] = useState(new Date());

  const [sliderText1] = useTypewriter({
    words: ["Let The Journey Begin"],
    loop: 2,
  });
  const [sliderText2] = useTypewriter({
    words: ["Dive Into Unknown"],
    loop: 3,
  });
  const [sliderText3] = useTypewriter({
    words: ["Shake The Sunset"],
    loop: 4,
  });

  return (
    <div className="relative">
      <Swiper
        className=" z-0"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={() => {}}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="hero min-h-96 lg:min-h-screen"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-4/5 flex justify-center items-center  text-center text-white pt-14 md:pt-0">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="max-w-2xl px-2 lg:px-0"
              >
                <h1 className="mb-2 lg:mb-10 w-full text-[22px] md:text-[28px] lg:text-6xl font-bold">
                  {sliderText1}
                </h1>
                <p className="mb-5 text-[10px] leading-4 lg:leading-6 lg:text-[16px] ">
                  With a heart full of anticipation and a mind ready for
                  discovery, the journey began. Every step forward promised new
                  experiences, each moment a chapter in the unfolding story of
                  exploration and adventure.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-96 lg:min-h-screen"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-4/5 pt-14 md:pt-0 flex justify-center items-center  text-center text-white">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="max-w-2xl px-2 lg:px-0"
              >
                <h1 className="mb-2 lg:mb-10 w-full text-[22px] md:text-[28px] lg:text-6xl font-bold">
                  {sliderText2}
                </h1>
                <p className="mb-5 text-[10px] leading-4 lg:leading-6 lg:text-[16px] ">
                  Delve into uncharted territories, where every step is an
                  exploration and every moment holds the promise of discovery.
                  Embark on an adventure of boundless possibilities and untold
                  stories.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-96 lg:min-h-screen"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-4/5 pt-14 md:pt-0 flex justify-center items-center  text-center text-white">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="max-w-2xl px-2 lg:px-0"
              >
                <h1 className="mb-2 lg:mb-10 w-full text-[22px] md:text-[28px] lg:text-6xl font-bold">
                  {sliderText3}
                </h1>
                <p className="mb-5 text-[10px] leading-4 lg:leading-6 lg:text-[16px] ">
                  Embrace the magic of dusk as you embark on a journey filled
                  with rhythm and wonder. Dance to the beat of the setting sun,
                  igniting your spirit with each vibrant step.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="md:flex shadow-lg rounded-badge justify-center dark:bg-[#212121] dark:text-[#dbdbdb] dark:border-none bg-white items-center z-10 absolute bottom-[-60px] right-36 gap-8 border w-4/5 px-5 py-6 mx-auto hidden ">
        <div className=" flex items-center gap-4 border-r-2 pr-6">
          <IoLocationOutline className="text-2xl text-[#94999f]" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-xl font-semibold">Destination</span>
            <select
              name="location"
              id=""
              className=" outline-none pl-0 mt-1 dark:bg-[#212121] border-0 text-[#535658]"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Cambodia">Cambodia</option>
            </select>
          </div>
        </div>
        <div className=" flex items-center gap-4 border-r-2 pr-6">
          <IoMdTime className="text-2xl text-[#94999f]" />
          <div className="flex flex-col  items-start">
            <span className="text-xl font-semibold">Duration</span>
            <select
              name="duration"
              id=""
              className=" outline-none pl-0 dark:bg-[#212121] mt-1 border-0 text-[#535658]"
            >
              <option value="1 Day Tour">1 Day Tour</option>
              <option value="2-4 Day Tour">2-4 Day Tour</option>
              <option value="4-7 Day Tour">4-7 Day Tour</option>
              <option value="7+ Day Tour">7+ Day Tour</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className=" flex items-center gap-4">
            <TbCalendarShare className="text-2xl text-[#94999f]" />
            <div className="flex flex-col justify-center items-start">
              <span className="text-xl font-semibold">Check In</span>

              <div>
                <DatePicker
                  className=""
                  onChange={onChangeCheckIn}
                  value={valueCheckIn}
                />
              </div>
            </div>
          </div>
          <div>
            <IoMdArrowForward className="text-xl" />
          </div>
          <div className=" flex items-center gap-4 border-r-2 pr-8">
            <TbCalendarX className="text-2xl text-[#94999f]" />
            <div className="flex flex-col justify-center items-start">
              <span className="text-xl font-semibold">Check Out</span>
              <div>
                <DatePicker
                  className=""
                  onChange={onChangeCheckOut}
                  value={valueCheckIOut}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <IoIosSearch className="text-xl mt-1 text-[#94999f] dark:text-[#dbdbdb]" />
          <button className="text-xl text-[#484a4e] dark:text-[#dbdbdb]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
