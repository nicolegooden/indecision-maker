import './App.scss';
import {Homepage} from '../Homepage/Homepage'
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/'>
          <Homepage />
        </Route>
      </div>
    );
  }
}

export default App;
