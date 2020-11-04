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
    let allFilteredActivities = this.state.activities.reduce((filtered, activity) => {
      if (activity.includes('games')) {
        activity = activity.replace(/ games/gi, 'Games')
      }
      let filteredActivities = this.filterActivity(activity, this.state[`${activity}Answers`])
      filtered.push(filteredActivities)
      return filtered
    }, [])
    let final = allFilteredActivities.flat()
    let randomNumber = Math.floor(Math.random() *final.length)
    return final[randomNumber]
  }

  filterActivity = (activity, answers) => {
    //refactor this - break out into helper functions
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
      if (ageRestriction) {
        possibleSuggestions = possibleSuggestions.filter(element => {
          return element.release_date.split('-')[0] > ageRestriction.split('\'s')[0]
        })
      }
    }
    if (activity === 'movies') {
        if (answers.includes('too long')) {
          possibleSuggestions = possibleSuggestions.filter(element => {
            return +element.runtime < 120
          })
        }
        if (answers.includes('that\'s fine')) {
          return possibleSuggestions
        }
    }
    if (gamesGroup.includes(activity)) {
      possibleSuggestions = this.state[activity]
      const choices = ['1', '2', '3', '4', '5', 'more than 5']
      let numberOfPlayers = choices.find(choice => {
        return answers.includes(choice)
      })
      possibleSuggestions = possibleSuggestions.filter(element => {
        if (numberOfPlayers === 'more than 5') {
          return element.max_players >= 5
        }
        return element.min_players <= numberOfPlayers && element.max_players >= numberOfPlayers
      })
    }
    return possibleSuggestions
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
