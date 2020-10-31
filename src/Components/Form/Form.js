import React, { Component } from 'react';
import { questionSet } from './questions'
import './Form.scss';

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allAnswers: [],
      currentAnswers: [],
      familyFriendly: true
    }
  }

  //FILTER through the questions array based on which activities are INCLUDED (which activities the user wants)
  //save filtered array of relevant questions to a variable at local scope
  //return one question at a time based on a single render

//   determineAllQuestions = () => {
//     const relevantQuestions = questionSet.filter(question => {
//       return question.activities.includes()  
//     })
//     // the rest: depend on answer to question 2
//   }

  updateCurrentAnswers = (event) => {
    event.preventDefault();
    this.setState({currentAnswers: [...this.state.currentAnswers, event.target.textContent]})
  }

  updateAllAnswers = (event) => {
    event.preventDefault();
    this.setState({allAnswers: [...this.state.allAnswers, ...this.state.currentAnswers], currentAnswers: []})
    if (this.state.allAnswers.length === 1) {
      this.state.currentAnswers.reduce((relevantQuestions, activity) => {
        let filteredQuestions = questionSet.filter(question => {
          return question.activities.includes(activity); 
        })
        let questionsByActivity = {
          activity: [activity],
          questions: filteredQuestions,
          answered: false
        }
        relevantQuestions.push(questionsByActivity)
        console.log(relevantQuestions)
        return relevantQuestions;  
      }, [])
      this.props.setActivities(this.state.currentAnswers);
    }
 }

  determinePrompt = (index) => {
    return (
        <article className='question-with-choices'>
          <h2 className='single-question'>{questionSet[index].question}</h2>
          <div>
            {questionSet[index].choices.map(choice => {
              return <h2 onClick={this.updateCurrentAnswers} value={choice} className='choice'>{choice}</h2>
            })}
          </div>
        </article>
      )
  }

  showQuestion = () => {
    if (!this.props.activities.length && !this.state.allAnswers.length) {
      return this.determinePrompt(0);
    } 
    if (!this.props.activities.length && this.state.allAnswers.length) {
      return this.determinePrompt(1);
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
         {this.showCurrentAnswers()}
         <button className='back-button form-button'>back</button>
         <button onClick={this.updateAllAnswers} className='next-button form-button'>next</button>
      </form>
    )
  }
}

//add prop types