import PropTypes from "prop-types";
import SingleSpotCard from "../SingleSpotCard/SingleSpotCard";

const TouristSpots = ({ spotData }) => {
  // console.log(spotData);
  return (
    <div className="my-20 max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="text-5xl mt-24 mb-5 font-bold ">Most Popular Tours</h2>
      <p className="w-3/5 mx-auto text-center text-[#999]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        praesentium impedit nostrum fuga distinctio a accusamus repellat enim
        veritatis consequuntur.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
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
