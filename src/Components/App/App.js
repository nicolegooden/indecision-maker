import './App.scss';
import {Homepage} from '../HomePage/Homepage';
import Header from '../Header/Header';
import { Form } from '../Form/Form';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      musicAnswers:[],
      moviesAnswers:[],
      podcastsAnswers:[],
      boardGamesAnswers:[],
      cardGamesAnswers:[]
    }
  }

  updateActivityAnswers = (event) => {
    // console.log('in app target.id', event.target.id)
    // console.log('in app target.content', event.target.textContent)
    if (event.target.id !== 'default') {
      this.setState({ [event.target.id]:  [...this.state[event.target.id], event.target.textContent]})
    }
    // console.log('in app', key)
    // console.log('in app', currentAnswer)
 
  }

  setActivities = (activities) => {
    this.setState({activities: [...activities]})
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/form'>
          <Form 
            activities={this.state.activities} 
            setActivities={this.setActivities}
            updateActivityAnswers={this.updateActivityAnswers}
          />
        </Route>
      </div>
    );
  }
}

export default App;
