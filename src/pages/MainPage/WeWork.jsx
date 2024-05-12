import React from "react";
import dashboardImage from "../../assets/images/DashboardImage.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import StartFree from "./StartFree";
const WeWork = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center">
        <p className="text-sectionText mb-4 text-sm">How We Work?</p>
        <h1 className="lg:text-4xl md:text-4xl sm:text-4xl font-medium mb-7">
          Provide Your Job Link
          <br />
          Begin Interactive Interview <br />
          Obtain Detailed Feedback
        </h1>
        <h2 className="lg:text-2xl sm:text-2xl">Swipe right to see more </h2>
        <div className="self-center my-20">
          <img className="w-[1300px]" src={dashboardImage} />
        </div>
      </div>
      <div className="container mx-auto text-start px-8 md:px-16 lg:px-24">
        <h1 className="lg:text-4xl sm:text-4xl md:text-4xl ">
          Master Interviews, Unlock
          <br />
          Success with Industry Expertise
        </h1>
        <p className="leading-5 text-sm lg:text-xl text-section2Textcolor mb-14">
          Designed by 50+ industry leaders and experienced interviewers, powered
          by the most advanced GPT-4 technology, we have helped 1000+ candidates
          land on their dream job
        </p>
        <div className="grid grid-flow-col grid-cols-4 ">
          <div class="w-auto rounded overflow-hidden shadow-lg my-4">
            <img
              class="w-auto h-auto mx-auto"
              src={card1}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2 text-Step">
                Job-specific Interview Questions
              </div>
              <p class="text-gray-700 text-base">
                Our AI model is trained with 10,000+ real interview questions,
                and generates structured interviews based on a specific job link
                or your personal experience.
              </p>
            </div>
          </div>
          <div class="w-auto  rounded overflow-hidden shadow-lg my-4">
            <img
              class="w-auto h-auto mx-auto"
              src={card2}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2 text-Step">
                Interactive Sessions with Avatar
              </div>
              <p class="text-gray-700 text-base">
                Using the latest speech-to-text technology, engage in an
                interactive interview session with our fox avatar. The virtual
                interviewer will pose insightful follow-up questions and provide
                answers to your queries regarding interview questions, as
                necessary.
              </p>
            </div>
          </div>
          <div class="w-auto  rounded overflow-hidden shadow-lg my-4">
            <img
              class="w-auto h-auto mx-auto"
              src={card3}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2 text-Step">
                Comprehensive Feedback
              </div>
              <p class="text-gray-700 text-base">
                For each question, we generate five components of feedback:
                Overall Assessment, Question Analysis, Answer Criteria, STAR
                Method Evaluation, and Suggested Revision.
              </p>
            </div>
          </div>
          <div class="w-auto  rounded overflow-hidden shadow-lg my-4">
            <img
              class="w-auto h-auto mx-auto"
              src={card4}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2 text-Step">
                Revised Answers
              </div>
              <p class="text-gray-700 text-base">
                Based on real-word interview criteria, we will revise your
                answer and provide a sample answer suggestion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <StartFree />
    </>
  );
};

export default WeWork;
