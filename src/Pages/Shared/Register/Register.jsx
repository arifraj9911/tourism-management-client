import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // e.preventDefault();
    // console.log(data.email);
    const name = data.name;
    const image = data.photo;
    const email = data.email;
    const password = data.password;

    // console.log(name,image);

    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        navigate("/");
        alert("User create successfully");
        reset();

        // update profile
        updateProfile(res.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full md:w-3/5 lg:w-2/6 shadow-xl  rounded-xl p-10 my-16">
        <h2 className="text-3xl lg:text-4xl mb-8 text-center font-bold">
          Create Account
        </h2>
        <hr />
        <form
          className=" flex flex-col gap-4 mt-12 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Your Name</label>
            <input
              required
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Your Email</label>
            <input
              required
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Photo URL</label>
            <input
              required
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="text"
              {...register("photo", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Password</label>
            <div className="w-full relative">
              <input
                required
                className="bg-[#F3F3F3] p-3 w-full rounded-md outline-none "
                type={showPass ? "text" : "password"}
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message:
                      "password should be at least 6 character and a uppercase and lowercase",
                  },
                })}
              />
              <span
                className="absolute right-4 top-3 text-2xl"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoIosEyeOff /> : <IoIosEye />}
              </span>
            </div>

            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <div className="mt-2">
            <input
              className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-3 px-6 w-full rounded-md text-[16px] font-bold"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <div className="text-center">
          <span>
            Already have an account?
            <Link className="btn btn-link p-0" to="/login">
              Login
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
