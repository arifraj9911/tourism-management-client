import { useEffect, useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry";
import { useNavigate } from "react-router-dom";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const handleCountry = (country) => {
    navigate(`/country-spots/${country}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="my-20 max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl mb-20">Tourist Country</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {countries.map((country) => (
          <SingleCountry
            key={country._id}
            country={country}
            handleCountry={handleCountry}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
