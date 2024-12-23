// import React from 'react'

// const Tabs = ({ activeTab, tabs , setActiveTab }) => {
//     console.log(activeTab,"active tab aya gaya h tbas ka");
    
//     return (
//         <div>
//             <div className="flex space-x-4 overflow-x-auto border-b pb-2">
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab}
//                         className={`py-2 px-4 text-sm ${activeTab === tab
//                             ? "border-b-2 border-black text-black font-semibold"
//                             : "text-gray-500 hover:text-black"
//                             }`}
//                         onClick={() => setActiveTab(tab)}
//                     >
//                         {tab}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Tabs

import React, { useContext } from 'react'
import { Context } from '../../../Contex';

const Tabs = ({  tabs }) => {
    const {  activeTab ,setActiveTab} = useContext(Context);
    console.log(activeTab,"active tab aya gaya Tabs ssss");
    
    return (
        <div>
            <div className="flex space-x-4 overflow-x-auto border-b pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-4 text-sm ${activeTab === tab
                            ? "border-b-2 border-black text-black font-semibold"
                            : "text-gray-500 hover:text-black"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs;
