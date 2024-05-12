// import React from 'react';
// import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import image from '../../assets/images/consultant.jpg';
// import image1 from '../../assets/images/Shajia.jfif.jpg'
// import image2 from '../../assets/images/Zaamran.jfif.jpg'
// import image3 from '../../assets/images/Hanah.jpg'
// import image4 from '../../assets/images/DrSara.jpg'
// // Define an array of consultant objects
// const consultants = [
//   {
//     id: 1,
//     name: "",
//     image: image,
//     text: "Miss"
//   },
//   {
//     id: 2,
//     name: "Shajia Shoaib",
//     image: image1,
//     text: "Shajia Shoaib International Educational  Coach"
//   },
//   {
//     id: 2,
//     name: "Zaamran Baloch",
//     image: image2,
//     text: "Zaamran Baloch Educational  Coach"
//   },
//   {
//     id: 2,
//     name: "Hanah Mason Interview",
//     image: image3,
//     text: "Hanah Mason Interview  Coach"
    
//   },
//   {
//     id: 2,
//     name: "Dr Sara Khuram",
//     image: image4,
//     text: "Dr Sara Khuram Enterpreneurship"
    
//   },
//   // Add more consultant objects as needed
// ];

// const AllConsultant = () => {
//   return (
//     <div className="mt-28">
//       <div className="text-center my-8">
//         <h1 className="text-3xl font-bold text-[#009688]">Our Career Consultant</h1>
//         <p className="text-lg text-gray-600">Are you looking for expert career advice and guidance? Our team of experienced career consultants is here to help you navigate your professional journey.</p>
//       </div>
//       <div className="flex flex-wrap justify-center lg:p-10 md:p-10">
//         {/* Map over the array of consultants and render a card for each */}
//         {consultants.map(consultant => (
//           <div key={consultant.id} className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
//             <img src={consultant.image} alt={`Card ${consultant.id}`} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 bg-gradient-to-b from-transparent to-[#009688] transition duration-300">
//               <p className="text-white text-center mb-4">{consultant.text}</p>
//               <div className="flex space-x-4 text-white mb-4">
//                 <FaFacebook size={24} />
//                 <FaLinkedin size={24} />
//                 <FaEnvelope size={24} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllConsultant;


import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import image from '../../assets/images/consultant.jpg';
import image1 from '../../assets/images/Shajia.jfif.jpg';
import image2 from '../../assets/images/Zaamran.jfif.jpg';
import image3 from '../../assets/images/Hanah.jpg';
import image4 from '../../assets/images/DrSara.jpg';

const consultants = [
  
  {
    id: 2,
    name: "Shajia Shoaib",
    image: image1,
    text: "Shajia Shoaib International Educational  Coach"
  },
  {
    id: 3,
    name: "Zaamran Baloch",
    image: image2,
    text: "Zaamran Baloch Educational  Coach"
  },
  {
    id: 4,
    name: "Hanah Mason Interview",
    image: image3,
    text: "Hanah Mason Interview  Coach"
  },
  {
    id: 5,
    name: "Dr Sara Khuram",
    image: image4,
    text: "Dr Sara Khuram Enterpreneurship"
  }
];

const AllConsultant = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route matches the route for the AllConsultant page
  const isAllConsultantPage = location.pathname === '/consultants';

  // If it's the AllConsultant page, don't render the footer
  if (isAllConsultantPage) {
    return (
      <div className="mt-28">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-[#009688] ">Our Career Consultant</h1>
          <p className="text-lg text-gray-600">Are you looking for expert career advice and guidance? Our team of experienced career consultants is here to help you navigate your professional journey.</p>
        </div>
        <div className="flex flex-wrap justify-center lg:p-10 md:p-10">
          {consultants.map(consultant => (
            <div key={consultant.id} className="relative w-64 h-72 overflow-hidden m-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105" onClick={() => navigate(`/consultant/${consultant.id}`)}>
              <img src={consultant.image} alt={`Card ${consultant.id}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 hover:opacity-100 bg-gradient-to-b from-transparent to-[#009688] transition duration-300">
                <p className="text-white text-center mb-4">{consultant.text}</p>
                <div className="flex space-x-4 text-white mb-4">
                  <FaFacebook size={24} />
                  <FaLinkedin size={24} />
                  <FaEnvelope size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null; // If it's not the AllConsultant page, render nothing
  }
}

export default AllConsultant;
