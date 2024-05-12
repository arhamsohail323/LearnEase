import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./Footer";
const Questions = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Function to handle sending a message
  const sendMessage = (message, sender = 'user') => {
    setMessages([...messages, { text: message, sender }]);
    setUserInput(""); // Clear input after sending
  };

  // Effect to automatically send a message when conversation length > 0
  // useEffect(() => {
  //   if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
  //     const autoReply = "This is an automatic response. How can I assist you further?";
  //     setTimeout(() => sendMessage(autoReply, 'bot'), 1000); // Simulate a delay for bot response
  //   }
  // }, [messages]);
  return (
    <>
      <div className="bg-white container mx-auto text-start p-8 md:p-16 lg:p-24">
        <div className="flex justify-start items-start ">
        <h1 className="text-Step lg:text-4xl md:text-4xl sm:text-4xl text-white px-2 py-2 rounded-lg  font-medium mb-8 bg-PrimaryColor ">
          Frequently Asked Questions
        </h1>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between">
          {/* <div className="w-[50%]">
            <div>We would like to chat with you!</div>
            <img
              onClick={() => setIsChatOpen(!isChatOpen)}
              src={chat}
              alt="Chat with us"
            />
            <div
              className="bg-blue-400 h-20 w-20 fixed right-5 flex justify-center items-center rounded-full bottom-16 cursor-pointer"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              Chat
            </div>
            {isChatOpen && (
              <div className="fixed bottom-40 right-5 bg-white w-[300px] h-[400px] rounded-lg shadow-lg flex flex-col">
                <div className="p-4 border-b-2">Chat with us!</div>
                <div className="flex-1 p-4 overflow-auto">
                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="border-t-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      userInput.trim() &&
                      sendMessage(userInput)
                    }
                    placeholder="Type your message..."
                    className="w-full p-2"
                  />
                </div>
              </div>
            )}
          </div> */}
          <div className="flex flex-wrap md:w-[50%]">
            <Accordion className="w-full p-4  text-sm lg:text-xl md:text-xl sm:text-xl">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                  >
                    Who will benefit from your services?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Whether you're just starting out in your career, looking to move up the ladder, or considering a change, our services are for anyone who wants to reach their career goals.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                  >
 How can your services help me with my career goals?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Our experienced coaches give you personalized advice and support to help you figure out what you want and how to get there. Whether it's improving your resume or navigating a career change, we're here to help.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                  >
                    How do I get started?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  It's easy! Check out our website, pick the services you need, and schedule a chat with one of our expert coaches. We'll talk about your goals and how we can help.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                  >
                    Are your services for specific industries?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Nope! Whether you're in tech, healthcare, finance, or anything else, our coaches have the know-how to help you succeed.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                  >
                    What makes your services different?

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  We focus on you and what you need. Our coaches are experts who care about your success and will work with you to make sure you reach your goals. You can trust us to help you every step of the way!
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Questions;
