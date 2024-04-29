import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail, MdOutlineInsertPhoto } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
    const name = data.name;
    const image = data.photo;
    const email = data.email;
    const password = data.password;
    // const termsCondition = data;


    

    // console.log(termsCondition);

    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        navigate("/");
        toast.success("User create successfully");
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
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full md:w-3/5 lg:w-2/6 border p-10 my-16">
        <h2 className="text-3xl lg:text-4xl mb-6 text-center font-normal">
          Create Account
        </h2>
        
        <form
          className=" flex flex-col gap-4 mt-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center  border-b text-[#999]">
            {/* <label className="font-medium">Your Name</label> */}
            <IoDocumentTextOutline />
            <input
            placeholder="Name"
              required
              className="bg-white w-full text-black rounded-none border-[#999] p-2  outline-none "
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="flex items-center border-b text-[#999]">
            {/* <label className="font-medium">Your Email</label> */}
            <MdAlternateEmail />
            <input
            placeholder="Email"
              required
              className="bg-white text-black  rounded-none border-[#999] p-2  outline-none "
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex items-center border-b text-[#999]">
            {/* <label className="font-medium">Photo URL</label> */}
            <MdOutlineInsertPhoto />
            <input
            placeholder="Photo URL"
              required
              className="bg-white text-black  rounded-none border-[#999] p-2  outline-none "
              type="text"
              {...register("photo", { required: true })}
            />
          </div>
          <div className="flex items-center border-b text-[#999]">
            {/* <label className="font-medium">Password</label> */}
            <RiLockPasswordLine />
            <div className="w-full relative">
              <input
              placeholder="Password"
                required
                className="bg-white text-black  rounded-none border-[#999] p-3 w-full  outline-none "
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

            
          </div>
          <p className="text-sm text-red-500 mb-2">{errors.password?.message}</p>
          <div className="flex gap-2 item ">

              <input type="checkbox" name="check"  id="" />
              <span className="">Accept Terms & Conditions!</span>
            </div>

          <div className="mt-0">
          <input
                className="bg-[#C40C0C]  text-white py-3 px-6 w-full  text-lg font-bold"
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
