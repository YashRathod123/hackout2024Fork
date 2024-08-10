import React from "react";
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
function Cardi({ data1 }) {
  // const data = props.json();

  return (
    <Box className="testing2">
      <Card maxW="sm" className="card">
        <CardBody>
          <Image height="40%" width="100%"  src={data1.url} alt="space" borderRadius="lg" className="setimage"/>
          <Stack mt="6" spacing="3">
            <Heading size="md">{data1.coursename}</Heading>
            <Text>{data1.description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              More Details
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}
export default Cardi;
