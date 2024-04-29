import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;