import React from "react";
import footerLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#000] font-sans">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <img className="" src={footerLogo} width={250} alt="" />
          <div className="flex flex-col md:flex-row justify-evenly w-full">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white bg-PrimaryColor rounded-md py-1 px-10 text-center">Quick Links</p>

              <div className="flex flex-col md:items-start items-center mt-5 space-y-2 ">
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  <a href="#home">Home</a>
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  <a href="#consultant">Consultant</a>
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  <a href="#team">Team </a>
                </p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-semibold text-white bg-PrimaryColor rounded-md text-center py-1">Industries</p>

              <div className="flex flex-col md:items-start items-center mt-5 space-y-2">
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  {/* Blogs */}
                  <Link to={'/blogs/main'}>Blog</Link>
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">

                  <Link to={'/blogs/main'}>Informationaal Content</Link>
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">

                  <Link to={'/blogs/main'}> Scolarships</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 h-2" />

        <p className="text-white font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2024 LearnEase.PK All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
