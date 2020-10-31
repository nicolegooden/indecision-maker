import React, { Component } from 'react';
import './Form.scss';

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      questionSets: [
          {
            question: 'Does your group include kids?', 
            choices: ['yes', 'no'],
            answers: [],
            activities: ['movies', 'board games', 'music', 'card games', 'podcasts']
          }, 
          {
            question: 'Which activities excite you right now?',
            choices: ['movies', 'board games', 'music', 'card games', 'podcasts'],
            answers: [],
            activities: ['movies', 'board games', 'music', 'card games', 'podcasts'],
          }
        ],
      activities: [],
      familyFriendly: true
    }
  }

// const questions = [
//     {
//       question: 'How old is too old?',
//       choices: [2010, 2000, 1990, 1980, "No such thing as too old"]
//       answers: [],
//       activities: ['music', 'podcast', 'movies]
//     },
//     {
//       question: 'Which genre(s)?',
//       choices: [{musicGenres: ['Pop', 'Rock', 'Country', 'Hard Core', 'Dance', 'Alternative', 'Hip-Hop', 'R&B/Soul', 'Rap']},
//                 {podcastGenres: ['Comedy', 'Daily News', 'History', 'Documentary', 'Technology', 'True Crime', 'Education', 'Sports', 'Relationships', 'Design', 'Music', 'Science']}],
//                 {movieGenres: ['Adventure', 'Animation', 'Documentary', 'Comedy', 'Family', 'Fantasy', 'Horror', 'Mystery', 'Sci-Fi]}],
//      answers: [],      
//      activities:['music', 'podcast', 'movies'],
//     }
//     {
//       question: 'Would you like your movie to be shorter than 2 hours?', 
//       choices: ['yes', 'no'], 
//       answers: [],
//       activities: ['movies']
//     }
//     {
//       question: 'How many people are playing?',
//       choices: ['1', '2', '3', '4', '5', 'more than 5'],
//       answers: [],
//       activities: ['board games', 'card games']
//      }

//   ]

  determineAllQuestions = () => {
    // 
    // the rest: depend on answer to question 2
  }

  showQuestion = () => {
    // set state for the questions array
    //show one question at a time
  }

  render() {
    return (
      <form className='question-form'>
         <h2 className='question'>{this.showQuestion()}</h2>
         <article className='possible-answers'>
           {this.determineChoices()}
         </article>
         <h3 className='chosen-answers'>{this.state.answers}</h3>
         <button className='back-button form-button'>back</button>
         <button className='next-button form-button'>next</button>
      </form>
    )
  }
}