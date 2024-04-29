import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { PiSunHorizonLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const AllSpotCard = ({ spot }) => {
  const {
    _id,
    image,
    spot_name,
    avg_cost,
    country_name,
    location,
    visitor,
    description,
    travel_time,
    season,
  } = spot;
  //   const navigate = useNavigate();
  //   console.log(spot);
  const handleViewDetails = (id) => {
    // navigate(id);

    fetch(`http://localhost:5000/tourist-spots/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="card card-compact rounded-none w-96 flex flex-col relative bg-base-100 shadow-xl">
        <figure className="h-[300px]">
          <img className="w-full h-full" src={image} alt="Shoes" />
        </figure>
        <span className="absolute bg-[#35374B] font-light text-white  left-4 top-4 px-3 py-1">
          {country_name}
        </span>
        <div className="card-body  flex-grow p-5">
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
          <p className="mt-6 text-[16px] font-semibold text-[#999]">
            {description.slice(0, 60)} .....
            <Link
              to={`/all-tourist-spot/${_id}`}
              className="text-[#C40C0C] font-light"
            >
              Read More
            </Link>{" "}
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
          <div className=" flex justify-center">
            <Link
              to={`/all-tourist-spot/${_id}`}
              onClick={() => handleViewDetails(_id)}
              className="bg-[#C40C0C] text-white w-full text-center px-4 py-2 font-normal  text-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSpotCard;

AllSpotCard.propTypes = {
  spot: PropTypes.object,
};
