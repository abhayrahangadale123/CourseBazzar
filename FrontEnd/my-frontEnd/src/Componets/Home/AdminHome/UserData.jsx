import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import AdminLayout from './AdminLayout';

const FindAlluser = () => {
    let [data, setData] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('http://localhost:3000/api/user/profile', {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                // console.log(res, "reeee");
                // console.log(res.data, "reeee data");
                // console.log(res.data.users, "reeee userr");

                setData(res.data.users); // Use `res.data.users` as per your API response.
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [token]); // Add token as a dependency to ensure it's updated correctly.

    console.log(data, "djutdihdhiiiiiiiiiiiiiiiiiiiiiiiii");



    //Delete user 
  
    

     



    return (
      <>
      <div className="flex">
            {/* Fixed Admin Layout */}
            <div className="sticky top-0 h-screen bg-gray-100">
                <AdminLayout />
            </div>

            {/* Scrollable Course Section */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
            {data.map((val, index) => (
              <div
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-white rounded shadow-md border border-gray-200"
              >
                    <div className="flex items-center gap-4">
                        <div className="text-4xl text-blue-500">
                            <FaRegCircleUser />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">{val.username}</h1>
                            <p className="text-sm text-gray-600">{val.email}</p>
                        </div>
                    </div>
                    <button  
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition duration-200"
                        // Add a delete handler here
                        >
                        Delete User
                    </button>
                </div>
            ))}
        </div>
        </div>
      </>
    );
};

export default FindAlluser;
