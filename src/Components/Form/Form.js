import React, { Component } from 'react';
import { questionSet } from './questions'
import './Form.scss';

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      answers: [],
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



  showQuestion = () => {
    if (!this.state.activities.length && !this.state.answers.length) {
      return (
        <article className='question-with-choices'>
          <h2 className='single-question'>{questionSet[0].question}</h2>
          <div>
            {questionSet[0].choices.map(choice => {
              return <h2 className='choice'>{choice}</h2>
            })}
          </div>
        </article>
      )
    }
    // set state for the questions array
    //show one question at a time
  }

  render() {
    return (
      <form className='question-form'>
         <h2 className='question'>{this.showQuestion()}</h2>
         <article className='possible-answers'>
           {/* {this.determineChoices()} */}
         </article>
         <h3 className='chosen-answers'>{this.state.answers}</h3>
         <button className='back-button form-button'>back</button>
         <button className='next-button form-button'>next</button>
      </form>
    )
  }
}