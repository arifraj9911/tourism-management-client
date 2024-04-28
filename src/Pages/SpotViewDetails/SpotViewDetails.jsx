import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { PiSunHorizonLight } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";

const SpotViewDetails = () => {
  const spotDetailData = useLoaderData();
  console.log(spotDetailData);
  const {
    image,
    spot_name,
    avg_cost,
    country_name,
    visitor,
    location,
    travel_time,
    season,
  } = spotDetailData;
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex gap-10">
        <div className="w-2/5 relative">
          <img className="w-full h-[450px] rounded-lg" src={image} alt="" />
          <span className="absolute bg-[#35374B] font-light text-white  left-4 top-4 px-3 py-1">
            {country_name}
          </span>
        </div>
        <div className="w-3/5">
          <div className="flex items-center gap-1 text-lg text-[#999]">
            <CiLocationOn />
            <span>{location}</span>
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-5xl font-bold">{spot_name}</span>
            <span className="text-2xl ">
              {" "}
              <span className="text-[#C40C0C] font-semibold">${avg_cost}</span> /avg
            </span>
          </div>
          <hr className="my-8" />
          <div>
            <span className="text-2xl font-normal ">Overview</span>
            <p className="mt-4 text-[#999]">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              perspiciatis aut possimus harum molestiae porro impedit. Rem
              deserunt officiis expedita explicabo cupiditate exercitationem,
              ducimus aut tenetur voluptatem illo vitae ipsam hic nisi! Quo id
              inventore eligendi repellat commodi, earum dolores reiciendis eum
              officia voluptates quaerat facilis fugiat, delectus rerum impedit.
            </p>
          </div>
          <hr className="my-8" />
          <div className="space-y-2  w-2/5 ">
            <p className="flex justify-between">
              <span className="flex items-center gap-1">
                <PiSunHorizonLight />
                Seasonality:
              </span>{" "}
              <span className="font-semibold">{season}</span>{" "}
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-1">
                {" "}
                <GiDuration /> Travel Time:
              </span>{" "}
              <span className="font-semibold">{travel_time}</span>{" "}
            </p>

            <p className="flex justify-between">
              <span className="flex items-center gap-1">
                <LuUser2 />
                Total Visitors Per Year:
              </span>
              <span className="font-semibold">{visitor}+</span>
            </p>
            {/* <p>Total Visitors Per Year: <span>{visitor}</span>  </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotViewDetails;
