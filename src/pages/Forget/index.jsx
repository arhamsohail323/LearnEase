import React from 'react';
import login from '../../assets/images/login.png'
const Forget = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:w-1/2 md:p-4">
          <img
            className="w-full h-auto object-cover"
            src={login}
            alt="Login"
          />
        </div>
        <div className="md:w-1/2 md:p-4">
          <form className="bg-white ">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default  Forget;
