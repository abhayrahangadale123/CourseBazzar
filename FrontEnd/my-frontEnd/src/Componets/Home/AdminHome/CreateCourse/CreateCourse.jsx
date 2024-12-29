import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import AdminLayout from '../AdminLayout';
 

const CreateCourse = () => {

     
    const navigate = useNavigate();
    const [CouserData, setCourseData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        level: "",
        language: "",
        // status: "",
        videos: "",
        resources: "",
        reason: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...CouserData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        let res = await axios.post("http://localhost:3000/api/course", CouserData,{
            headers: {
               
                Authorization: `${token}`
            }
        });
        setCourseData({
            title: "",
            description: "",
            category: "",
            price: "",
            level: "",
            language: "",
            // status: "",
            videos: "",
            resources: "",
            reason: ""
        })
        navigate("/MangeCourse");
        console.log(res, "course created dataaaa");
    };
     
    
    

    return (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="sticky">

          <AdminLayout />
          </div>
    
          {/* Main Content */}
          <div className="flex-1 flex  items-center justify-center bg-gray-50 mt- px-6 max-h-screen overflow-y-auto">
             
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-72">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-purple-600">Create a New Course</h1>
                <p className="text-gray-600 mt-2">
                  Fill in the details below to add a new course to your platform.
                </p>
              </div>
    
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title and Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                  <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Course Title"
                    name="title"
                    required
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    onChange={handleChange}
                    placeholder="Course Description"
                    name="description"
                    required
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="4"
                  ></textarea>
                </div>
    
                {/* Category and Language */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                       onChange={handleChange}
                      type="text"
                      placeholder="Category"
                      name="category"
                      required
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                    <input
                       onChange={handleChange}
                      type="text"
                      placeholder="Language"
                      name="language"
                      required
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
    
                {/* Price and Level */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                       onChange={handleChange}
                      type="number"
                      placeholder="Price"
                      name="price"
                      required
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                    <input
                       onChange={handleChange}
                      type="text"
                      placeholder="Level (e.g., Beginner, Advanced)"
                      name="level"
                      required
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
    
                {/* Media and Resources */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                  <input
                     onChange={handleChange}
                    type="text"
                    placeholder="Video URL"
                    name="videos"
                    required
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                     onChange={handleChange}
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    required
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resources</label>
                  <input
                     onChange={handleChange}
                    type="text"
                    placeholder="Additional Resources (optional)"
                    name="resources"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
    
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    Add Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default CreateCourse;
