import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { PiSunHorizonLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const SingleSpotCard = ({ spots }) => {
  const {
    _id,
    spot_name,
    image,
    country_name,
    location,
    avg_cost,
    visitor,
    season,
    travel_time,
    description,
  } = spots;
  return (
    <div className="card rounded-none w-96 bg-base-100 flex flex-col relative shadow-xl">
      <figure className="h-[300px]">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <span className="absolute bg-[#35374B] font-light text-white  left-4 top-4 px-3 py-1">
        {country_name}
      </span>
      <div className="card-body flex-grow p-5">
        <div className="flex items-center gap-1  text-lg font-semibold text-[#999]">
          <CiLocationOn />
          <span>{location}</span>
        </div>
        <h2 className="items-center flex justify-between text-2xl">
          <span className="font-bold">{spot_name}</span>
          {/* <div className="badge badge-secondary">{travel_time}</div> */}
          <div className="text-xl font-normal">
            <span className="text-[#C40C0C]">${avg_cost}</span> /avg
          </div>
        </h2>

        <p className="mt-6 font-semibold text-[#999]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          accusamus nobis.{" "}
        </p>
        <hr className="my-4" />
        <div className="flex items-center justify-between font-semibold text-[#999]">
          <div className="flex items-center gap-2">
            <LuUser2 />
            <span>{visitor}</span>
          </div>
          <div className="flex items-center gap-2">
            <GiDuration />
            <span>{travel_time}</span>
          </div>
          <div className="flex items-center gap-2">
            <PiSunHorizonLight />
            <span>{season}</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className=" flex justify-end">
          <Link
            to={`/all-tourist-spot/${_id}`}
            className="bg-[#C40C0C] text-white px-4 py-2 font-normal  text-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSpotCard;

SingleSpotCard.propTypes = {
  spots: PropTypes.object,
};
