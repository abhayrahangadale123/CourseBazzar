// import axios from 'axios';
// import React, { useContext } from 'react'
// import { Context } from '../../../Contex';
// import CourseFilter from './CourseFillter';
// import { useNavigate } from 'react-router-dom';

// const Course = ({addCartFn}) => {
   
  
//     //  console.log(addCartFn,"addddd");
     
//     const {activeTab} = useContext(Context)
//     // const {activeTab} = filteredCourses(Context)
//     // // console.log(Courses);
  
//     const Courses  = CourseFilter({ activeTab });
//     console.log(Courses,"cycycycycycyycycyc");
    
//     // if (!Courses || Courses.length === 0) {
//     //   return <div>No courses available</div>;
//     // }
    

    
//     return (
//       <div>
//                  <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto ">
//             <div className="flex space-x-4 b">
//                 {Courses.map((course, index) => (
//                     <div
//                         key={index}
//                         className="min-w-[300px] w-[300px] h-[330px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
//                     >
//                         <video
//                             src={course.videos} controls
//                             alt="Course Thumbnail"
//                             className="w-full h-44 object-cover"
//                             onClick={() => addCartFn(course.id)} 
//                         />

//                         <div className="p-4">
//                             <h3 className="text-sm font-semibold mb-2 text-gray-800">
//                                 {course.title}
//                             </h3>

//                             <p className="text-xs text-gray-600 mb-2 truncate">
//                                 {course.description}
//                             </p>

//                             <div className="flex items-center mb-2">
//                                 <span className="text-yellow-400 text-lg">&#9733;</span>
//                                 <span className="ml-1 text-gray-800 font-medium text-sm">
//                                     {course.level}
//                                 </span>
//                                 <span className="ml-2 text-xs text-gray-600">
//                                     ({course.language})
//                                 </span>
//                             </div>

//                             <div className="flex items-center mb-2">
//                                 <span className="text-lg font-semibold text-gray-800">
//                                     ₹{course.price}
//                                 </span>
//                                 <span className="ml-2 text-sm line-through text-gray-500">
//                                     ₹{course.price}
//                                 </span>
//                             </div>

//                             {course.badge && (
//                                 <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">
//                                     {course.status}
//                                 </span>
//                             )}
//                         </div>
//                     </div>
                    
//                 ))}
//             </div>
//         </div>
          
//       </div>
//   );
 
// }

// export default Course

 
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Course = () => {
  const { Courses, activeTab } = useContext(Context); // Assuming Courses comes from Context
 console.log(Courses,"ccccccccccccccccccccyyyyy");
 
  const navigate = useNavigate();

    
  const AppproveData = Courses.filter(course => course.status=== "Approved");
  console.log(AppproveData, "Approved Courses Data");
  
     
      const filtered = activeTab == "All Course"  ?  AppproveData  :  AppproveData.filter(course => course.category === activeTab);
     
   console.log(filtered,"ffffffffffffffffffffffffffffffffffffffffff");
   
   
  const handleViewDetails = (id) => {
    console.log(id,"iddddffff");
    
    navigate(`/course-detail/${id}`);
  };

  if (! filtered || filtered.length === 0) {
    return <p className="text-center mt-8 text-gray-600">No courses available for the selected category.</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto">
        <div className="flex space-x-4">
          {filtered.map((course, index) => (
            <div
              key={index}
              className="min-w-[300px] w-[300px] h-[330px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
              onClick={() => handleViewDetails(index)}
            >
              <video
                src={course.videos}
                controls
                className="w-full h-44 object-cover"
                onClick={() => handleViewDetails(index)}
              />

              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2 text-gray-800">
                  {course.title}
                </h3>

                <p className="text-xs text-gray-600 mb-2 truncate">
                  {course.description}
                </p>

                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 text-lg">&#9733;</span>
                  <span className="ml-1 text-gray-800 font-medium text-sm">
                    {course.level}
                  </span>
                  <span className="ml-2 text-xs text-gray-600">
                    ({course.language})
                  </span>
                </div>

                <div className="flex items-center mb-2">
                  <span className="text-lg font-semibold text-gray-800">
                    ₹{course.price}
                  </span>
                  {course.discountedPrice && (
                    <span className="ml-2 text-sm line-through text-gray-500">
                      ₹{course.discountedPrice}
                    </span>
                  )}
                </div>

                {course.badge && (
                  <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">
                    {course.badge}
                  </span>
                )}

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
