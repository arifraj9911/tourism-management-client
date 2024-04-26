import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [touristSpot, setTouristSpot] = useState([]);

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
                    <button className="btn btn-accent">Update</button>
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
    </div>
  );
};

export default MyList;
