import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

const App = () => {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <Question
      data={data}
      currentQuestionIndex={currentQuestionIndex}
      handleNextQuestion={handleNextQuestion}
      handleAnswer={handleAnswer}
      score={score}
    />
  );
};

export default App;