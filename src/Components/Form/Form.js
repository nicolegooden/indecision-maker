import React, { Component } from 'react';
import { questionSet } from './questions'
import './Form.scss';

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      allAnswers: [],
      currentAnswers: [],
      activities: [],
      familyFriendly: true
    }
  }

  //FILTER through the questions array based on which activities are INCLUDED (which activities the user wants)
  //save filtered array of relevant questions to a variable at local scope
  //return one question at a time based on a single render

  determineAllQuestions = () => {
    const relevantQuestions = questionSet.filter(question => {
      return question.activities.includes()  
    })
    // the rest: depend on answer to question 2
  }

  updateCurrentAnswers = (event) => {
    event.preventDefault();
    this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]})
  }

  updateAllAnswers = (event) => {
    event.preventDefault();
    this.setState({allAnswers: [...this.state.allAnswers, ...this.state.currentAnswers]})
  }

  showQuestion = () => {
    if (!this.state.activities.length && !this.state.allAnswers.length) {
      return (
        <article className='question-with-choices'>
          <h2 className='single-question'>{questionSet[0].question}</h2>
          <div>
            {questionSet[0].choices.map(choice => {
              return <h2 onClick={this.updateCurrentAnswers} value={choice} className='choice'>{choice}</h2>
            })}
          </div>
        </article>
      )
    } 
  }

  showCurrentAnswers = () => {
    return this.state.currentAnswers.map(answer => {
      return <h3 className='current-answer'>{answer}</h3>
    })
  }

  render() {
    return (
      <form className='question-form'>
         <h2 className='question'>{this.showQuestion()}</h2>
         <article className='possible-answers'>
           {/* {this.determineChoices()} */}
         </article>
         {this.showCurrentAnswers()}
         <button className='back-button form-button'>back</button>
         <button onClick={this.updateAllAnswers} className='next-button form-button'>next</button>
      </form>
    )
  }
}