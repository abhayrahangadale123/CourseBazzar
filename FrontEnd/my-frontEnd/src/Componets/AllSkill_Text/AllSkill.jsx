import React, { useContext, useState } from 'react'
import Tabs from "./Tabs";
 
import { Context } from '../../../Contex';
const AllSkill = () => {
   
const {Courses,activeTab,setActiveTab} = useContext(Context)
console.log(Courses,"ctctcctctctctctcttt");

// const [activeTab, setActiveTab] = useState("All Course");

 

let filterCard = new Set(Courses.map((course) => course.category))  // duplicate na ho web web bar bar aya rha h esliye set functions 
console.log(filterCard ,"kesss");
 

 

 
    const tabs = ["All Course", ...filterCard ];  // tab ek array hai jise hmm itreet kr sakte hai go to tab file
    
 console.log(tabs,"tbtbtbtbtbtbtb");
 



    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-2">All the skills you need in one place</h1>
                <p className="text-gray-600 mb-4">
                    From critical skills to technical topics, Udemy supports your professional development.
                </p>

                {/* Tabs */}
                <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />


               

            </div>
        </div>
    );
}

export default AllSkill