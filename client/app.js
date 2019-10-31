import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from './store';

class DisconnectedApp extends Component {
  constructor() {
    super();
    this.incrementClick = this.incrementClick.bind(this);
    this.decrementClick = this.decrementClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props.counter)
  }

  incrementClick() {
    this.props.incrementCounter();
  }

  decrementClick() {
    this.props.decrementCounter();
  }

  multiplyClick(num) {

  }

  divideClick(num) {

  }

  render() {
    const { counter } = this.props;
    console.log(counter);
    return (
      <div>
        <h1>BOILERMAKER-REFRESH!!!!</h1>
        <p>Counter: {counter}</p>
        <button type="button" onClick={this.incrementClick}>Increment Counter</button>
        <button type="button" onClick={this.decrementClick}>Decrement Counter</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment()),
  decrementCounter: () => dispatch(decrement())
})

export const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp);
