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

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    children:[
        {
            path:'/',
            element:<Home></Home>
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
        }
    ]
    }, 
   ]); 