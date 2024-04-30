import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const MyList = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [touristSpot, setTouristSpot] = useState([]);
  const [updatedSpot, setUpdatedSpot] = useState(null);
  const [updateId, setUpdateId] = useState(null);
  // console.log(updatedSpot);

  const handleDeleteItem = (id) => {
    // console.log("delete item ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourism-management-server-self.vercel.app/my-list/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = touristSpot.filter((spots) => spots._id !== id);
              setTouristSpot(remaining);
            }
          });
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

    // console.log(tourist_spot_info);

    fetch(`https://tourism-management-server-self.vercel.app/my-list/${updateId}`, {
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
          Swal.fire({
            title: "Updated Successfully",
            text: "Want to update more! click update button",
            icon: "success",
          });
          form.reset();
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    fetch(`https://tourism-management-server-self.vercel.app/my-list/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, [user]);
  return (
    <div className="dark:bg-[#121212] dark:text-[#dbdbdb]">
      <div className="w-5/6   md:w-3/4  mx-auto dark:bg-[#121212] py-20">
        <div className="overflow-x-auto ">
          <table className="table text-center">
            {/* head */}
            <thead className="bg-[#35374B]  text-white text-xl">
              <tr>
                <th>SN</th>
                <th>Spot</th>
                <th>Country</th>
                <th className="flex  items-center">
                  <IoLocationOutline />
                  <span>Location</span>
                </th>
                <th>$Average Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-lg bg-[#F3F3F3] dark:bg-[#212121] font-semibold">
              {/* row 1 */}
              {touristSpot.map((spot, idx) => (
                <tr key={spot._id}>
                  <th>{idx + 1}</th>
                  <td>{spot?.spot_name}</td>
                  <td>{spot?.country_name}</td>
                  <td>{spot?.location}</td>
                  <td>${spot?.avg_cost}</td>
                  <div className="flex justify-center">
                    <td>
                      <label
                        onClick={() => {
                          setUpdateId(spot._id);
                          setUpdatedSpot(spot);
                        }}
                        htmlFor="booking-modal"
                        className=""
                      >
                        <FaPencilAlt className="bg-[#333A73] text-white text-5xl p-3 rounded-md" />
                      </label>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(spot._id)}
                        className="bg-[#A0153E] text-white text-2xl p-3 rounded-md"
                      >
                        <RiDeleteBin6Fill />
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
            <div className="modal-box bg-[#35374B] text-white">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className=" text-3xl font-bold my-3">
                Update Tourist Information:{" "}
                <span className="text-secondary font-bold">{name}</span>
              </h3>
              <form
                onSubmit={handleUpdateItem}
                className="grid grid-cols-1 gap-2 mt-8 justify-items-center "
              >
                <div className=" flex justify-center gap-6 ">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="space-y-2">
                      <label className="font-bold">Tourists Spot Name</label>
                      <input
                        type="text"
                        name="spot_name"
                        defaultValue={updatedSpot?.spot_name}
                        placeholder="tourist spot name"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">Image URL</label>
                      <input
                        type="text"
                        name="image"
                        defaultValue={updatedSpot?.image}
                        placeholder="image url"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">Country Name</label>
                      <input
                        type="text"
                        name="country_name"
                        defaultValue={updatedSpot?.country_name}
                        placeholder="country name"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">Location</label>
                      <input
                        type="text"
                        name="location"
                        defaultValue={updatedSpot?.location}
                        placeholder="Location"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">Seasonality</label>
                      <input
                        type="text"
                        name="season"
                        defaultValue={updatedSpot?.season}
                        placeholder="seasonality"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="space-y-2">
                      <label className="font-bold">Average Cost</label>
                      <input
                        type="number"
                        name="avg_cost"
                        defaultValue={updatedSpot?.avg_cost}
                        placeholder="average cost"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">Travel Time</label>
                      <input
                        type="text"
                        name="travel_time"
                        defaultValue={updatedSpot?.travel_time}
                        placeholder="travel time"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">
                        Total Visitors Per Year
                      </label>
                      <input
                        type="text"
                        name="visitor"
                        defaultValue={updatedSpot?.visitor}
                        placeholder="total visitors per year"
                        className="input input-bordered rounded-none text-black w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold">Description</label>
                      <textarea
                        name="description"
                        defaultValue={updatedSpot?.description}
                        id=""
                        placeholder="short description"
                        cols="20"
                        rows="4"
                        className=" rounded-none px-3 text-black border-none py-2 w-full"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="submit"
                    value="Update"
                    className="bg-[#C40C0C] text-xl text-white w-full border  p-3  mt-8 font-bold border-none "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
