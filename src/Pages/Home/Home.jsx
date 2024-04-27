import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpots from "../TouristSpots/TouristSpots";


const Home = () => {
    const spotData = useLoaderData();
    // console.log(spotData)
    return (
        <div>
            <Banner></Banner>
            <TouristSpots spotData={spotData}></TouristSpots>
        </div>
    );
};

export default Home;