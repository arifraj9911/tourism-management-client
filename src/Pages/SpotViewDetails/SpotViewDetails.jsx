import { useLoaderData } from "react-router-dom";

const SpotViewDetails = () => {
  const spotDetailData = useLoaderData();
  console.log(spotDetailData);
  const { image, spot_name, avg_cost, visitor, travel_time, season } =
    spotDetailData;
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="card lg:card-side bg-base-100 flex gap-6 shadow-xl my-20">
        <figure className="w-1/2 h-[400px]">
          <img src={image} alt="Album" />
        </figure>
        <div className="space-y-10">
          <p className="text-xl font-bold pb-0 h-auto w-auto mb-0">
            Average_Cost: {avg_cost}
          </p>
          <h2 className="card-title text-5xl mt-0">{spot_name}</h2>
          <p>Visitor: {visitor}</p>
          <p>Travel Time: {travel_time}</p>
          <p>Seasonality: {season}</p>
        </div>
      </div>
    </div>
  );
};

export default SpotViewDetails;
