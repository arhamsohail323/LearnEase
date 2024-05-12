import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import image1 from '../../assets/images/team3.png'
import image2 from '../../assets/images/team2.jpg'
import image3 from '../../assets/images/team1.jpeg'
import { Link } from 'react-router-dom';

const Team = () => {
    const navigate = useNavigate();

    return (
        <div id='team'>
            <div className="text-center my-8 flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold bg-PrimaryColor text-white py-2 px-28 rounded-lg ">Our Team</h1>
                <p className="text-lg text-gray-600 font-semibold my-4">Meet the mastermind behind Learnease.pk, paving the path for success.<br/> With our Dynamic Managing Director and supportive assistant director, we're not just a website. <br/> we're your ultimate destination for career guidance and study support.Join us on a journey where learning meets ease, tailored exclusively for you!</p>
            </div>
            <div className="flex flex-wrap justify-center">

                <div className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                    <img src={image3} alt="Card 2" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
                        <p className="text-white text-center">Fatima Waheed </p>
                        <p className="text-white text-center text-xl mb-4">Managing Director</p>
                        <div className="flex space-x-4 text-white mb-4">
                       <Link to={'https://www.facebook.com/profile.php?id=61551895924161&mibextid=ZbWKwL'}><FaFacebook size={24} /></Link>
                           <Link to={'https://www.linkedin.com/in/fatima-waheed-a75152279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}> <FaLinkedin size={24} /> </Link>
                            <FaEnvelope size={24} />
                        </div>
                    </div>
                </div>
                <div className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                    <img src={image1} alt="Card 3" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
                        <p className="text-white text-center">MD Arham Sohail</p>
                        <p className="text-white text-center text-xl mb-4">Founder & CEO</p>
                        <div className="flex space-x-4 text-white mb-4">
                        <Link to={'https://www.facebook.com/MdArhamSohaildeveloper?mibextid=ZbWKwL'}><FaFacebook size={24} /></Link>
                        <Link to={'https://www.linkedin.com/in/mdarhamsohail?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}> <FaLinkedin size={24} /></Link>
                            <FaEnvelope size={24} />
                        </div>
                    </div>
                </div>
                <div className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                    <img src={image2} alt="Card 4" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#009688]">
                        <p className="text-white text-center">Muniba Iqbal</p>
                        <p className="text-white text-center text-xl mb-4">Assistant Manager</p>
                        <div className="flex space-x-4 text-white mb-4">
                           <Link to={'https://www.facebook.com/aniba.khatak?mibextid=ZbWKwL'}> <FaFacebook size={24} /></Link>
                            <Link to={'https://www.linkedin.com/in/muniba-graphics?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><FaLinkedin size={24} /></Link>
                            <FaEnvelope size={24} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-center mt-5 items-center'>
        <button className='text-center rounded-lg py-1 px-16 bg-PrimaryColor text-white' onClick={() => navigate('/consultants')}>Show All</button>
      </div> */}
        </div>
    );
}

export default Team;
