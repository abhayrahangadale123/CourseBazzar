import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios";
const Forget_Pass = () => {

    let [LoginData, SetLogoinData] = useState({
        email:"",
        
      
    })

    let heandlogindata = (e) => {
        e.preventDefault();

        let { name, value } = e.target;
        SetLogoinData({ ...LoginData, [name]: value })
        console.log("n", name, "v", value);
        
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:3000/api/forgot-password", LoginData);
        // let res = await axios.post("http://localhost:3000/api/forgot-password", LoginData);
        console.log(res);
        SetLogoinData('')


    }


    return (
        <div className=" z-10 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 gap-28"
        >
            {/* Left Image Section */}
            <div className="hidden md:flex  items-center justify-center"
            >
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
                        Forget  password
                    </h1>
                   

            <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4 ">

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={LoginData.email}
                            
                            onChange={heandlogindata}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                       
                        {/* Buttons */}
                        <button className="bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-700">
                             Update
                        </button>
                    </div>

                     

                    <p className='text-center mt-10 p-4 rounded-lg'>
                        Don't have an account?
                        <Link to="/singup">
                            <span className='text-purple-600 font-bold underline'>Sign up</span>
                        </Link>
                    </p>
 

                    
            </form>
                </div>
        </div>
    );

}

export default  Forget_Pass