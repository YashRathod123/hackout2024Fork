
import React from 'react';
import "../index.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';


function Cardi({data1}){
  const navigate = useNavigate();

  const handlefunction = () => {
    navigate('/course', { state: { data1 } });
  };
    return (<Box width="100%" height="100%">
        <Card maxW='sm' className="card">
  <CardBody>
    <Image

      src={data1.url}
      alt='space'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data1.coursename}</Heading>
      <Text>
        {data1.description}

      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={handlefunction}>

        More Details

      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </Box>);
}
 export default Cardi;

