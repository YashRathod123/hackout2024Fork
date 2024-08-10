import styles from '../Styles/Destination.module.scss';
import React from 'react';
import "../index.scss";
import Cardi from '../Components/card';
import MoonImage from '../Assets/destination/image-moon.webp';
import MarsImage from '../Assets/destination/image-mars.webp';
import EuropaImage from '../Assets/destination/image-europa.webp';
import TitanImage from '../Assets/destination/image-titan.webp';
import { useState } from 'react';
import {Grid,GridItem} from '@chakra-ui/react';

export function Destination({ data }) {
    const [selectedPlanet, setSelectedPlanet] = useState(data[0]);
    const [image, setImage] = useState(MoonImage);
    const [isActive, setIsActive] = useState(0);
    
    return (
       
    
       <Grid templateColumns='repeat(3, 1fr)' gap={3}>
  <GridItem  ><Cardi/></GridItem>
  <GridItem  ><Cardi/></GridItem>
  <GridItem  ><Cardi/></GridItem>
  <GridItem  ><Cardi/></GridItem>
  <GridItem  ><Cardi/></GridItem>
  <GridItem  ><Cardi/></GridItem>
</Grid>
    )
}