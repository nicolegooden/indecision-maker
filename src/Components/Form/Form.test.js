import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';
import { MemoryRouter } from 'react-router-dom';
import { getAllQuestions } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');


describe('Form', () => {
  beforeEach(() => {
    getAllQuestions.mockResolvedValueOnce([
        {activity: "", allowedResponses: "0", answerType: "default", 
         choices: ["movies", "music", "podcasts", "card games", "board games"],
         id: 1, question: "Which activities excite you right now?"},
         {activity: "music", allowedResponses: "0", answerType: "musicAnswers", 
         choices: ["Pop", "Rock", "Country", "Dance", "Rap"],
         id: 2, question: "Which music genre(s)?"},
         {activity: "music", allowedResponses: "1", answerType: "musicAnswers", 
         choices: ["2010's", "2000's", "1990's", "1980's", "no such thing as too old"],
         id: 3, question: "How old is too old?"},
         {activity: "card games", allowedResponses: "1", answerType: "cardGamesAnswers", 
         choices: ["1", "2", "3", "4", "5", "more than 5"],
         id: 4, question: "How many people are playing?"},
      ])
  })

  it('should render expected elements', async () => {
    
    const mockActivities = [];
    const mockSetActivities = jest.fn();
    const mockUpdateActivityAnswers = jest.fn();
    const mockSetHistory = jest.fn();

    render(
      <MemoryRouter>
        <Form 
         activities={mockActivities}
         setActivities={mockSetActivities}
         updateActivityAnswers={mockUpdateActivityAnswers}
         setHistory={mockSetHistory}
        />
      </MemoryRouter>
    )

    const question = await waitFor(() => screen.getByText('Which activities excite you right now?'))
    expect(question).toBeInTheDocument();
    expect(screen.getByText('music')).toBeInTheDocument();
    expect(screen.getByText('card games')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'next'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'back'})).toBeInTheDocument();
  })
})