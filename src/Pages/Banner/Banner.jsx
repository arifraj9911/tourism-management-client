import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import roomImg from "../../assets/Images/room-1.jpg";
import slider1 from "../../assets/Images/slider1.jpg";
import slider2 from "../../assets/Images/slider2.jpg";
import slider3 from "../../assets/Images/slider3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Banner.css";

const Banner = () => {
  return (
    <Swiper
      className=" z-0"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={() => {}}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="hero min-h-96 lg:min-h-screen"
          style={{
            backgroundImage: `url(${slider1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-4/5  flex justify-center items-center lg:justify-start text-left text-white">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="max-w-lg px-2 lg:px-0"
            >
              <h1 className="mb-2 lg:mb-5 text-[28px] lg:text-5xl font-bold">
                Relaxing Time
              </h1>
              <p className="mb-5 text-xs leading-4 lg:leading-6 lg:text-[16px] ">
                Indulge in the epitome of luxury with our exquisite apartments.
                From breathtaking views to opulent amenities, each residence
                exudes elegance and sophistication.
              </p>
              <div>
                <button className="bg-[#0075FF] hover:bg-[#2264b0] text-[16px]  font-bold text-white py-2 lg:py-3 px-3 lg:px-6 rounded-md ">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-96 lg:min-h-screen"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-4/5  flex justify-center items-center lg:justify-start text-left text-white">
            <div className="max-w-lg px-2 lg:px-0">
              <h1 className="mb-2 lg:mb-5 text-[28px] lg:text-5xl font-bold">
                Enjoy Every Moment
              </h1>
              <p className="mb-5 text-xs leading-4 lg:leading-6 lg:text-[16px] ">
                Discover comfort redefined in our cozy apartments. Thoughtfully
                designed spaces, warm ambiance, and modern conveniences await
                you.
              </p>
              <div>
                <button className="bg-[#0075FF] hover:bg-[#2264b0] text-[16px]  font-bold text-white py-2 lg:py-3 px-3 lg:px-6 rounded-md ">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero  min-h-96 lg:min-h-screen"
          style={{
            backgroundImage: `url(${slider3})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-4/5  flex justify-center items-center lg:justify-start text-left text-white">
            <div className="max-w-lg px-2 lg:px-0">
              <h1 className="mb-2 lg:mb-5 text-[28px] lg:text-5xl font-bold">
                Grab the Sunset
              </h1>
              <p className="mb-5 text-xs leading-4 lg:leading-6 lg:text-[16px] ">
                Unleash endless enjoyment in our dynamic apartments. With
                inviting amenities and a lively atmosphere,
              </p>
              <div>
                <button className="bg-[#0075FF] hover:bg-[#2264b0] text-[16px]  font-bold text-white py-2 lg:py-3 px-3 lg:px-6 rounded-md ">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
