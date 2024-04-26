import { Link } from "react-router-dom";
import errorImg from "../assets/Images/error2.jpg";

const ErrorPage = () => {
    return (
        <div className="w-1/3 my-10 mx-auto">
      <img src={errorImg} alt="" />
      <Link className="flex justify-center mt-6" to="/">
        <button className="btn btn-accent">Back To Home</button>
      </Link>
    </div>
    );
};

export default ErrorPage;