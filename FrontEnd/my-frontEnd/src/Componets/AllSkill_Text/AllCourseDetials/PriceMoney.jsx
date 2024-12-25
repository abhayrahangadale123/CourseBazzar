import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../../../Contex';
import AddTocard from '../AddTocard';


const PriceMoney = () => {

    const { Courses, cartData, setCartData } = useContext(Context);
    const [inCart, SetCart] = useState(false)


    let { id } = useParams();
    console.log(id, "idd");

    let SingleData = Courses.find((data, index) => {
        return index == id
    })
    console.log(SingleData, "ssssingleeee");

    function addCart() {
        setCartData((prevCarts) => [...prevCarts, SingleData]);  // set duplicate na jaye
        console.log(cartData, "card jiiii");

    }
    console.log(addCart, "addddddddddddd");


    const toggleCart = () => {
        if (!inCart) {
            addCart(); // Add to cart function call jab item cart mein nahi ho
        } else {
            console.log("Item removed from cart!");
            // Remove logic yahaan add karen
        }
        SetCart((prev) => !prev); // State toggle karna
    };

    return (

        <div className="   flex items-center justify-center z-[-10px] mt-20">
            <div className=" bg-white shadow-md rounded-lg max-w-[400px] z-  p-6">
                {/* Course Header */}
                <div className="flex flex-col items-center w-full">
                    <video
                        id="videoPlayer"
                        src={SingleData?.videos[0]}
                        className="w-full h-64 rounded-lg"
                        controls
                    />
                </div>



                {/* Subscription Section */}
                <div className="mt-6">
                    <p className="text-gray-700">
                        <strong>Subscribe to Udemy’s top courses {SingleData?.title}</strong>

                    </p>
                    <p className="text-sm text-gray-600">
                        Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
                        <a href="#" className="text-purple-600 underline"> Learn more</a>
                    </p>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4 hover:bg-purple-700 ">
                        Start subscription
                    </button>
                    {/* <p className="text-center text-sm text-gray-600 mt-2">Starting at ₹850 per month<br />Cancel anytime</p> */}

                    <div className="flex items-center justify-center mt-4">
                        <div className="w-full border-b border-gray-300"></div>
                        <span className="text-gray-500 px-3">or</span>
                        <div className="w-full border-b border-gray-300"></div>
                    </div>

                    <div className="text-center">
                        <p className="text-2xl font-semibold text-black">₹{SingleData?.price}</p>

                        <button
                            onClick={toggleCart}
                            className={`w-full border py-3 rounded-lg mt-2 ${inCart
                                    ? "border-red-600 text-red-600 hover:bg-red-50"
                                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                                }`}
                        >
                            {inCart ? "Remove from cart" : "Add to cart"}
                        </button>

                    </div>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        30-Day Money-Back Guarantee
                    </p>

                </div>

            </div>


        </div>
    )
}

export default PriceMoney