import axios from "axios";
import { createContext, useEffect, useState } from "react";

let Context = createContext();


function MyComponent({ children }) {

  let [Courses, SetCourse] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/AllCourse");
        console.log(res.data, 'hheheh'); // Log the fetched data
        SetCourse(res.data); // Update state
        console.log(Courses, "ccc");

      } catch (error) {
        console.error("Error fetching courses:", error); // Log any errors
      }
    };

    fetchCourses();
  }, [])


  return (
    <Context.Provider value={Courses}>
      {children}
    </Context.Provider>
  );
}

export { MyComponent, Context };