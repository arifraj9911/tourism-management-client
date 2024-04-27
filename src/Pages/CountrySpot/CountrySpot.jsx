import { Link, useLoaderData } from "react-router-dom";

const CountrySpot = () => {
  const countryData = useLoaderData();
  console.log(countryData);
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <h2>This is All country spot:{countryData.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {countryData.map((country) => (
          <div key={country._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="h-[300px]">
                <img
                  className="w-full h-full"
                  src={country?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{country?.spot_name}</h2>
                <h3 className="text-xl font-semibold">
                  Country: {country?.country_name}
                </h3>
                <p>{country?.description}</p>
                <div className="space-y-3 mt-4">
                  <p>Location: {country?.location}</p>
                  <p>Average Cost: {country?.avg_cost}</p>
                  <p>Seasonality: {country?.season}</p>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={`../all-tourist-spot/${country._id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySpot;
