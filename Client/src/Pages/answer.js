import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Textarea } from '@chakra-ui/react';

const ENDPOINT = "http://localhost:3001/api"; // Update this to your actual endpoint

export function AnswerPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    async function fetchQuestionAndAnswers() {
      try {
        const questionResponse = await fetch(`${ENDPOINT}/question/${id}`);
        const questionData = await questionResponse.json();
        setQuestion(questionData);

        const answersResponse = await fetch(`${ENDPOINT}/answers/${id}`);
        const answersData = await answersResponse.json();
        setAnswers(answersData);
      } catch (error) {
        console.error("Error fetching question and answers:", error);
      }
    }

    fetchQuestionAndAnswers();
  }, [id]);

  const handleAnswerSubmit = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionId: id, answer: newAnswer }),
      });

      if (response.ok) {
        const newAnswerData = await response.json();
        setAnswers([...answers, newAnswerData]);
        setNewAnswer("");
      } else {
        console.error("Error submitting answer:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div>
      {question && (
        <div>
          <h2>{question.title}</h2>
          <p>{question.content}</p>
        </div>
      )}
      <div>
        <h3>Answers:</h3>
        {answers.map((answer) => (
          <div key={answer.id}>
            <p>{answer.content}</p>
          </div>
        ))}
      </div>
      <div>
        <Textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Write your answer here"
        />
        <Button onClick={handleAnswerSubmit}>Submit Answer</Button>
      </div>
    </div>
  );
}
