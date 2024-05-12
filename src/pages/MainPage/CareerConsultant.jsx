import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import image from '../../assets/images/consultant.jpg'
import { useNavigate } from 'react-router';
import image1 from '../../assets/images/consultant1.jpg'
import image2 from '../../assets/images/consultant10.jpg'
import image3 from '../../assets/images/consultant3.jpg'
import Team from './Team';

const CareerConsultant = () => {
  const navigate = useNavigate();

  return (
    <div id='consultant'>
      <div className="text-center my-8 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold bg-PrimaryColor text-white py-2 px-5 rounded-lg ">Our Career Consultant</h1>
        <p className="text-lg text-gray-600 font-semibold my-4">Are you looking for expert career advice and guidance? Our team of experienced career consultants is here to help you navigate your professional journey.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div onClick={() => navigate(`/consultant/1`)} className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <img src={image} alt="Card 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
            <p className="text-white text-center mb-4"> Khansa Anjum</p>
            <div className="flex space-x-4 text-white mb-4">
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
              <FaEnvelope size={24} />
            </div>
          </div>
        </div>
        <div onClick={() => navigate(`/consultant/7`)} className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <img src={image3} alt="Card 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
            <p className="text-white text-center mb-4">Abida Nasreen</p>
            <div className="flex space-x-4 text-white mb-4">
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
              <FaEnvelope size={24} />
            </div>
          </div>
        </div>
        <div onClick={() => navigate(`/consultant/8`)} className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <img src={image1} alt="Card 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
            <p className="text-white text-center mb-4">Sofia Hanif</p>
            <div className="flex space-x-4 text-white mb-4">
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
              <FaEnvelope size={24} />
            </div>
          </div>
        </div>
        <div onClick={() => navigate(`/consultant/9`)} className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <img src={image2} alt="Card 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
            <p className="text-white text-center mb-4"> Megan Tuano</p>
            <div className="flex space-x-4 text-white mb-4">
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
              <FaEnvelope size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-5 items-center'>
        <button className='text-center rounded-lg py-1 px-16 bg-PrimaryColor text-white' onClick={() => navigate('/consultants')}>Show All</button>
      </div>
      <Team />
    </div>
  );
}

export default CareerConsultant;
