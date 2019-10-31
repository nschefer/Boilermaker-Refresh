import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, divide, increment, multiply } from './store';

class DisconnectedApp extends Component {
  constructor() {
    super();

    this.state = {
      factor: 1,
      dividend: 1
    }

    this.incrementClick = this.incrementClick.bind(this);
    this.decrementClick = this.decrementClick.bind(this);
    this.multiplyClick = this.multiplyClick.bind(this);
    this.divideClick = this.divideClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  incrementClick() {
    this.props.incrementCounter();
  }

  decrementClick() {
    this.props.decrementCounter();
  }

  multiplyClick() {
    this.props.multiplyCounter(this.state.factor);
    this.setState({
      factor: 1
    })
  }

  divideClick() {
    this.props.divideCounter(this.state.dividend);
    this.setState({
      dividend: 1
    })
  }

  handleChange(e) {
    if (e.target.name === 'factor') {
      this.setState({
        factor: e.target.value
      })
    } else {
      this.setState({
        dividend: e.target.value
      })
    }
  }

  render() {
    const { counter } = this.props;

    console.log(this.state);
    return (
      <div>
        <h1>BOILERMAKER-REFRESH!!!!</h1>
        <p>Counter: {counter}</p>
        <button type="button" onClick={this.incrementClick}>Increment Counter</button>
        <button type="button" onClick={this.decrementClick}>Decrement Counter</button>
        <input name="factor" placeholder="Input number to multiply by..." value={this.state.factor} onChange={this.handleChange} />
        <button type="button" onClick={this.multiplyClick}>Multiply Counter</button>
        <input name="dividend" placeholder="Input number to divide by..." value={this.state.dividend} onChange={this.handleChange} />
        <button type="button" onClick={this.divideClick}>Divide Counter</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment()),
  decrementCounter: () => dispatch(decrement()),
  multiplyCounter: (num) => dispatch(multiply(num)),
  divideCounter: (num) => dispatch(divide(num))
})

export const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp);
