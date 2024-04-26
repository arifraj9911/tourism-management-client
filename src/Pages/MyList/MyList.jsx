import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [touristSpot, setTouristSpot] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  //   console.log(updateId);

  const handleDeleteItem = (id) => {
    console.log("delete item ", id);
    fetch(`http://localhost:5000/my-list/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Item delete Successfully");
          const remaining = touristSpot.filter((spots) => spots._id !== id);
          setTouristSpot(remaining);
        }
      });
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    setLoading(true);
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
    };

    console.log(tourist_spot_info);

    fetch(`http://localhost:5000/my-list/${updateId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tourist_spot_info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated item");
          form.reset();
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/my-list/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, [user]);
  return (
    <div className="w-3/4 mx-auto my-20">
      <div className="overflow-x-auto ">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Spot Name</th>
              <th>Average Cost</th>
              <th>@Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {touristSpot.map((spot, idx) => (
              <tr key={spot._id}>
                <th>{idx + 1}</th>
                <td>{spot?.spot_name}</td>
                <td>{spot?.avg_cost}</td>
                <td>{spot?.email}</td>
                <div className="flex justify-center">
                  <td>
                    <label
                      onClick={() => setUpdateId(spot._id)}
                      htmlFor="booking-modal"
                      className="btn btn-accent"
                    >
                      Update
                    </label>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(spot._id)}
                      className="btn btn-secondary"
                    >
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*update modal */}

      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className=" text-lg my-3">
              Update Tourist Information:{" "}
              <span className="text-secondary font-bold">{name}</span>
            </h3>
            <form
              onSubmit={handleUpdateItem}
              className="grid grid-cols-1 gap-2 mt-8 justify-items-center "
            >
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
              <div className="w-full">
                <input
                  type="submit"
                  value="Update"
                  className="bg-[#4d4c4c] text-[#d9d9d9] w-full border border-[#331A15] p-3 rounded-md mt-8 font-bold"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
