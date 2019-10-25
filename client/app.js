import React from 'react';

let counter = 0;

const increaseCounter = () => {
  counter++;
}

const App = () => {
  return (
    <div>
      <h1>BOILERMAKER-REFRESH!!!!</h1>
      <p>Counter: {counter}</p>
      <button type="button" onClick={increaseCounter}>Press Here to Increase Counter</button>
    </div>
  )
}

export default App;
