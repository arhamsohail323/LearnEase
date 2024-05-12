import React from "react";
import header from "../../assets/images/header.jfif";
import Section from "./Section";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="home" className="bg-white  mx-auto text-start overflow-hidden p-6 md:p-12 lg:p-48 relative">
        <div className="flex flex-col mt-36 md:mt-36 lg:mt-0 gap-4 relative ">
          <h1 className="text-text_Color font-bold  lg:text-4xl text-left">
            Your Ultimate <br /> Learn Ease Coach
          </h1>
          <p className="text-left text-2xl">
            We are <span className="text-text_Color">Learn Ease</span>,
            backed
            <br />
            by industry leaders
          </p>
          <p className="text-HeaderText text-left">
            Helping you to Select the <br /> Best Career
          </p>
          <div className="flex gap-3 md:flex-row flex-col sm:flex-row lg:flex-row">
            <button
              className="bg-PrimaryColor rounded-lg text-white"
              style={{ padding: "10px 20px" }}
              onClick={()=>navigate("/admin/login")}
            >
              Quick Try
            </button>
            <button
              className="border border-text_Color rounded-lg text-PrimaryColor"
              style={{ padding: "10px 20px" }}
              onClick={()=>navigate("/admin/SignUp")}
            >
              Start Learn
            </button>
          </div>
        </div>

        <div
          className="absolute hidden md:block overflow-hidden"
          style={{
            left: "45rem",
            top: "-5rem",
            width: "calc(70% + 5rem)",
            borderBottomLeftRadius: "10rem",
            borderTopLeftRadius: "10rem",
            transform: "rotate(-20deg)",
          }}
        >
          <img
            src={header}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <Section />
    </>
  );
};

export default Header;
