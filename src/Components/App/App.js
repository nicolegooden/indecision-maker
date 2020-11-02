import './App.scss';
import {Homepage} from '../HomePage/Homepage';
import { Header } from '../Header/Header';
import { Form } from '../Form/Form';
import { Movie } from '../Movie/Movie';
import { Music } from '../Music/Music';
import { Podcast } from '../Podcast/Podcast';
import { BoardGame } from '../BoardGame/BoardGame';
import { CardGame } from '../CardGame/CardGame';
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
        <Route exact path='/movie'>
          <Movie />
        </Route>
        <Route exact path='/podcast'>
          <Podcast />
        </Route>
        <Route exact path='/music'>
          <Music />
        </Route>
        <Route exact path='/boardgame'>
          <BoardGame />
        </Route>
        <Route exact path='/cardgame'>
          <CardGame />
        </Route>
      </div>
    );
  }
}

export default App;
