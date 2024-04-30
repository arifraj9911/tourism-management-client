import PropTypes from "prop-types";
import SingleSpotCard from "../SingleSpotCard/SingleSpotCard";

const TouristSpots = ({ spotData }) => {
  // console.log(spotData);
  return (
    <div className="my-0 lg:my-20 max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl mt-24 mb-5 font-bold ">Most Popular Tours</h2>
      <p className="lg:w-3/5 text-sm md:text-[16px] mx-auto text-center text-[#999]">
      Explore our curated selection of top-rated tours, designed to showcase the best of each destination, ensuring unforgettable travel experiences for every adventurer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 md:gap-x-2 md:gap-y-10 lg:gap-10 mt-14  md:mt-20">
        {spotData.slice(0, 6).map((spots) => (
          <SingleSpotCard key={spots._id} spots={spots}></SingleSpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;

TouristSpots.propTypes = {
  spotData: PropTypes.array,
};
