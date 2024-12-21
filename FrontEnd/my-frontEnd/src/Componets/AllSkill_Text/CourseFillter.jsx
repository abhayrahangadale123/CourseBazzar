 


import React, { useContext } from 'react';
import { Context } from '../../../Contex';

const CourseFilter = () => {
  const {Courses,activeTab} = useContext(Context);
  console.log(activeTab,"activetabs aya gayaaaaaaaaassaaaaaaaaaaaaaaaaaa hai j");
  
  const filteredCourses = activeTab === "All Course" ? Courses : Courses.filter(course => course.category === activeTab);

  return filteredCourses;
};

export default CourseFilter;

