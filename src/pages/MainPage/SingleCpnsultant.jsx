import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import image from '../../assets/images/consultant.jpg'
// ContactFormModal component
const ContactFormModal = ({ onClose }) => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        qualification: '',
        time: '',
        address: '',
        message: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to your API endpoint using fetch or axios
            const response = await fetch('https://example.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if the request was successful
            if (response.ok) {
                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    qualification: '',
                    time: '',
                    address: '',
                    message: '',
                });
                // Close modal
                onClose();
                // Optionally, display a success message or handle other actions
                console.log('Form submitted successfully!');
            } else {
                // Handle the error if the request was not successful
                console.error('Error submitting form:', response.statusText);
                // Optionally, display an error message or handle other actions
            }
        } catch (error) {
            // Handle any network errors or exceptions
            console.error('Error submitting form:', error.message);
            // Optionally, display an error message or handle other actions
        }
    };

    return (
        <div className="modal-overlay absolute top-30 bg-gray-300 rounded-md">
            <div className="modal flex flex-col w-[560px] h-[380px] ">
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
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
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
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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
                    <textarea
                        placeholder="Enter your Quries"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className='py-2 w-full me-4 ms-2 px-8 mb-5 rounded-xl outline-PrimaryColor'
                    ></textarea>
                    <div className="absolute bottom-2 right-10">
                        <button type="submit" className="submit-btn py-2 px-10 bg-PrimaryColor font-bold text-white rounded-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// SingleConsultant component
const SingleConsultant = () => {
    // State to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    // Event handler to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };


    const data = [{
        img:'',
        name:'Khansa Anjum',
        email:'example@example.com',
        number:'+123456789',
        detail:"Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    } ,
    {
        img:'',
        name:'Miss',
        email:'example@example.com',
        number:'+123456789',
        detail:"Navigating Career Paths: A career consultant is like a guide for your job journey. They help you understand what you're good at and what you want to do. Think of them as a coach who helps you reach your goals. They work with you to make plans and strategies to find the right job. A mindset coach is someone who helps you think in a positive way. They teach you how to be more productive and less stressed at work. They show you how to turn your worries into successes. In simple words, they're like a support system for your career, helping you overcome challenges and achieve your dreams."
    }
]

    return (
        <div className="flex flex-col justify-center gap-10 items-center" style={{ height: '100vh' }}>
            <div className="w-full ps-20 pe-20 pt-3">
                <div className="bg-gray-100 p-4 rounded-lg">
                 {
                    data.map((item ,index)=>{
                        return(
                            <>
                               <div className='flex justify-between'>
                        <div className="w-full md:w-64 lg:w-[300px] p-4 relative">
                            <div className="mb-4 relative">
                                <div>
                                    <img src={image} alt="Consultant" className="w-[700px] h-[300px] rounded-lg" />
                                </div>
                            </div>
                            <div className='mt-10 absolute top-0 left-[330px]'>
                                <h2 className="text-xl font-semibold mb-4">Consultant Details</h2>
                                <div className="mb-2">
                                    <p>Name:{item.name}</p>
                                </div>
                                <div className="mb-2">
                                    <p>Email:{item.email}</p>
                                </div>
                                <div className="mb-2">
                                    <p>Phone:{item.number}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className='text-md ps-4 pe-20 text-gray-500 ' >
                           {item.detail}
                           </p>
                    </div>
                            </>
                        )
                    })
                 }
                    <div className='flex justify-end items-end me-20'>
                        <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">Contact</button>
                    </div>
                </div>
            </div>
            {showModal && <ContactFormModal onClose={toggleModal} />}
        </div>
    );
};

export default SingleConsultant;
