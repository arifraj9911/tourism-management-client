import PropTypes from "prop-types";
const SingleCountry = ({ country, handleCountry }) => {
  const { country_name, image, description } = country;
  return (
    <div
      onClick={() => handleCountry(country_name)}
      className="mx-2  lg:mx-0 lg:w-96 bg-white dark:bg-[#212121]  shadow-xl image-full"
    >
      <figure className="h-[300px]">
        <img className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className=" px-6 py-8 space-y-4  ">
        <h2 className="card-title text-3xl font-bold ">{country_name}!</h2>
        <p className="text-[15px] font-semibold text-[#999]">{description}</p>
      </div>
    </div>
  );
};

export default SingleCountry;

SingleCountry.propTypes = {
  country: PropTypes.object,
  handleCountry: PropTypes.func,
};
