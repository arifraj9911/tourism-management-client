import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { PiSunHorizonLight } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

const CountrySpot = () => {
  const countryData = useLoaderData();
  // console.log(countryData);
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      {/* <h2>This is All country spot:{countryData.length}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {countryData.map((country) => (
          <div key={country._id}>
            <div className="card card-compact rounded-none w-96 flex flex-col relative bg-base-100 shadow-xl">
              <figure className="h-[300px]">
                <img
                  className="w-full h-full"
                  src={country?.image}
                  alt="Shoes"
                />
              </figure>
              <span className="absolute bg-[#35374B] font-light text-white  left-4 top-4 px-3 py-1">
                {country?.country_name}
              </span>
              <div className="card-body  flex-grow p-5">
                <div className="flex items-center gap-1  text-lg font-semibold text-[#999]">
                  <CiLocationOn />
                  <span>{country?.location}</span>
                </div>
                <h2 className="items-center flex justify-between text-2xl">
                  <span className="font-bold">{country?.spot_name}</span>
                  {/* <div className="badge badge-secondary">{travel_time}</div> */}
                  <div className="text-xl font-normal">
                    <span className="text-[#C40C0C]">${country?.avg_cost}</span>{" "}
                    /avg
                  </div>
                </h2>
                <p className="mt-6 text-[16px] font-semibold text-[#999]">
                  {country?.description.slice(0, 60)} .....
                  <Link
                    to={`/all-tourist-spot/${country._id}`}
                    className="text-[#C40C0C] font-light"
                  >
                    Read More
                  </Link>
                </p>
                <hr className="my-4" />
                <div className="flex items-center justify-between font-semibold text-[#999]">
                  <div className="flex items-center gap-2">
                    <LuUser2 />
                    <span>{country?.visitor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiDuration />
                    <span>{country?.travel_time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiSunHorizonLight />
                    <span>{country?.season}</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className=" flex justify-center">
                  <Link
                    to={`../all-tourist-spot/${country._id}`}
                    // onClick={() => handleViewDetails(_id)}
                    className="bg-[#C40C0C] text-white w-full text-center px-4 py-2 font-normal  text-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySpot;
