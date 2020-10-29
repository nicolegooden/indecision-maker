import './App.scss';
import {Homepage} from '../Homepage/Homepage'
import React, {Component} from 'react'
import {Router} from 'react-router-dom'



class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
