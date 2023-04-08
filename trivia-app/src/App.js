import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

/* Sure! Here’s an updated version of the steps that includes shuffling the answer choices:

Fetch data from the API: You’ve already done this in your code by using the fetch function to retrieve data from the API and storing it in the data state variable.

Shuffle the answer choices: After fetching the data from the API, you could create a new state variable (e.g. shuffledData) to store a shuffled version of the data. You could use a function (e.g. shuffleAnswerChoices) to shuffle the order of the answer choices for each question.

Display one question at a time: You could create a new state variable (e.g. currentQuestionIndex) to keep track of which question is currently being displayed. Then, in the return section of your component, you could display the question and shuffled answer choices for the current question using the data stored in the shuffledData state variable.

Handle user’s answer selection: You could create a function (e.g. handleAnswerSelection) that is called when the user clicks on one of the answer choices. This function could update the currentQuestionIndex state variable to move on to the next question and also keep track of the user’s score.

Display final score: Once all questions have been answered, you could display the user’s final score. */


const App = () => {
  const [data, setData] = useState([]);
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

  return (
  <Question data={data} />
);
};

export default App;
