import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import AllTouristsSpots from "../Pages/AllTouristsSpots/AllTouristsSpots";
import AddTouristsSpots from "../Pages/AddTouristsSpots/AddTouristsSpots";
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SpotViewDetails from "../Pages/SpotViewDetails/SpotViewDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import CountrySpot from "../Pages/CountrySpot/CountrySpot";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/tourist-spots')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/all-tourist-spot',
            element:<AllTouristsSpots></AllTouristsSpots>,
            loader:()=>fetch('http://localhost:5000/tourist-spots')
        },
        {
            path:'/add-tourist-spot',
            element:<PrivateRoute><AddTouristsSpots></AddTouristsSpots></PrivateRoute>
        },
        {
            path:'/my-list',
            element:<PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
            path:'/all-tourist-spot/:id',
            element:<PrivateRoute><SpotViewDetails></SpotViewDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/tourist-spots/${params.id}`)
        },
        {
            path:'/country-spots/:country_name',
            element:<CountrySpot></CountrySpot>,
            loader:({params})=>fetch(`http://localhost:5000/country/${params.country_name}`)
        }
    ]
    }, 
   ]); 