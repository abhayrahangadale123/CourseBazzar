import React, { useState } from 'react'

const UserMenu = () => {
    let [data, Setdata] = useState(false)
   
    // Logout for using
    let  LogOut= ()=>{
        localStorage.removeItem("token");
        Setdata(false);
        window.location.reload();
    }
    
    let username = localStorage.getItem("username")
    let  email = localStorage.getItem("email")
  
    // data show and not show
    let toggle = () => {
        Setdata(!data)
    }

    return (
        <div className="relative">
            <div className="flex gap-5">
                {/* <div onClick={toggle} className="bg-red-500 rounded-md cursor-pointer"> */}

                <img onClick={toggle} 
                            src={`https://dummyimage.com/100x100/000/fff&text=${encodeURIComponent(
                                username.charAt(0)
                            )}`}
                            alt="UserFirstName"
                            className="w-10 h-10 rounded cursor-pointer"
                        />
                {/* </div> */}
                <div className="">

                <h2 className="text-red-500 font-bold">{username}</h2>
                <p className="text-blue-500 font-bold">{email}</p>
                </div>
                {data &&

                    <div className="absolute left-0 mt-12 w-72 bg-white border rounded-lg shadow-lg z-50">
                        <ul className="flex flex-col divide-y divide-gray-200">
                            <li className="px-4 py-2 bg-black text-white rounded-md hover:bg-[#302f2f] cursor-pointer">DesBord</li>
                            <li className="px-4 py-2 flex justify-between hover:bg-gray-100 cursor-pointer">
                                <span>My cart</span>
                                <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">0</span>
                            </li>
                            
                       
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Subscriptions</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Purchase history</li>
                            <li className="px-4 py-2 flex justify-between hover:bg-gray-100">
                                <span>Language</span>
                                <span className="text-gray-500">English 🌐</span>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit profile</li>
                            
                            <li onClick={LogOut}  className="px-4 py-2  rounded-md bg-red-500 hover:bg-red-400 cursor-pointer">
                                Log Out</li>
                            </ul>
                    </div>
                }


            </div>
        </div>
    )
}

export default UserMenu