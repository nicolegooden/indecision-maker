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
import { DetailsPage } from '../DetailPage/DetailsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      activities: [],
      musicAnswers: [],
      moviesAnswers: [],
      podcastsAnswers: [],
      boardGamesAnswers: [],
      cardGamesAnswers: [],
      possibleSuggestions: [],
      randomActivity: {},
      movies: [],
      music: [],
      podcasts: [],
      boardGames: [],
      cardGames: [],
      error: ''
    };
  this.baseState = this.state
  }

  getActivityData = async (name) => {
    if (name.target) {
      name = name.target.id;
    }
    if (name.includes("games")) {
      name = name.replace(/ games/gi, "Games");
    }
    let promise;
    try {
      if (name === "movies") {
        promise = await getAllMovies();
      }
      if (name === "boardGames") {
        promise = await getAllBoardGames();
      }
      if (name === "cardGames") {
        promise = await getAllCardGames();
      }
      if (name === "music") {
        promise = await getAllMusic();
      }
      if (name === "podcasts") {
        promise = await getAllPodcasts();
      }
      this.setState({ [name]: promise });
    } catch (error) {
      console.log(error)
      this.setState({error})
    }
  };

  resetState = ()=>{
    this.setState(this.baseState)
  }
  setHistory = () =>{
    this.setState({
      history:[...this.state.history, this.state],
    })
  }
  goBack = ()=>{
    this.setState(this.state.history[this.state.history.length - 1])
  }

  updateActivityAnswers = (event) => {
    if (event.target.id !== "default") {
      this.setState({
        [event.target.id]: [
          ...this.state[event.target.id],
          event.target.textContent,
        ],
      });
    }
  };

  setActivities = (activities) => {
    activities.forEach((activity) => {
      this.getActivityData(activity);
    });
    this.setState({ activities: [...activities] });
  };

  determineRandomActivity = () => {
    let allFilteredActivities = this.state.activities.reduce(
      (filtered, activity) => {
        if (activity.includes("games")) {
          activity = activity.replace(/ games/gi, "Games");
        }
        let filteredActivities = this.filterActivity(
          activity,
          this.state[`${activity}Answers`]
        );
        filtered.push(filteredActivities);
        return filtered;
      },
      []
    );
    let final = allFilteredActivities.flat();
    let randomNumber = Math.floor(Math.random() * final.length);
    this.setState({randomActivity:  final[randomNumber]})
    return final[randomNumber]
  };

  genreFilter = (activity, answers) => {
    return this.state[activity].filter((singleActivity) => {
      if (activity === "movies") {
        return singleActivity.genre.some((genre) => answers.includes(genre));
      }
      return answers.some((genre) => genre === singleActivity.genre);
    });
  };

  ageFilter = (possibleSuggestions, answers) => {
    let ageRestriction = answers.find((answer) => {
      return answer.includes("0's");
    });
    if (ageRestriction) {
      return possibleSuggestions.filter((element) => {
        return (
          element.release_date.split("-")[0] > ageRestriction.split("'s")[0]
        );
      });
    }
    return possibleSuggestions
  };

  movieFilter = (possibleSuggestions, answers) => {
    if (answers.includes("too long")) {
      return possibleSuggestions.filter((element) => {
        return +element.runtime < 120;
      });
    }
    if (answers.includes("that's fine")) {
      return possibleSuggestions;
    }
  };

  gameFilter = (activity, answers) => {
    let possibleSuggestions = this.state[activity];
    const choices = ["1", "2", "3", "4", "5", "more than 5"];
    let numberOfPlayers = choices.find((choice) => {
      return answers.includes(choice);
    });
    return possibleSuggestions.filter((element) => {
      if (numberOfPlayers === "more than 5") {
        return element.max_players >= 5;
      }
      return (
        element.min_players <= numberOfPlayers &&
        element.max_players >= numberOfPlayers
      );
    });
  };

  filterActivity = (activity, answers) => {
    let genreGroup = ["movies", "podcasts", "music"];
    let gamesGroup = ["boardGames", "cardGames"];
    let ageGroup = ["movies", "music"];
    let possibleSuggestions;

    if (genreGroup.includes(activity)) {
      possibleSuggestions = this.genreFilter(activity, answers);
    }
    if (ageGroup.includes(activity)) {
      possibleSuggestions = this.ageFilter(possibleSuggestions, answers);
    }
    if (activity === "movies") {
      possibleSuggestions = this.movieFilter(possibleSuggestions, answers);
    }
    if (gamesGroup.includes(activity)) {
      if (this.state.cardGames && this.state.boardGames && activity === "boardGames"){
        answers = this.state.cardGamesAnswers
      }
      possibleSuggestions = this.gameFilter(activity, answers);
    }
    this.setState({possibleSuggestions: possibleSuggestions})
    return possibleSuggestions
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Homepage
              getActivityData={this.getActivityData}
              allMovies={this.state.movies}
            />
          </Route>
          <Route exact path="/form"
            render={( {history} ) => {
              return (
                <Form
                  route={history}
                  goBack={this.goBack}
                  setHistory={this.setHistory}
                  resetState={this.resetState}
                  activities={this.state.activities}
                  setActivities={this.setActivities}
                  updateActivityAnswers={this.updateActivityAnswers}
                  determineRandomActivity={this.determineRandomActivity}
                />
              );
            }}
          ></Route>

          <Route exact
            path="/:activity"
            render={({ match }) => {
              return (
                <BrowsePage
                  name={match.params.activity}
                  data={this.state[match.params.activity]}
                />
              );
            }}
          ></Route>
          <Route
            exact 
            path={this.state.randomActivity ? '/:activity/:results': '/form'}
            render={({match}) => {
              return <ResultPage 
                name={match.params}
                data={this.state.possibleSuggestions}
                randomActivity={this.state.randomActivity}
                determineRandomActivity={this.determineRandomActivity}
                error={this.state.error}
              />
            }}>
          </Route>
          <Route
            exact 
            path='/about/:activity/:details'
            render={({match}) => {
              return <DetailsPage
                name={match.params}
                randomActivity={this.state.randomActivity}
              />
            }}>
          </Route>

          <Route
            path='/*'>
            <h1 className="error">Oops something went wrong...</h1>
          </Route>

         </Switch>

        <Footer />
      </div >
    );
  }
}

export default App;
