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
      email: user?.email,
      name: user?.displayName,
    };

    console.log(tourist_spot_info);

    fetch("http://localhost:5000/tourist-spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tourist_spot_info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("data successfully added");
        }
      });
  };
  return (
    <div className=" p-8 bg-[#f6f6f6]  mx-auto py-20 ">
      <h2 className="text-5xl mb-16 text-center font-bold">
        Add Tourists Spots
      </h2>
      <form className="w-3/5 mx-auto" onSubmit={handleAddForm}>
        <div className=" flex justify-center gap-6 ">
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="spot_name"
              placeholder="tourist spot name"
              className="input input-bordered border-none focus:outline-none rounded-none w-full"
            />
            <input
              type="text"
              name="image"
              placeholder="image url"
              className="input input-bordered border-none focus:outline-none rounded-none w-full"
            />
            {/* <input
              type="text"
              name="country_name"
              placeholder="country name"
              className="input input-bordered w-full"
            /> */}
            <select
              className="border-none px-3 py-3 w-full outline-none  rounded-none "
              name="country_name"
              id=""
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Bangkok">Bangkok</option>
              <option value="Indonesia">Indonesia</option>
            </select>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered border-none focus:outline-none rounded-none w-full"
            />
            <input
              type="text"
              name="season"
              placeholder="seasonality"
              className="input input-bordered border-none focus:outline-none rounded-none w-full"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="number"
              name="avg_cost"
              placeholder="average cost"
              className="input input-bordered border-none focus:outline-none rounded-none w-full"
            />
            <input
              type="text"
              name="travel_time"
              placeholder="travel time"
              className="input input-bordered border-none focus:outline-none rounded-none w-full"
            />
            <input
              type="number"
              name="visitor"
              placeholder="total visitors per year"
              className="input input-bordered focus:outline-none border-none rounded-none w-full"
            />
            <textarea
              name="description"
              id=""
              placeholder="short description"
              cols="20"
              rows="4"
              className="border-none px-3 rounded-none outline-none py-2 w-full"
            ></textarea>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Add Spots"
            className="bg-[#C40C0C] text-xl text-white w-full border  p-3  mt-8 font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpots;
