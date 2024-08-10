import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.scss';
import { Box, Flex, Heading, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
const ENDPOINT = "http://localhost:3001/api";
function Course() {
  const location = useLocation();
  const [course,setCourse]=useState([]);
  const { data1 } = location.state || {}; // Access the data1 passed through navigation
  useEffect(() => {
    async function loaddata() {
      if (!data1 || !data1.courseid) {
        console.log('No course id provided');
        return;
      }

      try {
        const response = await fetch(`${ENDPOINT}/grabCourse`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ courseid: data1.courseid }), // Correctly include courseid in the body
        });

        const data = await response.json();
        // console.log(data);
        if (response.ok) {
          setCourse(data);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    }

    loaddata();
  }, [data1]);
  console.log(course);
  return (
    <Box p='4'>
      {data1 ? (
        <Box>
          <Heading size='lg' color='white' fontSize='50px'>{course.coursename}</Heading>
          <Image
      src={course.url}
      alt='space'
      borderRadius="50% 0% 0% 50%" 
        style={{
          float: 'right',
          margin: '0 0 15px 15px',
          width: '800px',
          height: '700px', 
          objectFit: 'cover' 
        }}
    />
    <br />
          <Text mt='5' fontSize='25px' style={{fontWeight:"bold"}}>Description :</Text>
          <Text mt='3' fontSize='20px'>{course.description}</Text>
          <br />
          <Text mt='5' fontSize='25px' style={{fontWeight:"bold"}}>Required Education :</Text>
          <Text mt='3' fontSize='20px'>{course.required_education}</Text>
          <br />
          <Text mt='5' fontSize='25px' style={{fontWeight:"bold"}}>Average Salary :</Text>
          <Text mt='3' fontSize='20px'>${course.average_salary_usd}</Text>
          <br />
          <Text mt='5' fontSize='25px' style={{fontWeight:"bold"}}>Books :</Text>
          <Box as="ul" style={{ paddingLeft: 0 }}>
            {course.books && course.books.map((book, i) => (
              <Flex as="li" key={i} alignItems="center" mb='2'>
                <Box
                  as="span"
                  display="inline-block"
                  width="8px" 
                  height="8px"
                  borderRadius="50%"
                  backgroundColor='GrayText'
                  mr='2' 
                />
                <Text fontSize='20px'>{book.title} :</Text>
                <Text fontSize='20px'>{book.author}</Text>
              </Flex>
            ))}
          </Box>
          <br/>
          <br />
          <Text mt='6' fontSize='25px' style={{fontWeight:"bold"}}>Colleges :</Text>
          <Table variant='simple' mt='4'>
            <Thead>
              <Tr>
                <Th color='white' fontWeight='bold' fontSize='18px'>College Name</Th>
                <Th color='white' fontWeight='bold' fontSize='18px'>Location</Th>
                <Th color='white' fontWeight='bold' fontSize='18px'>Estimated Fees</Th>
              </Tr>
            </Thead>
            <Tbody style={{color:'white'}}>
              {course.colleges && course.colleges.map((c, i) => (
                <Tr key={i}>
                  <Td>{c.college_name}</Td>
                  <Td>{c.location}</Td>
                  <Td>${c.estimated_fees_usd}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Text>No data available</Text>
      )}

    </Box>
  );
}

export default Course;
