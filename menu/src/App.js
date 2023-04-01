import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
  "breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ],
  "lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
    {"food": "hamburger", "price": 8.00, "vegetarian": false}
  ],
  "dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
    {"food": "chili", "price": 8.00, "vegetarian": false}
  ]
});

  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={() => setValue(value + 1)}>Show Only Vegetarian</button>
      <h2>Breakfast</h2>
      <p>
        {data.breakfast.map(item => (
          <p key={item.food}>
            {item.food} (${item.price})
          </p>
      ))}
      </p>
      <h2>Lunch</h2>
      <p>
        {data.lunch.map(item => (
          <p key={item.food}>
            {item.food} (${item.price})
          </p>
      ))}
      </p>
      <h2>Dinner</h2>
      <p>
        {data.dinner.map(item => (
          <p key={item.food}>
            {item.food} (${item.price})
          </p>
      ))}
      </p>
    </div>
  );
}

export default App;
