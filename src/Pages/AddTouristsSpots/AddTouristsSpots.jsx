import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddTouristsSpots = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot_name = form.spot_name.value;
    const image = form.image.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const season = form.season.value;
    const avg_cost = form.avg_cost.value;
    const travel_time = form.travel_time.value;
    const visitor = form.visitor.value;
    const description = form.description.value;

    const tourist_spot_info = {
      spot_name,
      image,
      country_name,
      location,
      season,
      avg_cost,
      travel_time,
      visitor,
      description,
      user_email: user?.email,
      user_name: user?.displayName,
    };

    console.log(tourist_spot_info);
  };
  return (
    <div className="w-1/2 p-8  mx-auto my-20 border-2">
      <h2 className="text-2xl mb-10 text-center">Add Tourists Spots</h2>
      <form onSubmit={handleAddForm}>
        <div className=" flex justify-center gap-6 ">
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="spot_name"
              placeholder="tourist spot name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="image"
              placeholder="image url"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="country_name"
              placeholder="country name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="season"
              placeholder="seasonality"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="number"
              name="avg_cost"
              placeholder="average cost"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="travel_time"
              placeholder="travel time"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="visitor"
              placeholder="total visitors per year"
              className="input input-bordered w-full"
            />
            <textarea
              name="description"
              id=""
              placeholder="short description"
              cols="20"
              rows="4"
              className="border rounded-lg px-3 py-2 w-full"
            ></textarea>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Add "
            className="bg-[#4d4c4c] text-[#d9d9d9] w-full border border-[#331A15] p-3 rounded-md mt-8 font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpots;
