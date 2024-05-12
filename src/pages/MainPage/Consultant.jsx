import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useParams } from 'react-router-dom'; // Import useParams hook
import image from '../../assets/images/consultant.jpg'
import image1 from '../../assets/images/Shajia.jfif.jpg';
import image2 from '../../assets/images/Zaamran.jfif.jpg';
import image3 from '../../assets/images/Hanah.jpg';
import image4 from '../../assets/images/DrSara.jpg';
import image6 from '../../assets/images/consultant3.jpg'
import image7 from '../../assets/images/consultant1.jpg'
import image8 from '../../assets/images/consultant10.jpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ContactFormModal component
const ContactFormModal = ({ onClose }) => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        qualification: '',
        meetingTimeDate: '',
        address: '',
        comment: '',
        consultantName: '', // Add consultantName field
    });

    const [isLoading, setIsLoading] = useState(false);
    const [consultantName, setConsultantName] = useState(''); // Add consultantName state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Send form data to your API endpoint using fetch or axios
            const response = await fetch('http://localhost:8080/appointment/setAppointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData, // Include existing formData
                    consultantName: consultantName, // Include consultantName from state
                }),
            });

            // Check if the request was successful
            if (response.ok) {
                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    contactNumber: '',
                    qualification: '',
                    meetingTimeDate: '',
                    address: '',
                    comment: '',
                    consultantName: '', // Reset consultantName field
                });
                // Close modal
                onClose();
                // Show success message using React Toastify
                toast.success('Form submitted successfully!');
            } else {
                // Handle the error if the request was not successful
                console.error('Error submitting form:', response.statusText);
                toast.error("Form is not submitted");
                // Optionally, display an error message or handle other actions
            }
        } catch (error) {
            // Handle any network errors or exceptions
            console.error('Error submitting form:', error.message);
            // Optionally, display an error message or handle other actions
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="modal-overlay absolute top-30 bg-gray-300 rounded-md">
            <div className="modal flex flex-col w-[560px] h-[430px] ">
                <button onClick={onClose} className="close-btn absolute right-5 mt-2 text-2xl"><IoClose style={{ color: 'red' }} /></button>
                <h2 className='text-center font-bold mt-5 text-xl text-PrimaryColor'>Consultation Form</h2>
                <form onSubmit={handleSubmit} className='flex flex-row flex-wrap p-5'>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className='py-2 px-8 mb-5 ms-2 rounded-xl outline-PrimaryColor'
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className='py-2 px-8 mb-5 ms-2 rounded-xl outline-PrimaryColor'
                    />
                    <input
                        type="text"
                        placeholder="Your Contact"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        required
                        className='py-2 px-8 mb-5 ms-2 rounded-xl outline-PrimaryColor'
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Qualification"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        required
                        className='py-2 px-8 mb-5 ms-2 rounded-xl outline-PrimaryColor'
                    />
                    <input
                        type="date"
                        placeholder="Your time"
                        value={formData.meetingTimeDate}
                        onChange={(e) => setFormData({ ...formData, meetingTimeDate: e.target.value })}
                        required
                        className='py-2 px-[55px] mb-5 ms-2 rounded-xl outline-PrimaryColor'
                    />
                    <input
                        type="text"
                        placeholder="Your Address "
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className='py-2 px-8 mb-5 ms-2 rounded-xl outline-PrimaryColor'
                    />
                    <div className='flex justify-center items-center mx-auto'>
                        <select
                            value={consultantName}
                            onChange={(e) => setConsultantName(e.target.value)}
                            required
                            className='py-2 px-8 mb-5 ms-2 rounded-xl outline-PrimaryColor'
                        >
                            <option value="">Select Consultant</option>
                            <option value="Khansa Anjum">Khansa Anjum</option>
                            <option value="Abida Naseer">Abida Naseer</option>
                            <option value="Sofia Hanif">Sofia Hanif</option>
                            <option value="Shajia Shoaib">Shajia Shoaib</option>
                            <option value="Zaamran Baloch">Zaamran Baloch</option>
                            <option value="Dr.Sara Saeed Khurram">Dr.Sara Saeed Khurram</option>
                        </select>
                    </div>
                    <textarea
                        placeholder="Enter your Quries"
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        required
                        className='py-2 w-full me-4 ms-2 px-8 mb-5 rounded-xl outline-PrimaryColor'
                    ></textarea>
                    <div className="absolute bottom-2 right-10">
                        <button type="submit" className="submit-btn py-2 px-10 bg-PrimaryColor font-bold text-white rounded-lg">{isLoading ? <p>Loading...</p> : <p>Submit</p>}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Consultant component
const Consultant = () => {
    // State to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    // Get the id parameter from the URL
    const { id } = useParams();

    // Event handler to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };


    const data = [{
        img: image,
        id: 1,
        name: 'Khansa Anjum',
        email: 'example@example.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image1,
        id: 2,
        name: ' Shajia Shoaib ',
        email: 'ShajiaShoaib@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image2,
        id: 3,
        name: 'Zaamran Baloch',
        email: 'Zaamran Baloch@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image3,
        id: 4,
        name: '  Hannah Mason ',
        email: ' HannahMason@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image4,
        id: 5,
        name: ' Dr.Sara Saeed Khurram',
        email: 'Dr.SaraSaeedKhurram@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image6,
        id: 7,
        name: 'Abida Nasreen',
        email: 'Abida Nasreen@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image7,
        id: 8,
        name: 'Sofia Hanif',
        email: 'Sofia Hanif@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    {
        img: image8,
        id: 9,
        name: 'Megan Tuano',
        email: 'MeganTuano@gmail.com',
        number: '+123456789',
        detail: "Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    },
    ]

    // Filter the data based on the id parameter
    const consultantData = data.filter(item => item.id === parseInt(id));

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 px-4 mt-56 mb-20">
                <div className="bg-gray-100 rounded-lg">
                    {consultantData.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-stretch pe-4">
                            <div className="w-full md:w-64 lg:w-96 p-4 relative ">
                                <div className="mb-4 relative">
                                    <img src={item.img} alt="Consultant" className="w-full rounded-lg" />
                                </div>
                                <div className='mt-4 md:mt-0 md:absolute md:top-0 md:left-full md:ml-4'>
                                    <h2 className="text-xl font-semibold mb-2 md:mb-4">Consultant Details</h2>
                                    <div className="mb-2">
                                        <p><span className="font-semibold">Name:</span> {item.name}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p><span className="font-semibold">Email:</span> {item.email}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p><span className="font-semibold">Phone:</span> {item.number}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 md:px-0 py-2 md:w-2/3 lg:w-3/4 xl:w-4/5 lg:mt-44  md:mt-44 sm:mt-44">
                                <p className="text-sm text-gray-500">{item.detail}</p>
                                <div className="mt-4 md:mt-0 flex justify-end">
                                    <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">Contact</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && <ContactFormModal onClose={toggleModal} />}
        </div>

    );
};

export default Consultant;
