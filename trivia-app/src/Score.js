import React, { useState } from 'react';

const Score = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <p>Score: {score}</p>
      <button onClick={incrementScore}>Increment Score</button>
    </div>
  );
};

export default Score;