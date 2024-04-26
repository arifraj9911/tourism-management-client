import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllSpotCard = ({ spot }) => {
  const { _id, image, spot_name, avg_cost, visitor, travel_time, season } =
    spot;
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
            <Link to={`/all-tourist-spot/${_id}`}
              onClick={() => handleViewDetails(_id)}
              className="btn btn-primary"
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
