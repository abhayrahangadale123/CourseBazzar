
import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
 
import { Link } from 'react-router-dom';
import { Context } from '../../../Contex';



const  NavBar = () => {
    const { cartData } = useContext(Context); // only count ke liye add krne me kitne course hai 
    console.log(cartData.length,"lengthhhhh");
    
    return (
        <>
         
        <div className='max-w-[1400px] mx-auto'>
            <div className='flex items-center gap-5  h-[80px]'>

                {/* <div className='w-[91px] h-[34px]'> */}
                <div className='w-[120px] h-[125px] '>
                    <Link to="/">
                   
                    <img src="https://logo-variant.algo.design.vpsvc.com/675eb771001d5c6c82a7195d?sign=42468dacf306696d99aafe2d82e1ea6070540b881166b04a901cb5069e1a760e&backgroundMode=TRANSPARENT&type=PNG&width=400&height=400" alt="" />
                    </Link>
                </div>


                <div className='cursor-pointer text-[#646363]'>
                    <p>Category</p>
                </div>

                <div className='flex items-center gap-2 border border-zinc-400 p-2 w-[400px]  rounded-full px-3'>
                    <IoSearch className='text-2xl text-zinc-600' />
                    <input className='border-0 outline-none w-[100%]' type="text" placeholder='Search for anything...' />
                </div>

                <nav className='flex gap-5 items-center ml-10'>
                    <li className='list-none text-zinc-700 cursor-pointer'>Plane & Pricing</li>
                    <li className='list-none text-zinc-700 cursor-pointer'>Udamy Business</li>
                    <li className='list-none text-zinc-700 cursor-pointer'>Teach on Udamy</li>
                    <Link to="Add-card">
                    <span className='text-purple-600 absolute mt-[-15px] ml-10'>{cartData.length}</span>
                    <li className='list-none text-zinc-700 text-2xl cursor-pointer ml-5 relative'><MdOutlineShoppingCart /></li>
                    </Link>
                     
                   <Link to="/Login">
                    <button className='border border-zinc-600 rounded py-[8px] w-[80px]'>Log in</button>
                   </Link>
                    <Link to="/singup">
                    <button  className='bg-[#2d2f31]  w-[90px] rounded py-[8px] text-white '>
                        Sign up
                        </button>
                    </Link>
                     
                    <p className='bg-[#2d2f31]  rounded p-[11px] text-white cursor-pointer'><TbWorld className='text-xl font-semibold'/></p>
                </nav>
            </div>
        </div>
 
            <hr className='w-full h-10'/>
        </>
    )
}

export default  NavBar