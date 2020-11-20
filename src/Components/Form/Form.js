import React, { Component } from "react";
import { getAllQuestions } from "../../apiCalls";
import "./Form.scss";
import { RiHomeSmileLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { CgUserlane } from "react-icons/cg";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      history: [],
      prompts: [],
      allAnswers: [],
      currentAnswers: [],
      questionsPerActivity: [],
    };
  }

  componentDidMount = async () => {
    this.setState({ prompts: await getAllQuestions() });
  };

  setHistory = () => {
    this.setState({ history: [...this.state.history, this.state] });
    this.props.setHistory();
  };

  goBack = (event) => {
    event.preventDefault();
    this.setState(this.state.history[this.state.history.length - 1]);
    this.props.goBack();
  };

  updateCurrentAnswers = (event, questionData) => {
    event.preventDefault();
    if (this.state.currentAnswers.includes(event.target.textContent)) {
      const answersPerQuestion = [...this.state.currentAnswers];
      const index = this.state.currentAnswers.indexOf(event.target.textContent);
      answersPerQuestion.splice(index, 1);
      return this.setState({ currentAnswers: answersPerQuestion });
    }
    if (
      +questionData.allowedResponses &&
      this.state.currentAnswers.find((answer) =>
        questionData.choices.includes(answer)
      )
    ) {
      let choiceToSwap = this.state.currentAnswers.find((answer) =>
        questionData.choices.includes(answer)
      );
      let indexToReplace = this.state.currentAnswers.indexOf(choiceToSwap);
      let answerToReplace = this.state.currentAnswers;
      answerToReplace.splice(indexToReplace, 1, event.target.textContent);
      if (answerToReplace) {
        return this.setState({ currentAnswers: answerToReplace });
      }
    } else {
      this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]});
    }
    this.props.updateActivityAnswers(event);
    this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]});
  };

  updateAllAnswers = async (event) => {
    event.preventDefault();
    window.scrollTo(0,0);
    this.setHistory();
    if (this.state.allAnswers.length === 0) {
      if (this.state.currentAnswers.length === 0) {
        return this.setState({ error: "Please select an activity" });
      }
      await this.setState({
        allAnswers: [...this.state.allAnswers, this.state.currentAnswers],
        currentAnswers: [],
        error: ""
      });
      this.props.setActivities(this.state.allAnswers[0]);
      let activitySet = this.handleBothGames();
      let relevantQuestions = this.determineRelevantQuestions(activitySet);
      return this.setState({ questionsPerActivity: [...relevantQuestions] });
    }
    if (this.checkForAllQuestions()){
      return this.setState({
        allAnswers: [...this.state.allAnswers, this.state.currentAnswers],
        currentAnswers: [],
        error: "",
      });
    } else {
      return this.setState({error: "Please select at least one option for each question"});
    }
  };

  determineRelevantQuestions = (activitySet) => {
    return activitySet.reduce((relevantQuestions, activity) => {
      let filteredQuestions = this.state.prompts.filter((question) => {
        return question.activity === activity;
      });
      let questionsByActivity = {
        activity: activity,
        questions: filteredQuestions,
      };
      relevantQuestions.push(questionsByActivity);
      return relevantQuestions;
    }, []);
  };

  handleBothGames = () => {
    if (
      this.state.allAnswers[0].includes("card games") &&
      this.state.allAnswers[0].includes("board games")
    ) {
      let filteredSet = this.state.allAnswers[0].sort((a, b) => {
        return a > b ? -1 : 1;
      });
      return filteredSet.slice(0, -1);
    }
    return this.state.allAnswers[0];
  };

  determinePrompt = (index, data) => {
    return (
      <article className="form-container">
        <h2 className="question">{data[index].question}</h2>
        <div className="possible-answers">
          {data[index].choices.map((choice, i) => {
            return (
              <div key={i} className="choice">
                <h3    
                  id={data[index].answerType}
                  onClick={(e) => {
                    this.updateCurrentAnswers(e, data[index]);
                  }}
                  value={choice}
                  className="option">
                  {choice}
                </h3>
              </div>
            );
          })}
        </div>
      </article>
    );
  };

  showQuestion = () => {
    if (!this.props.activities.length && !this.state.allAnswers.length) {
      return this.determinePrompt(0, this.state.prompts);
    }
    if (this.state.questionsPerActivity.length) {
      let unansweredSet = this.state.questionsPerActivity.find((set) => {
        return (
          this.state.allAnswers[0][this.state.allAnswers.length - 1] === set.activity
        );
      });
      return unansweredSet.questions.map((question, i) => {
        return this.determinePrompt(i, unansweredSet.questions);
      });
    }
  };

  checkForAllQuestions = () => {
    let index = this.state.allAnswers.length - 1;
    return this.state.questionsPerActivity[index].questions.every(
      (question) => {
        return this.state.currentAnswers.some((answer) =>
          question.choices.includes(answer)
        );
      }
    );
  };

  handleSubmission = (event) => {
    event.preventDefault();
    if (this.checkForAllQuestions()) {
      this.props.determineRandomActivity()
      return (this.props.route.push("/activity/results"))
    } else {
      return this.setState({error: "Please select at least one option for each question"});
    }
  };

  showCurrentAnswers = () => {
    return this.state.currentAnswers.map((answer, i) => {
      return (
        <h3 key={i} className="current-answer">{answer}</h3>
      )
    })
  }
  
  determineNextOrSubmit = () => {
    let button;
    if (this.state.allAnswers.length === 0) {
      return (
        <button onClick={this.updateAllAnswers} className="next-button form-button">next</button>
      );
    }
    if (this.state.allAnswers.length === this.state.questionsPerActivity.length) {
      return (
        <button onClick={this.handleSubmission} className="submit-button form-button">submit</button>
      );
    }
    if (this.state.questionsPerActivity && button === undefined) {
      button = (
        <button onClick={this.updateAllAnswers} className="next-button form-button">next</button>
      );
    }
    return button;
  };

  render() {
    return (
      <form className="question-form">
        <div className="bar-menu">
          <CgUserlane className="logo" />
          <Link 
            to="/indecision-maker" 
            onClick={() => this.props.resetState()}>
            <RiHomeSmileLine className="logo" />
          </Link>
        </div>
        <div className="form-container">
          {this.state.prompts.length && this.showQuestion()}
        </div>
        <div className="picks-title-container">
          <h4 className="picks-title">Your picks!</h4>
        </div>
        <div className="user-picks-container">{this.showCurrentAnswers()}</div>
        <h3>{this.state.error}</h3>
        <div className="form-controls">
          <button 
            className="back-button form-button" 
            onClick={this.goBack}>
            back
          </button>
          {this.determineNextOrSubmit()}
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  route: PropTypes.object,
  goBack: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  activities: PropTypes.array.isRequired,
  setActivities: PropTypes.func.isRequired,
  updateActivityAnswers: PropTypes.func.isRequired,
  determineRandomActivity: PropTypes.func.isRequired
}
