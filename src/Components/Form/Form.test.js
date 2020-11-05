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
    const mockGoBack = jest.fn();
    const mockResetState = jest.fn();
    
    render(
      <MemoryRouter>
        <Form 
         activities={mockActivities}
         setActivities={mockSetActivities}
         updateActivityAnswers={mockUpdateActivityAnswers}
         setHistory={mockSetHistory}
         goBack={mockGoBack}
         resetState={mockResetState}
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

  it('should show the next set of questions based on activities chosen', async () => {

    const mockActivities = [];
    const mockSetActivities = jest.fn();
    const mockUpdateActivityAnswers = jest.fn();
    const mockSetHistory = jest.fn();
    const mockGoBack = jest.fn();
    const mockResetState = jest.fn();
    
    render(
      <MemoryRouter>
        <Form 
         activities={mockActivities}
         setActivities={mockSetActivities}
         updateActivityAnswers={mockUpdateActivityAnswers}
         setHistory={mockSetHistory}
         goBack={mockGoBack}
         resetState={mockResetState}
        />
      </MemoryRouter>
    )

    await waitFor(() => screen.getByText('Which activities excite you right now?'))
    userEvent.click(screen.getByText('music'));
    userEvent.click(screen.getByText('card games'));
    // test that this text shows up twice after clicking music
    userEvent.click(screen.getByRole('button', {name: 'next'}));
    const nextQuestion = await waitFor(() => screen.getByText('Which music genre(s)?'))
    expect(nextQuestion).toBeInTheDocument();
    expect(screen.getByText('How old is too old?')).toBeInTheDocument();
    userEvent.click(screen.getByText('Pop'));
    userEvent.click(screen.getByText('Country'));
    userEvent.click(screen.getByText('1990\'s'));
    expect(mockUpdateActivityAnswers).toHaveBeenCalledTimes(5);
    userEvent.click(screen.getByRole('button', {name: 'next'}));
    const gameQuestion = await waitFor(() => screen.getByText('How many people are playing?'));
    expect(gameQuestion).toBeInTheDocument();
    expect(mockSetHistory).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('button', {name: 'submit'})).toBeInTheDocument();
  })

  it('should inform the user when questions are left unanswered', async () => {
    const mockActivities = [];
    const mockSetActivities = jest.fn();
    const mockUpdateActivityAnswers = jest.fn();
    const mockSetHistory = jest.fn();
    const mockGoBack = jest.fn();
    const mockResetState = jest.fn();
    
    render(
      <MemoryRouter>
        <Form 
         activities={mockActivities}
         setActivities={mockSetActivities}
         updateActivityAnswers={mockUpdateActivityAnswers}
         setHistory={mockSetHistory}
         goBack={mockGoBack}
         resetState={mockResetState}
        />
      </MemoryRouter>
    )

    await waitFor(() => screen.getByText('Which activities excite you right now?'))
    userEvent.click(screen.getByText('music'));
    userEvent.click(screen.getByText('card games'));
    userEvent.click(screen.getByRole('button', {name: 'next'}));
    const nextQuestion = await waitFor(() => screen.getByText('Which music genre(s)?'))
    expect(nextQuestion).toBeInTheDocument();
    expect(mockSetActivities).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText('Country'));
    userEvent.click(screen.getByRole('button', {name: 'next'}))
    expect(screen.getByText('Please select at least one option for each question')).toBeInTheDocument();
    userEvent.click(screen.getByText('2000\'s'));
    userEvent.click(screen.getByRole('button', {name: 'next'}));
    const gameQuestion = await waitFor(() => screen.getByText('How many people are playing?'));
    expect(gameQuestion).toBeInTheDocument();
  })

  it('should show the user the previous set of questions if back button is clicked', async () => {
    const mockActivities = [];
    const mockSetActivities = jest.fn();
    const mockUpdateActivityAnswers = jest.fn();
    const mockSetHistory = jest.fn();
    const mockGoBack = jest.fn();
    const mockResetState = jest.fn();
    
    render(
      <MemoryRouter>
        <Form 
         activities={mockActivities}
         setActivities={mockSetActivities}
         updateActivityAnswers={mockUpdateActivityAnswers}
         setHistory={mockSetHistory}
         goBack={mockGoBack}
         resetState={mockResetState}
        />
      </MemoryRouter>
    )

    await waitFor(() => screen.getByText('Which activities excite you right now?'))
    userEvent.click(screen.getByText('music'));
    userEvent.click(screen.getByText('card games'));
    userEvent.click(screen.getByRole('button', {name: 'next'}));
    const nextQuestion = await waitFor(() => screen.getByText('Which music genre(s)?'))
    expect(nextQuestion).toBeInTheDocument();
    expect(mockSetHistory).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByRole('button', {name: 'back'}));
    const prevQuestion = await waitFor(() => screen.getByText('Which activities excite you right now?'));
    expect(prevQuestion).toBeInTheDocument();
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  })
})