import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {

    let [LoginData, SetLogoinData] = useState({
        email:"",
        password:""
      
    })

    const navigate = useNavigate();

    let heandlogindata = (e) => {
        e.preventDefault();

        let { name, value } = e.target;
        SetLogoinData({ ...LoginData, [name]: value })
        console.log("n", name, "v", value);
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:3000/api/login", LoginData);
        console.log(res,"rwss");
        
        if(res.data.token){
       
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('username',res.data.data.username);
            localStorage.setItem('email',res.data.data.email);
            localStorage.setItem('role',res.data.data.role);
          let role =   localStorage.getItem('role');
          alert("login succesfully");
        //   window.location.reload();
            if(role=="user"){

                navigate("/"); // home
            }
            else if(role=="admin"){

                navigate("/admin/dashboard");
            }
            
        }
        console.log(res);
         
       

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
                        Log in to continue your   <br />  learning journey
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Discover a supportive community of online instructors. Get instant access to all course creation resources.
                    </p>

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
                        <input
                            type="password"
                            placeholder="pass"
                            name="password"
                            value={LoginData.password}
                            
                            onChange={heandlogindata}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {/* Buttons */}
                        <button className="bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-700">
                            Continue with email
                        </button>
                    </div>

                    <p className='mt-6 text-center'>----- Other log in options --------</p>
                    <div className="flex justify-center mt-5 gap-5 ">
                        <span className='border  p-2'>

                            <FcGoogle />
                        </span>
                        <span className='border p-2'>

                            <FaFacebook />
                        </span>
                        <span className='border p-2'>

                            <FaApple />
                        </span>
                        <img src="" alt="" />
                    </div>
                     

                     <p className='text-center mt-10 p-4 rounded-lg'>
                        Don't have an account?
                        <Link to="/singup">
                            <span className='text-purple-600 font-bold underline'>Sign up</span>
                        </Link>
                    </p>
                    <p className="text-center p-4 rounded-lg">
                        <Link to="/Forget_pass">
                            <span className='text-purple-600 font-bold underline'>forget password</span>
                        </Link>
                    </p>
                    

                    <p className='text-center text-purple-600 font-bold underline mt-5'>Log in with your organization</p>
            </form>
                </div>
        </div>
    );

}

export default Login