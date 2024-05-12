import React, { useState } from 'react';
import login from '../../assets/images/login.png';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful login, maybe store token in localStorage and redirect to dashboard
                const data = await response.json();
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                // Handle incorrect login credentials or other errors
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            // Handle network errors
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
                                placeholder="********"
                            />
                        </div>

                        <p className='text-sm text-right mb-6' onClick={() => navigate('/admin/forget')}>Forget Password</p>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
