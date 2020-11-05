import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ActivityCards } from './ActivityCards';
import '@testing-library/jest-dom';


describe('ActivityCards', () => {

    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <ActivityCards/>
            </MemoryRouter>
        )
      });

    it('It should display all activity cards', () => {
        render(
            <MemoryRouter>
                <ActivityCards/>
            </MemoryRouter>
        )

        const musicTitle = screen.getByRole('heading', { name: /movies/i });
        const movieTitle = screen.getByRole('heading', { name: /music/i })
        const podcastTitle = screen.getByRole('heading', { name: /podcast/i })
        const cardGamesTitle = screen.getByRole('heading', { name: /card games/i })
        const boardGamesTitle = screen.getByRole('heading', { name: /board games/i })

        const musicContent = screen.getByText(/"i'm going to make him an offer he can't refuse."/i)
        const moviesContent = screen.getByText(/“music is the language of the spirit. it opens the secret of life bringing peace, abolishing strife.”/i)
        const podcastContent = screen.getByText(/"don't bore people. don't worry too much about replicating someone else's formula. be original with the way you podcast." -/i)
        const cardGamesContent = screen.getByText(/life is not a matter of holding good cards, but sometimes, playing a poor hand well./i)
        const boardGamesContent = screen.getByText(/life is not a matter of holding good cards, but sometimes, playing a poor hand well./i)

        const musicAuthor = screen.getByText(/- the godfather, 1972/i);
        const movieAuthor = screen.getByText(/– kahlil gibran/i)
        const podcastAuthor = screen.getByText(/- james schramko/i)
        const cardGamesAuthor = screen.getByText(/– jack london/i)
        const boardGamesAuthor = screen.getByText(/― terry pratchett, going postal/i)

        expect(musicTitle).toBeInTheDocument();
        expect(movieTitle).toBeInTheDocument();
        expect(podcastTitle).toBeInTheDocument();
        expect(cardGamesTitle).toBeInTheDocument();
        expect(boardGamesTitle).toBeInTheDocument();

        expect(musicContent).toBeInTheDocument();
        expect(moviesContent).toBeInTheDocument();
        expect(podcastContent).toBeInTheDocument();
        expect(cardGamesContent).toBeInTheDocument();
        expect(boardGamesContent).toBeInTheDocument();
       
        expect(musicAuthor).toBeInTheDocument();
        expect(movieAuthor).toBeInTheDocument();
        expect(podcastAuthor ).toBeInTheDocument();
        expect(cardGamesAuthor).toBeInTheDocument();
        expect(boardGamesAuthor).toBeInTheDocument();
      });
});
