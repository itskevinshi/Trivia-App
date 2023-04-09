import React from 'react';


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Question = ({ data, currentQuestionIndex, handleNextQuestion, handleAnswer, score }) => {
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
    handleAnswer(isCorrect);
    handleNextQuestion();
  };

  if (!data.results) return null;

  if (currentQuestionIndex === data.results.length) {
    return <h2 style={{textAlign: 'center'}}>Final Score: {score}</h2>;
  }

  const answers = [
    ...data.results[currentQuestionIndex].incorrect_answers,
    data.results[currentQuestionIndex].correct_answer,
  ];
  shuffleArray(answers);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Question: {data.results[currentQuestionIndex].question}</h2>
      {answers.map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswerClick(answer === data.results[currentQuestionIndex].correct_answer)}
          style={{display: "block", margin: "auto", padding: '10px'}}
        >
          {answer}
        </button>
      ))}
      <h2 style={{textAlign: 'center'}}>Score: {score}</h2>
    </div>
  );
};

export default Question;