import React from "react";
// import progress from "assets/images/progress.svg";
import progress from '../../assets/images/progress.svg'
// import { primaryButton } from "utils/constants/buttonStyles";


const ComingSoon = () => {
  return (
    <>
      <div className="px-6 py-16 lg:py-20 h-screen flex flex-wrap content-center">
        <div className="block justify-items-stretch mx-auto items-center text-center ">
          <img width={650} height={400} src={progress} alt="404" />
          <h2 className="font-bold font-serif font-2xl lg:text-4xl leading-7 mb-4 ">
            Coming Soon!
          </h2>
          <a href="/" className={` w-1/2 block m-auto mt-6 bg-dark`}>
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
