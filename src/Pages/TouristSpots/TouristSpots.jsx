import PropTypes from "prop-types";
import SingleSpotCard from "../SingleSpotCard/SingleSpotCard";

const TouristSpots = ({ spotData }) => {
  // console.log(spotData);
  return (
    <div className="my-20 max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl mb-20">View Our Spots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
