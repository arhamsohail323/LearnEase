import React from "react";
import card5 from "../../assets/images/card5.png";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import CareerConsultant from "./CareerConsultant";
const StartFree = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-PrimaryColor w-full rounded-3xl">
        <div className="flex flex-col justify-center items-center p-6 lg:p-20 md:p-20 sm:p-20 ">
          <h1 className="sm:text-4xl  text-white mb-8">
            Sign up in June to enjoy FREE access
          </h1>
          <p className="text-whiteColor text-sm sm:text-2xl text-center lg:text-2xl md:text-2xl ">
          Learn Ease And Career Consultants, developed by over 50 industry leaders and seasoned professionals,
            <br /> leverages advanced technology to empower candidates in achieving their career aspirations. <br />
            We have successfully supported over 1000 individuals    in securing their dream roles. 
          </p>
          <div class="max-w-md p-2 bg-white rounded-lg overflow-hidden shadow-lg m-4">
            <img
              class="w-32 h-auto mx-auto"
              src={card5}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 text-center">
              <div class="font-bold lg:text-3xl md:text-3xl sm:text-3xl text-lg mb-2">
                Early Adopter $0
              </div>
              <p class="text-gray-700 text-center text-base">
                <ul class="list-disc list-inside text-start">
                  <li>Unlimited Sessions</li>
                  <li>Full Feedback Report</li>
                  <li>Interview History</li>
                </ul>
              </p>
            </div>
            <button onClick={()=>navigate('/login')} className="bg-Step rounded-lg text-white p-4 w-full">
              Start Free Access
            </button>
          </div>
        </div>
      </div>
      <CareerConsultant/>
      <Questions />
    </>
  );
};

export default StartFree;
