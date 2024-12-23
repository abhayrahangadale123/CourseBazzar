import React, { useContext, useState } from 'react';
import { Context } from '../../../Contex';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
 

const stripePromise = loadStripe("pk_test_51QYQxiDHRDwjmTwRtJWsSSlRH5YVfyBFHKwgCpr5eaEOXx3P9zxwsHDlVjqzXiTNUWfDi5Yor2ojg2Nq53k38ZHB00yrdmKifV");

const AddTocard = () => {
    const { cartData } = useContext(Context); // Context se cartData lena
    const [loading, setLoading] = useState(false);
    console.log(cartData, "JI MEEE");

    // let cartDatas = new.set(cartData)
    if (!cartData || cartData.length === 0) {
        return (
            <>
            <div className=" min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
                <div className=" top-0">
                    <Link to="/" className="text-xl font-bold text-purple-600 ml-5 underline mt-4">
                        Go Back to Courses
                    </Link>
                </div>
                <h1 className="text-2xl ml-16 font-bold text-red-500">Your Cart is Empty</h1>
            </div>
            </>
        );
    }
    const TotalPrice = cartData.reduce((acc, item) => acc + item.price, 0);

    const handlePayment = async () => {
        if ( cartData.length === 0) {
          alert("Your cart is empty. Add items to proceed.");
          return;
        }
    
        setLoading(true);
    



    try {
        const stripe = await stripePromise;
  
        // Make a request to the backend to create a payment session
        const response = await fetch("http://localhost:3000/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartData,
            TotalPrice,
          }),
        });
       
            // let  response = await axios.post("http://localhost:3000/api/payment", cartData);
            
            // console.log(response,"responsesss");
             
           
    
        
    
  
        if (!response.ok) throw new Error("Failed to create payment session");
  
        const session = await response.json();
  
        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
  
        if (result.error) {
          alert(result.error.message);
        }
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Payment failed. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  


   
    return (
        
        <>

           
            <div className="flex flex-col gap-4 justify-center">
           <h1 className='text-red-500 text-center font-bold text-2xl py-6'>Your Add Course</h1>
           <h1 className="text-2xl font-bold mb-4 text-yellow-600 ml-[400px]">Total Course : <span className='text-blue-500'> {cartData.length}</span></h1>
             
                {
                    cartData.map((val, index) => (



                        // <div key={index} className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-30">
                        <div key={index} className="p-6 w-[700px] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-30 flex justify-between m-auto">
                            {/* <video
                                src={val?.videos[0]}
                                controls
                                className="w-full h-40 object-cover rounded-md border border-gray-300 mb-4"
                            /> */}
                             <img
                            src={`https://dummyimage.com/100x100/000/fff&text=${encodeURIComponent(
                                val.title.charAt(0)
                            )}`}
                            alt={val.title}
                            className="w-20 h-20 rounded"
                        />
                            <div className="mr-48 ">

                            <h1 className="text-xl font-bold text-gray-800 mb-2">{val?.title}</h1>
                            <p className="text-gray-600 mb-2">{val?.description}</p>
                            <p className="text-sm text-gray-500 mb-4">{val?.category}</p>
                            </div>
                            <div className="">

                            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                Price: <span className="text-green-600">₹{val?.price}</span>
                            </h2>
                            </div>

                            {/* <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                                Buy Now
                            </button> */}
                        </div>

                    ))
                } 
                <hr />
                <div className="flex ">

                            <p className="text-2xl font-bold mb-4 text-black ml-[400px]">TotalPrice </p>
                            <p className="text-2xl font-bold mb-4 text-green-600 ml-[520px] ">₹ {TotalPrice}</p>
                </div>
                <hr />
                <button  onClick={handlePayment} className="bg-purple-600 w-96 m-auto text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                 >
                        Buy All
                    </button>
                    <br />
            </div>
        </>
    );
};

export default AddTocard;
