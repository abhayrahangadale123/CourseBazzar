import axios from 'axios';
import React, { useContext } from 'react'
import { Context } from '../../../Contex';

const Course = () => {
     
    const Courses = useContext(Context)
    console.log(Courses);
    
    // useEffect( ()=>{
    //   const fetchCourses = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:3000/api/AllCourse");
    //         console.log(res.data,'hheheh'); // Log the fetched data
    //         SetCourse(res.data); // Update state
    //         console.log(Courses,"ccc");
            
    //     } catch (error) {
    //         console.error("Error fetching courses:", error); // Log any errors
    //     }
    // };

    // fetchCourses(); 
    // },[])
    return (
      <div>
                 <div className="overflow-x-auto whitespace-nowrap p-4 bg-gray-100 max-w-[1400px] mx-auto ">
            <div className="flex space-x-4 b">
                {Courses.map((course, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] w-[300px] h-[330px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={course.image}
                            alt="Course Thumbnail"
                            className="w-full h-44 object-cover"
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
                                <span className="ml-2 text-sm line-through text-gray-500">
                                    ₹{course.price}
                                </span>
                            </div>

                            {course.badge && (
                                <span className="text-xs font-semibold text-white bg-yellow-500 px-2 py-1 rounded">
                                    {course.status}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
          
      </div>
  );
 
}

export default Course