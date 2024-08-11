import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [user, setUser] = useState();




  return (
    <CourseContext.Provider
      value={{
      selectedCourses,
      setSelectedCourses,
      allCourses,
      setAllCourses
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseState = () => {
  return useContext(CourseContext);
};

export default CourseProvider;
