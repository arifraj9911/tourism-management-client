import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaGithub, FaGoogle } from "react-icons/fa";


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
        <div className="flex justify-center items-center ">
       
        <div className="w-full md:w-3/5 lg:w-2/6  shadow-xl  p-10 my-16">
          <h2 className="text-3xl lg:text-4xl mb-8 text-center font-bold">
            Login
          </h2>
          <hr />
          <form
            className=" flex flex-col gap-4 mt-12 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 text-[#403F3F]">
              <label className="font-medium">Your Email</label>
              <input
                className="bg-[#F3F3F3] p-2 rounded-md outline-none "
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-1 relative text-[#403F3F]">
              <label className="font-medium">Password</label>
              <input
                className="bg-[#F3F3F3] p-2 rounded-md outline-none "
                type={showPass ? "text" : "password"}
                {...register("password")}
              />
              <span
                className="absolute right-4 top-[36px] text-2xl"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoIosEyeOff /> : <IoIosEye />}
              </span>
            </div>
            <p className="text-sm text-red-500">{errors}</p>
  
            <div className="mt-2">
              <input
                className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-3 px-6 w-full rounded-md text-[16px] font-bold"
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
          <div className="divider">OR</div>
          <div className="flex flex-col gap-2">
            <button onClick={handleGoogleSubmit} className="btn btn-outline">
              <FaGoogle />
              <span>Continue with Google</span>
            </button>
            <button onClick={handleGithubSubmit} className="btn btn-outline">
              <FaGithub />
              <span>Continue with Github</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;