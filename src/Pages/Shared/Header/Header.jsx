import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { IoCallOutline, IoMoon, IoSunny } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiLogout } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(localStorage.getItem("darkMode"));
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const darkModeHandler = () => {
    setDark((prevMode) => !prevMode);
  };
  const menu = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/all-tourist-spot">All Tourists Spots</NavLink>
      </li>
      <li className="">
        <NavLink to="/add-tourist-spot">Add Tourists Spots</NavLink>
      </li>
      <li className="">
        <NavLink to="/my-list">My List</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* navbar top */}
      <div className="dark:bg-[#121212]">
        <div className="navbar py-0 bg-base-100 max-w-screen-xl dark:bg-[#121212] dark:text-white px-3 lg:px-0 mx-auto ">
          <div className="flex-1 flex-col items-start md:flex-row gap-1 md:gap-10 text-xs md:text-sm text-[#94999f] dark:text-[#dbdbdb] ">
            <div className="flex gap-1 items-center">
              <IoCallOutline />
              <span>+8897-32438-53</span>
            </div>
            <div className="flex gap-1 items-center">
              <AiOutlineMail />
              <span>{user?.email ? user?.email : "karif9514@gmail.com"}</span>
            </div>
          </div>
          <div className="flex-none ">
            {/* dark/light theme */}
            <button
              className="pr-8 hidden lg:flex border-r-2"
              onClick={() => darkModeHandler()}
            >
              {dark && <IoSunny className="text-2xl" />}
              {!dark && <IoMoon className="text-2xl" />}
            </button>
            {/* button */}
            <div className="pl-8 text-[#94999f] dark:text-[#dbdbdb]">
              {user ? (
                <span className="flex items-center gap-3 md:gap-6">
                  <button
                    onClick={() => {
                      logOut();
                      navigate("/login");
                    }}
                    className=" text-[16px] flex font-bold  gap-1 items-center"
                  >
                    <CiLogout />
                    <span> Sign Out</span>
                  </button>{" "}
                  {user?.photoURL ? (
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      className="avatar"
                    >
                      <div className="w-8 lg:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  ) : (
                    <div className="tooltip" data-tip={user?.displayName}>
                      <CgProfile className="text-4xl" />
                    </div>
                  )}{" "}
                </span>
              ) : (
                <div className="flex gap-3 md:gap-6">
                  <Link
                    className="text-sm md:text-[16px] font-bold flex gap-1 items-center"
                    to="/login"
                  >
                    <IoIosLogIn />
                    <span>Login</span>
                  </Link>
                  <Link
                    className="text-sm md:text-[16px] font-bold flex gap-1 items-center"
                    to="/register"
                  >
                    <SiGnuprivacyguard />
                    <span>Register</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* navbar bottom */}
      <div className="navbar py-5 lg:px-20 bg-white dark:bg-[#212121] dark:text-white sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content dark:bg-[#121212] active:bg-white dark:border-none mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost gap-0 pl-1 text-2xl md:text-3xl font-bold"
          >
            <span className="text-[#C40C0C]">TRAVEL</span>TRIBE
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex lg:gap-2">
          <ul className="flex items-center gap-10 px-4 text-[#94999f] text-[18px] font-semibold">
            {menu}
          </ul>
        </div>
        <div className="navbar-end flex lg:hidden">
          {/* dark/light theme */}
          <button
            className="pr-2 lg:pr-8 flex lg:hidden lg:border-r-2"
            onClick={() => darkModeHandler()}
          >
            {dark && <IoSunny className="text-2xl" />}
            {!dark && <IoMoon className="text-2xl" />}
          </button>
        </div>
        {/* <div className="navbar-end">
          
          <button className="mr-5" onClick={() => darkModeHandler()}>
            {dark && <IoSunny className="text-3xl" />}
            {!dark && <IoMoon className="text-3xl" />}
          </button>
          
          {user ? (
            <span className="flex items-center gap-3 lg:gap-4">
              {" "}
              {user?.photoURL ? (
                <div
                  className="avatar tooltip tooltip-bottom tooltip-success"
                  data-tip={user?.displayName}
                >
                  <div className="w-8 lg:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              ) : (
                <div className="tooltip" data-tip={user?.displayName}>
                  <CgProfile className="text-4xl" />
                </div>
              )}{" "}
              <button
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
                className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-2 lg:py-3 px-4 lg:px-6 rounded-md text-[16px] font-bold"
              >
                Sign Out
              </button>
            </span>
          ) : (
            <div className="flex gap-2">
              <Link
                className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-2 lg:py-3 px-4 lg:px-6 rounded-md text-[16px] font-bold"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-2 lg:py-3 px-4 lg:px-6 rounded-md text-[16px] font-bold"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div> */}
      </div>
      <Tooltip place="left" id="my-tooltip" />
    </>
  );
};

export default Header;
