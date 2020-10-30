import React, { Component } from 'react';
import './Form.scss';

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      answers: [],
      activities: [],
      familyFriendly: true
    }
  }

  determineQuestion = () => {
    
  }

  render() {
    return (
      <form className='question-form'>
         <h2 className='question'>{this.determineQuestion}</h2>
         <article className='possible-answers'>
           
         </article>
         <h3 className='chosen-answers'>{}</h3>
         <button className='back-button form-button'>back</button>
         <button className='next-button form-button'>next</button>
      </form>
    )
  }
}