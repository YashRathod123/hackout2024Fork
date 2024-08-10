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


const ENDPOINT = "http://localhost:3001/api";

export function Destination({ data }) {
  const [selectedPlanet, setSelectedPlanet] = useState(data[0]);
  const [image, setImage] = useState(MoonImage);
  const [isActive, setIsActive] = useState(0);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    async function loadChat() {
      const response = await fetch(`${ENDPOINT}/course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setCourseList(data);
      } else {
        console.log(data);
      }
    }

    loadChat();
  }, []);

  console.log(courseList)
  return (
    <div>
      <Grid className="exp" templateColumns="repeat(3, 1fr)" gap={3}>
        {courseList &&
            courseList.map((c,i) => (
            
              <GridItem id={i}> 
                <Cardi data1 = {c} />
              </GridItem>
            
          ))}
      </Grid>
    </div>
  );
}
