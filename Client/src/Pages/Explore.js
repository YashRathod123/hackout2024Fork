
import styles from "../Styles/Destination.module.scss";
import React, { useEffect } from "react";
import "../index.scss";
import Cardi from "../Components/card";
import MoonImage from "../Assets/destination/image-moon.webp";
import MarsImage from "../Assets/destination/image-mars.webp";
import EuropaImage from "../Assets/destination/image-europa.webp";
import TitanImage from "../Assets/destination/image-titan.webp";
import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { CourseState } from "../context/courseProvider";


const ENDPOINT = "http://localhost:3001/api";

export function Destination({ data }) {
  const [selectedPlanet, setSelectedPlanet] = useState(data[0]);
  const [image, setImage] = useState(MoonImage);
  const [isActive, setIsActive] = useState(0);
  const [courseList, setCourseList] = useState([]);


  const {allCourses} = CourseState();

  useEffect(()=>{
    setCourseList(allCourses);
  },[allCourses]);


  // console.log(courseList)
  return (
    <div className="testing">
      {/* <Grid className="exp" templateColumns="repeat(3, 1fr)" gap={3}> */}
        {courseList &&
            courseList.map((c,i) => (
            <div >
              <GridItem className="testing2"id={i}> 
                <Cardi  data1 = {c} />
              </GridItem>

              </div>
            
          ))}
      {/* </Grid> */}
    </div>
  );
}