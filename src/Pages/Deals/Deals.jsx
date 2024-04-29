import deals from '../../assets/Images/deals.jpg';


const Deals = () => {
    return (
        <div className='flex justify-center px-5 max-w-screen-xl mx-auto mb-20 mt-40'>
            <div className='w-2/4 bg-[#FA7956] text-white flex flex-col items-center justify-center gap-2'>
                <h4 className="text-2xl uppercase font-bold text-[#ececec]">Enjoy Summer Deals</h4>
                <h2 className="text-5xl font-bold mb-8">Up to 25% Discount!</h2>
                <button className='bg-[#35374B] rounded-sm text-white px-4 py-2 font-normal  text-lg'>Know More</button>
                <p className='text-sm mt-4'>*Terms Applied</p>
            </div>
            <div className='w-2/4'>
                <img src={deals} alt="" />
            </div>
           
        </div>
    );
};

export default Deals;