import React, { useContext, useState } from 'react';
import AdminLayout from './AdminLayout';
import { Context } from '../../../../Contex';
import axios from 'axios';

const MangeCourse = () => {
    const token = localStorage.getItem("token");
    const [statuses, setStatuses] = useState({});
    const { Courses } = useContext(Context);

    const handleAction = async (action, _id) => {
        console.log(action, "actionsss");
        
        // Only update the specific course's status
        setStatuses({ ...statuses, [_id]: action });

        try {
            const res = await axios.post(`http://localhost:3000/api/${action}`, { _id },
                {
                    headers: { Authorization: `${token}` }
                }
            );
            console.log(res.data);
        } catch (error) {
            console.error(`Error performing ${action}:`, error);
        }
    };

    return (
        <div className="flex">
            {/* Fixed Admin Layout */}
            <div className="sticky top-0 h-screen bg-gray-100">
                <AdminLayout />
            </div>

            {/* Scrollable Course Section */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
                {[...Courses].reverse().map((course, index) => (
                    <div
                        key={index}
                        className="w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden mb-6"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Video Section */}
                            <div className="md:w-1/3">
                                <video
                                    src={course.videos}
                                    controls
                                    className="w-full h-full object-cover aspect-w-16 aspect-h-9"
                                />
                            </div>

                            {/* Course Details Section */}
                            <div className="p-4 flex flex-col md:w-2/3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {course.title}
                                    </h3>
                                    <h2>Status: {statuses[course._id] || "Pending"}</h2>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 truncate">
                                    {course.description}
                                </p>
                                <div className="flex items-center text-sm text-gray-800 space-x-2 mb-4">
                                    <span className="text-yellow-400 text-lg">&#9733;</span>
                                    <span>{course.level}</span>
                                    <span className="text-gray-600">({course.language})</span>
                                </div>
                                <div className="flex items-center text-gray-800 mb-4">
                                    <span className="text-lg font-semibold">₹{course.price}</span>
                                    {course.discountedPrice && (
                                        <span className="ml-2 text-sm line-through text-gray-500">
                                            ₹{course.discountedPrice}
                                        </span>
                                    )}
                                </div>
                                {course.badge && (
                                    <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded mb-4">
                                        {course.badge}
                                    </span>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => handleAction('approve', course._id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleAction('update', course._id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleAction('reject', course._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => handleAction('Delete', course._id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MangeCourse;
