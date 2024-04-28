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

const Banner = () => {
  const [valueCheckIn, onChangeCheckIn] = useState(new Date());
  const [valueCheckIOut, onChangeCheckOut] = useState(new Date());

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
            <div className="hero-content w-4/5 flex justify-center items-center  text-center text-white">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="max-w-2xl px-2 lg:px-0"
              >
                <h1 className="mb-2 lg:mb-10 w-full text-[28px] lg:text-6xl font-bold">
                  Let The Journey Begin
                </h1>
                <p className="mb-5 text-xs leading-4 lg:leading-6 lg:text-[16px] ">
                  Indulge in the epitome of luxury with our exquisite
                  apartments. From breathtaking views to opulent amenities, each
                  residence exudes elegance and sophistication.
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
            <div className="hero-content w-4/5 flex justify-center items-center  text-center text-white">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="max-w-2xl px-2 lg:px-0"
              >
                <h1 className="mb-2 lg:mb-10 w-full text-[28px] lg:text-6xl font-bold">
                  Let The Journey Begin
                </h1>
                <p className="mb-5 text-xs leading-4 lg:leading-6 lg:text-[16px] ">
                  Indulge in the epitome of luxury with our exquisite
                  apartments. From breathtaking views to opulent amenities, each
                  residence exudes elegance and sophistication.
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
            <div className="hero-content w-4/5 flex justify-center items-center  text-center text-white">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="max-w-2xl px-2 lg:px-0"
              >
                <h1 className="mb-2 lg:mb-10 w-full text-[28px] lg:text-6xl font-bold">
                  Let The Journey Begin
                </h1>
                <p className="mb-5 text-xs leading-4 lg:leading-6 lg:text-[16px] ">
                  Indulge in the epitome of luxury with our exquisite
                  apartments. From breathtaking views to opulent amenities, each
                  residence exudes elegance and sophistication.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex shadow-lg rounded-badge justify-center bg-white items-center z-10 absolute bottom-[-60px] right-36 gap-8 border w-4/5 px-5 py-6 mx-auto">
        <div className=" flex items-center gap-4 border-r-2 pr-6">
          <IoLocationOutline className="text-2xl text-[#94999f]" />
          <div className="flex flex-col justify-center items-start">
            <span className="text-xl font-semibold">Destination</span>
            <select
              name="location"
              id=""
              className=" outline-none pl-0 mt-1 border-0 text-[#535658]"
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
              className=" outline-none pl-0 mt-1 border-0 text-[#535658]"
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
          <IoIosSearch className="text-xl mt-1 text-[#94999f]" />
          <button className="text-xl text-[#484a4e]">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
