import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
    const [CouserData, setCourseData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        level: "",
        language: "",
        status: "",
        videos: "",
        resources: "",
        reason: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...CouserData, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const token = localStorage.getItem("token");
    //     let res = await axios.post("http://localhost:3000/api/course", CouserData,{
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     });
    //     console.log(res, "course created dataaaa");
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('your_token_key');
        try {
            let res = await axios.post("http://localhost:3000/api/course", CouserData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(res, "course createdddd");
            // Success notification and reset form logic here
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
        }
    };
    

    return (
        <div className="z-10 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 gap-28 ">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4 ">
                    {/* Input Fields */}
                    <input
                        type="text"
                        placeholder="title"
                        name="title"
                        value={CouserData.title}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="text"
                        placeholder="descriptions"
                        name="description"
                        value={CouserData.description}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="text"
                        placeholder="category"
                        name="category"
                        value={CouserData.category}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="number"
                        placeholder="price"
                        name="price"
                        value={CouserData.price}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Buttons */}
                    <button className="bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700">
                        add course
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateCourse;
