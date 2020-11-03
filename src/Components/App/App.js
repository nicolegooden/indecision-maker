import './App.scss';
import { Homepage } from '../HomePage/Homepage';
import { Form } from '../Form/Form';
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
import { ResultPage } from '../ResultPage/ResultPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      musicAnswers: [],
      moviesAnswers: [],
      podcastsAnswers: [],
      boardGamesAnswers: [],
      cardGamesAnswers: [],
      movies: [],
      music: [],
      podcasts: [],
      boardGames: [],
      cardGames: []
    }
  }

  getActivityData = async (event) => {
    let promise;
    try {
      if (event.target.id === 'movies') {
        promise = await getAllMovies();
      }
      if (event.target.id === 'boardGames') {
        promise = await getAllBoardGames();
      }
      if (event.target.id === 'cardGames') {
        promise = await getAllCardGames();
      }
      if (event.target.id === 'music') {
        promise = await getAllMusic();
      }
      if (event.target.id === 'podcasts') {
        promise = await getAllPodcasts();
      }
      this.setState({[event.target.id]: promise})
    } catch (error) {
      console.log(error)
    }
  }

  updateActivityAnswers = (event) => {
    if (event.target.id !== 'default') {
      this.setState({[event.target.id]: [...this.state[event.target.id], event.target.textContent]})
    }
  }

  setActivities = (activities) => {
    this.setState({activities: [...activities]})
  }

  determineRandomActivity = () => {

    // redirect to temporary loading page while the below logic is run
    // what activities did the user select?
    // fetch all activities and place somewhere to be filtered through, here? Result component?
    // if Result component we will also have to pass the answers of the questions down
    // filter through All results from fetch with specific conditions based on selected answers
    // store these further filtered results in somewhere where we can access them more than once, state?
    // randomly choose one of these further filtered activities, maybe remove this from state at that time? 
    // render component that will display the previewcard
    // let user select to see more info or skip
    // if user selects skip, get another random activity from set which should no longer include the one they skipped if we removed it
    // Should user be able to skip once they have selected to see more info? If they are no longer interested?
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
              determineRandomActivity={this.determineRandomActivity}
            />
          </Route>

          <Route
            exact 
            path='/:activity'
            render={({match}) => {
              return <BrowsePage
                name={match.params.activity}
                data={this.state[match.params.activity]}
              />
            }}>
          </Route>

          <Route
            exact 
            path='/music/result'
            render={({match}) => {
              return <ResultPage 
                name={match.params}
                // data={}
              />
            }}>
          </Route>

         </Switch>
        {/* <Footer /> */}
      </div >
    );
  }
}

export default App;
