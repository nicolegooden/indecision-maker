import React, { Component } from 'react';
import { questionSet } from './questions'
import './Form.scss';
import { RiHomeSmileLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { CgUserlane } from "react-icons/cg";
export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      currentAnswers: [],
      questionsPerActivity: [],
    }
  }


  updateCurrentAnswers = (event) => {
    event.preventDefault();
    if (this.state.currentAnswers.includes(event.target.textContent)){
      return 
    }
    this.props.updateActivityAnswers(event)
    this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]})
  }

  updateAllAnswers = async (event) => {
    event.preventDefault();
    await this.setState({allAnswers: [...this.state.allAnswers, this.state.currentAnswers], currentAnswers: []})
    if (this.state.allAnswers.length === 1) {
      this.props.setActivities(this.state.allAnswers[0]);
      let relevantQuestions = this.state.allAnswers[0].reduce((relevantQuestions, activity) => {
        let filteredQuestions = questionSet.filter(question => {
          return question.activity === activity; 
        })
        let questionsByActivity = {
          activity: activity,
          questions: filteredQuestions
        }
        relevantQuestions.push(questionsByActivity)
        return relevantQuestions;  
      }, [])
      this.setState({questionsPerActivity: [...relevantQuestions]})
    }
 }

  determinePrompt = (index, data) => {
    return (
        <article className='form-container'>
          <h2 className='question'>{data[index].question}</h2>
          <div className='possible-answers'>
            {data[index].choices.map((choice, i) => {
              return (
                <div className='choice'>
                  <h3
                  key={i}
                  id={data[index].answerType}
                  onClick={this.updateCurrentAnswers} 
                  value={choice} 
                  className='option'>{choice}
                  </h3>
                </div>
                )
            })}
          </div>
        </article>
      )
  }

  showQuestion = () => {
    if (!this.props.activities.length && !this.state.allAnswers.length) {
      return this.determinePrompt(0, questionSet);
    } 
    if (this.state.questionsPerActivity.length) {
      let unansweredSet = this.state.questionsPerActivity.find(set => {
        return this.state.allAnswers[0][this.state.allAnswers.length -1] === set.activity
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

  handleSubmission = () => {
    //invoke app's method for showing suggested activity
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

        <div className="bar-menu">
          <CgUserlane className="logo"/>
          <Link to='/'>
            <RiHomeSmileLine className="logo"/>
          </Link>
        </div>

        <div className="form-container">
          {this.showQuestion()}
          {this.showCurrentAnswers()}
        </div>

        <div className="form-controls">
         <button className='back-button form-button'>back</button>
         {this.determineNextOrSubmit()}
        </div>
        
      </form>
    )
  }
}

//add prop types