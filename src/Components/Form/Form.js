import React, {Component} from 'react';
import {getAllQuestions} from '../../apiCalls'
import './Form.scss';

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompts: [],
      allAnswers: [],
      currentAnswers: [],
      questionsPerActivity: [],
    }
  }

  componentDidMount = async () => {
    this.setState({prompts: await getAllQuestions()})
  }

  updateCurrentAnswers = (event) => {
    console.log(event.target.id)
    if (event.target.id.includes("Games")) {
      return this.setState({currentAnswers: [event.target.textContent]})
    }
    if (this.state.currentAnswers.includes(event.target.textContent)) {
      return
    }
    else {
      this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]})
    }
    this.props.updateActivityAnswers(event)
  }

  updateAllAnswers = async (event) => {
    event.preventDefault();
    await this.setState({allAnswers: [...this.state.allAnswers, this.state.currentAnswers], currentAnswers: []})
    if (this.state.allAnswers.length === 1) {
      this.props.setActivities(this.state.allAnswers[0]);
      let activitySet = this.handleBothGames()
      let relevantQuestions = this.determineRelevantQuestions(activitySet)
      this.setState({questionsPerActivity: [...relevantQuestions]})
    }
  }
  determineRelevantQuestions = (activitySet) => {
    return activitySet.reduce((relevantQuestions, activity) => {
      let filteredQuestions = this.state.prompts.filter(question => {
        return question.activity === activity;
      })
      let questionsByActivity = {
        activity: activity,
        questions: filteredQuestions
      }
      relevantQuestions.push(questionsByActivity)
      return relevantQuestions;
    }, [])
  }

  handleBothGames = () => {
    if (this.state.allAnswers[0].includes('card games') && this.state.allAnswers[0].includes('board games')) {
      let filteredSet = this.state.allAnswers[0].sort((a, b) => {
        return a > b ? - 1 : 1
      })
      return filteredSet.slice(0, -1)
    }
    return this.state.allAnswers[0]
  }

  determinePrompt = (index, data) => {
    return (
      <article className='question-with-choices'>
        <h2 className='single-question'>{data[index].question}</h2>
        <div>
          {data[index].choices.map((choice, i) => {
            return <h2
              key={i}
              id={data[index].answerType}
              onClick={this.updateCurrentAnswers}
              value={choice}
              className='choice'>{choice}
            </h2>
          })}
        </div>
      </article>
    )
  }

  showQuestion = () => {
    if (!this.props.activities.length && !this.state.allAnswers.length) {
      return this.determinePrompt(0, this.state.prompts);
    }
    if (this.state.questionsPerActivity.length) {
      let unansweredSet = this.state.questionsPerActivity.find(set => {
        return this.state.allAnswers[0][this.state.allAnswers.length - 1] === set.activity
      })
      return unansweredSet.questions.map((question, i) => {
        return this.determinePrompt(i, unansweredSet.questions)
      })
    }
  }

  showCurrentAnswers = () => {
    return this.state.currentAnswers.map((answer, i) => {
      return <h3
        key={i}
        className='current-answer'
      >{answer}</h3>
    })
  }

  handleSubmission = (event) => {
    event.preventDefault()
    this.props.determineRandomActivity()
  }

  determineNextOrSubmit = () => {
    let button;
    if (this.state.allAnswers.length === 0) {
      return <button onClick={this.updateAllAnswers} className='next-button form-button'>next</button>
    } else if (this.state.allAnswers.length === this.state.questionsPerActivity.length) {
      button = <button onClick={this.handleSubmission} className='submit-button form-button'>submit</button>
    }
    if (this.state.questionsPerActivity && button === undefined) {
      button = <button onClick={this.updateAllAnswers} className='next-button form-button'>next</button>
    }
    return button;
  }

  render() {
    return (
      <form className='question-form'>
        <h2 className='question'>{this.state.prompts.length && this.showQuestion()}</h2>
        {this.showCurrentAnswers()}
        <button className='back-button form-button'>back</button>
        {this.determineNextOrSubmit()}
      </form >
    )
  }
}

//add prop types
