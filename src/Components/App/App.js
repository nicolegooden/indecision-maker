import './App.scss';
import { Homepage } from '../HomePage/Homepage';
import { Header } from '../Header/Header';
import { Form } from '../Form/Form';
import { Movie } from '../Movie/Movie';
import { Music } from '../Music/Music';
import { Podcast } from '../Podcast/Podcast';
import { BoardGame } from '../BoardGame/BoardGame';
import { CardGame } from '../CardGame/CardGame';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllMovies, 
  getAllPodcasts, 
  getAllCardGames, 
  getAllMusic, 
  getAllBoardGames} 
  from '../../apiCalls.js'
import { BrowsePage } from '../BrowsePage/BrowsePage';
import { Footer } from '../Footer/Footer';
class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      musicAnswers:[],
      moviesAnswers:[],
      podcastsAnswers:[],
      boardGamesAnswers:[],
      cardGamesAnswers:[],
      movies: [],
      music: [],
      podcasts: [],
      boardGames: [],
      cardGames: []
    }
  }

  getActivityData = async (event) => {
    let promise;
    try{
      if(event.target.id === 'movies' ) {
          promise = await getAllMovies();
      }
      if(event.target.id === 'boardGames' ) {
        promise = await getAllBoardGames();
      }
      if(event.target.id === 'cardGames' ) {
        promise = await getAllCardGames();
      }
      if(event.target.id === 'music' ) {
          promise = await getAllMusic();
      }
      if(event.target.id === 'podcasts' ) {
        promise = await getAllPodcasts();
      }
      this.setState({ [event.target.id]: promise})
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
      <Switch>
      
        <Route 
          exact path='/'>
          <Homepage 
            getActivityData={this.getActivityData}
            allMovies={this.state.movies}
          />
        </Route>

        <Route 
          exact 
          path='/form'>
            <Form 
            activities={this.state.activities} 
            setActivities={this.setActivities}
            updateActivityAnswers={this.updateActivityAnswers}
            />
        </Route>
        
        <Route
          exact 
          path='/:activity'
          render={({ match }) => {
            return <BrowsePage 
            name={match.params.activity}
            data={ this.state[match.params.activity]}
          />
          }}>
        </Route>

        {/* <Route exact path='/movie'>
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
        </Route> */}
      </Switch>

      <Footer />
      </div>
    );
  }
}

export default App;
