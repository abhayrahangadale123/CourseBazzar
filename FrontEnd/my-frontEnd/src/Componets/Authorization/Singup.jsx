import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",

        email: "",
        password: ""
    });


    // Handle input changes
    const handleChange = (e) => {
         

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:3000/api/signup", formData);
        console.log(res, "singnformmm dataaaa");

    };

    return (
        <div className="z-10 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 gap-28 "

        >
            {/* Left Image Section */}
            <div className="hidden md:flex  items-center justify-center">
                <img
                    src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
                    alt="Illustration"
                    className=""
                />
            </div>

            {/* Right Form Section */}


                <div className="  bg-white shadow-md rounded-lg p-8 w-[35%]"
                    onClick={(e) => e.stopPropagation()}>
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                        Become a Udemy <br /> instructor
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Discover a supportive community of online instructors. Get instant access to all course creation resources.
                    </p>

            <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4 ">
                        {/* Input Fields */}
                        <input
                            type="text"
                            placeholder="Full name "
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                             required
                            className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500  "
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                             required
                            className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                             required
                            className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        {/* Checkbox */}
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 w-8 h-4 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <p className="ml-2 text-gray-600">
                                I want to get the most out of my experience, by receiving emails with insider tips, motivation, and updates.
                            </p>
                        </div>

                        {/* Buttons */}
                        <button className="bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700">
                            Sign up
                        </button>
                    </div>

                    <p className="text-gray-600 text-sm text-center mt-4">
                        By signing up, you agree to our{' '}
                        <a href="#" className="text-purple-600 underline">
                            Terms of Use
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-purple-600 underline">
                            Privacy Policy
                        </a>.
                    </p>

                    <p className="text-gray-600 text-center mt-6 bg-[#F7F9FA] p-4 rounded-lg">
                        Already have an account?{' '}
                        <Link to="/Login">
                            <p className="text-purple-600 font-bold">
                                Log in
                            </p>
                        </Link>
                    </p>
            </form>
                </div>
        </div>
    );
};

export default Signup;
