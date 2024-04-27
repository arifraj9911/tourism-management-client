import { useLoaderData } from "react-router-dom";


const CountrySpot = () => {
    const countryData = useLoaderData();
    return (
        <div>
            <h2>This is All country spot:{countryData.length}</h2>
        </div>
    );
};

export default CountrySpot;