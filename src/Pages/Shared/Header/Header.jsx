import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const menu = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/all-tourist-spot">All_Tourists_Spots</NavLink>
      </li>
      <li className="">
        <NavLink to="/add-tourist-spot">Add_Tourists_Spots</NavLink>
      </li>
      <li className="">
        <NavLink to="/my-list">My_List</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white dark:bg-black dark:text-white sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost  text-xl">
          Travelenture
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:gap-2">
        <ul className="menu menu-horizontal px-4">{menu}</ul>
      </div>
      <div className="navbar-end">
        {/* dark/light theme */}
        <button className="mr-5" onClick={() => darkModeHandler()}>
          {
            dark && <IoSunny className="text-3xl" />
          }
          {
            !dark && <IoMoon className="text-3xl" />
          }
        </button>
        {/* button */}
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
      </div>
    </div>
  );
};

export default Header;
