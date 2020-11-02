import './App.scss';
import {Homepage} from '../HomePage/Homepage';
import Header from '../Header/Header';
import { Form } from '../Form/Form';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { getAllMovies } from '../../apiCalls.js'

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

  componentDidMount = async () => {
    try{
      const moviesPromise = await getAllMovies()
      console.log(moviesPromise)
    } catch (error){
      console.log(error)
    }

  }

  updateActivityAnswers = (event) => {
    if (event.target.id !== 'default') {
      this.setState({ [event.target.id]:  [...this.state[event.target.id], event.target.textContent]})
    }
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
