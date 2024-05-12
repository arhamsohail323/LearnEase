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
          Empower Your Future
          </h1>
          <h1 className="sm:text-4xl  text-white mb-8">
          Sign Up Now For Free Opportunities with LearnEase!
          </h1>
          <p className="text-whiteColor text-sm sm:text-xl text-center lg:text-xl md:text-xl ">
          Join LearnEase today to unlock a world of opportunity for students! Sign up now for free access to courses and career consultation services, empowering your journey to a brighter future. Don't miss out on this golden chance to shape your destiny with expert guidance and resources. Take the first step towards success with LearnEase!
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
                  <li> Unlock Potential at LearnEase!</li>
                  <li>Free Courses & Counseling at LearnEase!</li>
                  <li> Free Benefits at LearnEase!</li>
                  <li> Free Enrollment for Success!</li>
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
