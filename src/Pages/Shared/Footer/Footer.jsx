import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthProvider";
import { FaArrowUp, FaFacebook, FaStaylinked } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <footer className="flex justify-between dark:bg-[#222222]  p-10 bg-base-200 text-base-content">
        <aside className="w-1/5">
          <h2 className=" ">
            <span className="text-3xl flex gap-0 font-bold">
              <span className="text-[#C40C0C] ">TRAVEL</span>
              <span className="dark:text-white">TRIBE</span>
            </span>
            <br />
            <span className="text-[16px] text-[#999]">
              We gave you tremendous privileges for your comfortable travel
            </span>
          </h2>
        </aside>
        <nav className="flex flex-col gap-2 text-[#999]">
          <h6 className="text-2xl mb-4 font-bold text-[#4f4f4f] dark:text-white">
            Supports
          </h6>
          <a className="link link-hover">Customers Support</a>
          <a className="link link-hover">Privacy Support</a>
          <a className="link link-hover">Contact Support</a>
        </nav>
        <nav className="flex flex-col gap-2 text-[#999]">
          <h6 className="text-2xl mb-4 font-bold text-[#4f4f4f] dark:text-white">
            Contact
          </h6>
          <a className="link link-hover flex items-center gap-2">
            <IoCallOutline />
            <span>+8897-32438-53</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <AiOutlineMail />
            <span>{user?.email ? user?.email : "karif9514@gmail.com"}</span>
          </a>
          <div className="flex items-center gap-4 mt-2">
            <FaFacebook className="text-2xl text-[#1877F2]" />
            <BsInstagram className="text-2xl text-[#5B51D8]" />
            <FaXTwitter className="text-2xl text-[#1DA1F2]" />

            <FaStaylinked className="text-2xl text-[#5B51D8]" />
          </div>
        </nav>
        <nav className="flex flex-col gap-2 w-1/4 text-[#999]">
          <h6 className="text-2xl mb-2 font-bold text-[#4f4f4f] dark:text-white">
            NewsLetter
          </h6>
          <div className="relative ">
            <input
              type="email"
              name=""
              placeholder="Email"
              className="input input-bordered bg-white border-none focus:outline-none text-black hover:bg-none  rounded-none"
              id=""
            />
            {/* <button className="bg-[#C40C0C] text-white px-3 py-[12px] absolute top-0 right-10 ">Send</button> */}
            <button className="bg-[#C40C0C] px-5 py-3 text-[16px] font-semibold mt-4 text-white">
              Send
            </button>
          </div>
          <span className="text-sm">Get your early updates & more</span>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 dark:bg-[#181818]  bg-[#e7e7e7] ">
        <aside>
          <p className="font-normal text-[#4f4f4f] dark:text-white text-[16px]">
            Copyright © 2024 - All right reserved by Travel Tribe
          </p>
          <a
            className="bg-[#35374B] px-3  py-2 rounded-md text-white absolute right-10"
            href="#"
          >
            <FaArrowUp />
          </a>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
