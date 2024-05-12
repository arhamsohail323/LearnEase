import React, { useState } from "react";
import WeWork from "./WeWork";
import StartFree from "./StartFree";
const Section = () => {
  const [Answer, setAnswer] = useState("")
  return (
    <div className="bg-white">
      <div className="bg-sectionBg rounded-3xl mb-24">
        <div className="flex flex-col gap-5 justify-center items-center p-8 sm:p-16 lg:p-28">
          <p className="text-sectionText text-sm">First Impressions Count</p>
          <h2 className="text-3xl font-medium">Let's Start with</h2>
          <h1 className="lg:text-4xl md:text-4xl text-xl sm:text-4xl text-Step font-medium">
            "Please Introduce Yourself"
          </h1>
          <p className="lg:text-xl md:text-xl text-sm sm:text-xl">
            This is your chance to make a memorable first impression. Share your
            journey,
            <br /> your achievements, and what makes you unique.
          </p>

          <textarea
            onChange={(e) => setAnswer(e.target.value)}
            value={Answer}
            className="p-3 h-40 border-2 mb-4 text-start border-gray-500 outline-none rounded-lg w-full sm:w-3/4 lg:w-3/2"
            placeholder="Enter your answer"
          />
          <p className="font-bold text-lg ">
            Note: Simply click 'Review My Introduction' directly to see the
            analysis of the example.
          </p>
         
        </div>
      </div>
      <StartFree />
    </div>
  );
};

export default Section;
