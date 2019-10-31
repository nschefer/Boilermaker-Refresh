import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>BOILERMAKER-REFRESH!!!!</h1>
        <p>Counter: {counter}</p>
        <button type="button" onClick={this.increaseCounter}>Press Here to Increase Counter</button>
      </div>
    )
  }
}

export default App;
