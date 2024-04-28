import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


import google from "../../../assets/Images/google.png";
import github from "../../../assets/Images/github.png";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data.email);
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        setErrors("");
        alert("user login successful");
        reset();
      })
      .catch((err) => {
        setErrors(err.message);
      });
  };

  const handleGoogleSubmit = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        alert("user login successful");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleGithubSubmit = () => {
    console.log("github login");
    githubSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        alert("user login successful");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="w-full md:w-3/5 lg:w-2/6  border  p-10 mt-16">
          <h2 className="text-3xl lg:text-4xl mb-8 text-center font-normal">
            Login
          </h2>

          <form
            className=" flex flex-col gap-4 mt-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex items-center  text-[#999]  border-b ">
              {/* <label className="font-medium">Your Email</label> */}
              <MdAlternateEmail className=""/>
              <input
                placeholder="Email"
                className="bg-white w-full text-black  rounded-none  p-2  outline-none "
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex border-b  items-center relative text-[#999]">
              {/* <label className="font-medium">Password</label> */}
              <RiLockPasswordLine />
              <input
                placeholder="Password"
                className="bg-white  rounded-none  p-2  outline-none "
                type={showPass ? "text" : "password"}
                {...register("password")}
              />
              <span
                className="absolute right-4 top-2 text-2xl"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoIosEyeOff /> : <IoIosEye />}
              </span>
            </div>
            <p className="text-sm text-red-500 mb-2">{errors}</p>
            
            <div className="flex justify-between">
              <div className="flex gap-2 item">
                <input type="checkbox" name="remember" id="" />
                <span>Remember Me</span>
              </div>
              <div>
                <Link className="text-primary underline" to="">
                  Forgot Password
                </Link>
              </div>
            </div>

            <div className="mt-2">
              <input
                className="bg-[#C40C0C]  text-white py-3 px-6 w-full  text-lg font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="text-center">
            <span>
              New to account?
              <Link className="btn btn-link p-0" to="/register">
                Register
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 lg:w-2/6 mx-auto mb-20 ">
        <div className="divider my-6">OR</div>
        <div className="flex justify-center gap-4 ">
          <button onClick={handleGoogleSubmit} className="">
            
            <img src={google} alt="" />
            
          </button>
          <button onClick={handleGithubSubmit} className="">
            
            <img src={github} alt="" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
