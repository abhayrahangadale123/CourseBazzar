import React, { useContext } from 'react';
import { Context } from '../../../Contex';

const AddTocard = () => {
    const { cartData } = useContext(Context); // Context se cartData lena
    console.log(cartData,"JI MEEE");
    

    return (
        <>
       
            <h1 className='text-red-500 text-center font-bold text-2xl py-6'>Your Add Course</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {
                cartData.map((val, index) => (
                    

                  
                    <div key={index} className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-30">
                         <video
                            src={val?.videos[0]}
                            controls
                            className="w-full h-40 object-cover rounded-md border border-gray-300 mb-4"
                        />
                        <h1 className="text-xl font-bold text-gray-800 mb-2">{val?.title}</h1>
                        <p className="text-gray-600 mb-2">{val?.description}</p>
                        <p className="text-sm text-gray-500 mb-4">{val?.category}</p>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Price: <span className="text-green-600">${val?.price}</span>
                        </h2>
                        
                        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                            Buy Now
                        </button>
                    </div>
                    
                ))
            }
        </div>
        </>
    );
};

export default AddTocard;
