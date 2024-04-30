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
    <div className="">
      <div className="my-12 md:my-20 max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl mt-24 mb-5 font-bold ">Popular Destination</h2>
      <p className="md:w-3/5 text-sm md:text-[16px] mx-auto text-center text-[#999]">
      Discover the allure of our highly sought-after destination, where culture, adventure, and relaxation converge to create unforgettable memories for travelers worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 md:mt-20 gap-10">
        {countries.map((country) => (
          <SingleCountry
            key={country._id}
            country={country}
            handleCountry={handleCountry}
          ></SingleCountry>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Country;
