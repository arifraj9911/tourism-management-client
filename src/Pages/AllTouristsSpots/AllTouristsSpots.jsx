import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../AllSpotCard/AllSpotCard";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const AllTouristsSpots = () => {
  const allTouristData = useLoaderData();
  const [allTourist, setAllTourist] = useState(allTouristData);
  const [sortName, setSortName] = useState("SORT BY");
  console.log(allTourist);
  const handleSortAscending = (target) => {
    console.log("ascending clicked");
    if (target === 1) {
      setSortName("Avg Cost(ascending)");
      const result = [...allTourist].sort((a, b) => a.avg_cost - b.avg_cost);
      setAllTourist(result);
    } else if (target === 2) {
      setSortName("Avg Cost(descending)");
      const result = [...allTourist].sort((a, b) => b.avg_cost - a.avg_cost);
      setAllTourist(result);
    }
  };
  return (
    <div className="dark:bg-[#121212] pb-20">
      <div className="max-w-screen-xl mx-auto dark:bg-[#121212] dark:text-[#dbdbdb] py-12">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-10 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold ">All Tourists Spots</h2>
        <div>
          <div className="dropdown dropdown-bottom flex justify-center  ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 hover:bg-[#333A73] bg-[#35374B] text-white"
            >
              <span className="text-xl">{sortName && sortName}</span>
              {/* <span>Sort By(avg_cost)</span> */}
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] dark:bg-[#212121] menu p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li onClick={() => handleSortAscending(1)}>
                <a>Avg Cost(ascending)</a>
              </li>
              <li onClick={() => handleSortAscending(2)}>
                <a>Avg Cost(descending)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-2 md:gap-y-10 lg:gap-10">
        {allTourist.map((spot) => (
          <AllSpotCard
            key={spot._id}
            spot={spot}
            handleSortAscending={handleSortAscending(spot?.avg_cost)}
          ></AllSpotCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllTouristsSpots;
