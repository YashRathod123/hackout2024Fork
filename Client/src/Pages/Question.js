import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { CourseState } from "../context/courseProvider";
import "../index.scss";

const ENDPOINT = "http://localhost:3001/api";

export function Crew({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { allCourses } = CourseState();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false);

  function formatDate(timestamp) {
    const date = new Date(timestamp);

    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-GB", options);
  }

  const handleCheckboxChange = (courseId) => {
    setSelectedCourseIds((prevSelected) =>
      prevSelected.includes(courseId)
        ? prevSelected.filter((id) => id !== courseId)
        : [...prevSelected, courseId]
    );
  };

  const handleSubmit = () => {
    console.log("Selected Course IDs: ", selectedCourseIds);
    loadQuestions();
    onClose();
  };

  async function loadQuestions() {
    try {
      const response = await fetch(`${ENDPOINT}/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cid: selectedCourseIds }),
      });

      const data = await response.json();
      if (response.ok) {
        setQuestions(data);
        console.log(data);
      } else {
        console.error("Error fetching questions:", data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleQuestionClick = (id) => {
    navigate(`/question/${id}`); // Use navigate to handle routing
  };

  return (
    <div>
      <div className="actions">
        <Button onClick={onOpen} colorScheme="blue">
          Filter
        </Button>
        <Button
          onClick={() => setIsAddQuestionOpen(true)}
          className="add-question-button"
        >
          Add Question
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="backg">
          <ModalHeader className="modal-header">Select Courses</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CheckboxGroup colorScheme="blue" value={selectedCourseIds}>
              <Stack spacing={2} className="checkbox-group">
                {allCourses &&
                  allCourses.map((course) => (
                    <Checkbox
                      key={course.courseid}
                      value={course.courseid}
                      isChecked={selectedCourseIds.includes(course.courseid)}
                      onChange={() => handleCheckboxChange(course.courseid)}
                      className="checkbox-item"
                    >
                      {course.coursename}
                    </Checkbox>
                  ))}
              </Stack>
            </CheckboxGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isAddQuestionOpen} onClose={() => setIsAddQuestionOpen(false)}>
        <ModalOverlay />
        <ModalContent className="backg">
          <ModalHeader className="modal-header">Add Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form or content to add a new question */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsAddQuestionOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <ScrollableFeed className="scrollable-feed">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div className="question-card" key={question.qusid} onClick={() => handleQuestionClick(question.qusid)}>
              <div className="question-header">
                <p className="question-title">{question.qes}</p>
                <p className="question-date">{formatDate(question.created_at)}</p>
              </div>
              <div className="question-body">
                {/* Add more details if needed */}
              </div>
            </div>
          ))
        ) : (
          <div className="no-questions">No questions found</div>
        )}
      </ScrollableFeed>
    </div>
  );
}
