import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddTouristsSpots = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
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

    // console.log(tourist_spot_info);

    fetch("https://tourism-management-server-self.vercel.app/tourist-spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tourist_spot_info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Added",
            text: "Spots added successfully on the list",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="">
      <div className="px-2 lg:p-8 bg-[#f6f6f6] dark:bg-[#121212] dark:text-black mx-auto py-20 ">
        <h2 className="text-3xl md:text-5xl mb-16 text-center dark:text-[#dbdbdb] font-bold">
          Add Tourists Spots
        </h2>
        <form
          className="md:w-3/5 mx-auto text-sm md:text-[16px]"
          onSubmit={handleAddForm}
        >
          <div className=" flex justify-center gap-6 ">
            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                name="spot_name"
                placeholder="tourist spot name"
                className="input input-bordered border-none text-sm md:text-[16px] focus:outline-none rounded-none w-full"
              />
              <input
                type="text"
                name="image"
                placeholder="image url"
                className="input input-bordered border-none text-sm md:text-[16px] focus:outline-none rounded-none w-full"
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
                <option value="Vietnam">Vietnam</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Cambodia">Cambodia</option>
              </select>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered border-none text-sm md:text-[16px] focus:outline-none rounded-none w-full"
              />
              <input
                type="text"
                name="season"
                placeholder="seasonality"
                className="input input-bordered border-none text-sm md:text-[16px] focus:outline-none rounded-none w-full"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <input
                type="number"
                name="avg_cost"
                placeholder="average cost"
                className="input input-bordered border-none text-sm md:text-[16px] focus:outline-none rounded-none w-full"
              />
              <input
                type="text"
                name="travel_time"
                placeholder="travel time"
                className="input input-bordered border-none text-sm md:text-[16px] focus:outline-none rounded-none w-full"
              />
              <input
                type="text"
                name="visitor"
                placeholder="total visitors per year"
                className="input input-bordered focus:outline-none text-sm md:text-[16px] border-none rounded-none w-full"
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
              className="bg-[#C40C0C] text-xl dark:border-none text-white w-full border  p-3  mt-8 font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpots;
