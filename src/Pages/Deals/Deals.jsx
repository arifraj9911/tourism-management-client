import deals from "../../assets/Images/deals.jpg";

const Deals = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center px-2 md:px-5 max-w-screen-xl mx-auto mb-14 md:mb-20 mt-20 md:mt-40">
      <div className="md:w-2/4 bg-[#FA7956] text-white flex flex-col items-center justify-center gap-2">
        <h4 className="text-xl md:text-2xl uppercase font-bold text-[#ececec] mt-4 md:mt-0">
          Enjoy Summer Deals
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
          Up to 25% Discount!
        </h2>
        <button className="bg-[#35374B] rounded-sm text-white px-3 md:px-4 py-1 md:py-2 font-normal  text-lg">
          Know More
        </button>
        <p className="text-sm mt-2 md:mt-4 mb-2 md:mb-0">*Terms Applied</p>
      </div>
      <div className="md:w-2/4">
        <img src={deals} alt="" />
      </div>
    </div>
  );
};

export default Deals;
