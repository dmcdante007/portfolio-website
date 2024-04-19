import React from "react";
import valley from "../assets/valley.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={valley}
      ></img>
      <div className="w-full h-screen absolute top-0 ledt-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Swaraj Meshram
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
            I'm a&nbsp;<TypeAnimation
              sequence={[
                " Web Developer",
                1000, 
                " Front-End Developer",
                1000,
                " React.js Developer",
                1000,
                " Coder",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", display: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
