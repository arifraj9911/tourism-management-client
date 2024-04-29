import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpots from "../TouristSpots/TouristSpots";
import Country from "../Country/Country";
import Deals from "../Deals/Deals";
import UsefulInformation from "../UsefulInformation/UsefulInformation";


const Home = () => {
    const spotData = useLoaderData();
    return (
        <div className="dark:bg-[#121212] dark:text-[#dbdbdb]">
            <Banner></Banner>
            <TouristSpots spotData={spotData}></TouristSpots>
            <Country></Country>
            <Deals></Deals>
            <UsefulInformation></UsefulInformation>
        </div>
    );
};

export default Home;