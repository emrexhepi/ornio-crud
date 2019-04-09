import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// import actions
import {
  increaseCounter,
  decreaseCounter,
  addToCounter
} from './actions/simpleActions';

class App extends Component {

  increaseCounter = (e) => {
    e.preventDefault();
    this.props.increase();
  }

  decreaseCounter = (e) => {
    e.preventDefault();
    this.props.decrease();
  }

  addToCounter = (amount) => {
    this.props.add(amount);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.props.counter}</p>
          <p>
            <a href="#/" onClick={this.increaseCounter}>+</a>
            <span > | </span>
            <a href="#/" onClick={this.decreaseCounter}>-</a>
          </p>
          <p>
            <a href="#/" onClick={() => (this.addToCounter(10))}>+10</a>
            <span > | </span>
            <a href="#/" onClick={() => (this.addToCounter(-10))}>-10</a>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.simpleReducer.counter
});

const mapDispatchToProps = (dispatch) => ({
  increase: ()=> dispatch(increaseCounter()),
  decrease: ()=> dispatch(decreaseCounter()),
  add: (amount) => dispatch(addToCounter(amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
