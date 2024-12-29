import axios from "axios";
import { createContext, useEffect, useState } from "react";

let Context = createContext();


function MyComponent({ children }) {

  let [Courses, SetCourse] = useState([]);
  const [activeTab, setActiveTab] = useState("All Course");
  const [cartData, setCartData] = useState([])
   
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
    <Context.Provider value={{Courses,activeTab,setActiveTab,cartData, setCartData}}>
      {children}
    </Context.Provider>
  );
}

export { MyComponent, Context };