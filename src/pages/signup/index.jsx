import React, { useState } from 'react';
import login from '../../assets/images/login.png';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        lastname: '',
        education: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/admin/login');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle network error
            console.error('Error:', error.message);
        }
    };

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
                    <form className="bg-white" onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="lastname"
                            >
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="education"
                            >
                                Education
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="education"
                                type="text"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                placeholder="Education"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
