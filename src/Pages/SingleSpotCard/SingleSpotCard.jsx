import PropTypes from "prop-types";

const SingleSpotCard = ({ spots }) => {
  const {
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-[300px]">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {spot_name}
          <div className="badge badge-secondary">{travel_time}</div>
        </h2>
        <p>Country:{country_name}</p>
        <p>Location:{location}</p>
        <p>Seasonality:{season}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Avg_cost:{avg_cost}</div>
          <div className="badge badge-outline">Visitor:{visitor}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleSpotCard;

SingleSpotCard.propTypes = {
  spots: PropTypes.object,
};
