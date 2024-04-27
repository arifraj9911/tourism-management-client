import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpots from "../TouristSpots/TouristSpots";
import Country from "../Country/Country";


const Home = () => {
    const spotData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TouristSpots spotData={spotData}></TouristSpots>
            <Country></Country>
        </div>
    );
};

export default Home;