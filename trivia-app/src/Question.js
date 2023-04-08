/*  This file could contain a Question component that displays the current question and shuffled answer choices. 
This component could receive props from the App component (e.g. question, shuffledAnswers, handleAnswerSelection) 
and use them to render the question and answer choices. */

import React from 'react';

const Question = ({ data }) => {
  return (
    <div>
      {data.results &&
        data.results.map((item) => (
          <div key={item.question}>
            <h2>Question: {item.question}</h2>
            <p>Correct Answer: {item.correct_answer}</p>
            <p>Incorrect Answers: {item.incorrect_answers.join(", ")}</p>
          </div>
        ))}
    </div>
  );
};

export default Question;