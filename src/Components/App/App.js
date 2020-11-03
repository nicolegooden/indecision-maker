import './App.scss';
import { Homepage } from '../HomePage/Homepage';
import { Header } from '../Header/Header';
import { Form } from '../Form/Form';
import { Movie } from '../Movie/Movie';
import { Music } from '../Music/Music';
import { Podcast } from '../Podcast/Podcast';
import { BoardGame } from '../BoardGame/BoardGame';
import { CardGame } from '../CardGame/CardGame';
// import { Result } from '../Result/Result';
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

  getActivityData = async (name) => {
    if (name.target) {
      name = name.target.id
    }
    if (name.includes('games')) {
      name = name.replace(/ games/gi, 'Games')
    }
    let promise;
    try {
      if (name === 'movies') {
        promise = await getAllMovies();
      }
      if (name === 'boardGames') {
        promise = await getAllBoardGames();
      }
      if (name === 'cardGames') {
        promise = await getAllCardGames();
      }
      if (name === 'music') {
        promise = await getAllMusic();
      }
      if (name === 'podcasts') {
        promise = await getAllPodcasts();
      }
      this.setState({[name]: promise})
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
    activities.forEach(activity => {
      this.getActivityData(activity)
    })
    this.setState({activities: [...activities]})
  }

  determineRandomActivity = () => {
    let reduce = this.state.activities.reduce((filtered, activity) => {
      if (activity.includes('games')) {
        activity = activity.replace(/ games/gi, 'Games')
      }
      let filteredActivities = this.filterActivity(activity, this.state[`${activity}Answers`])
      filtered.push(filteredActivities)
      return filtered
    }, [])
    // console.log(reduce.flat())
  }

  filterActivity = (activity, answers) => {
    let genreGroup = ['movies', 'podcasts', 'music']
    let gamesGroup = ['boardGames', 'cardGames']
    let ageGroup = ['movies', 'music']
    let possibleSuggestions;
    if (genreGroup.includes(activity)) {
      possibleSuggestions = this.state[activity].filter(singleActivity => {
        if (activity === 'movies') {
          return singleActivity.genre.some(genre => answers.includes(genre))
        }
        return answers.some(genre => genre === singleActivity.genre)
      })
    }
    if (ageGroup.includes(activity)) {
      let ageRestriction = answers.find(answer => {
        return answer.includes('\'s')
      })
      possibleSuggestions = possibleSuggestions.filter(element => {
        return element.release_date.split('-')[0] > ageRestriction.split('\'s')[0]
      })
    }
  }

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
          <Route exact path='/form'>
            <Form
              activities={this.state.activities}
              setActivities={this.setActivities}
              updateActivityAnswers={this.updateActivityAnswers}
              determineRandomActivity={this.determineRandomActivity}
            />
          </Route>
          {/* <Route exact path='/result'>
            <Result determineRandomActivity={this.determineRandomActivity}/>
          </Route> */}
          <Route
            exact path='/:activity'
            render={({match}) => {
              return <BrowsePage
                name={match.params.activity}
                data={this.state[match.params.activity]}
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
      </div >
    );
  }
}

export default App;
