import PropTypes from "prop-types";

const AllSpotCard = ({ spot }) => {
  const { image, spot_name, avg_cost, visitor, travel_time, season } = spot;
  console.log(spot);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-[300px]">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spot_name}</h2>
          <div className="flex justify-between">
            <p>Average_cost: {avg_cost}</p>
            <p>Total_visitors: {visitor}</p>
          </div>
          <div className="flex justify-between">
            <p>Travel_time: {travel_time}</p>
            <p>Seasonality: {season}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
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
