import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DetailsPage } from './DetailsPage';
import '@testing-library/jest-dom';


describe('DetailsPage', () => {

    let name, randomActivity;

    beforeEach(() => {
        name = {activity: 'mockName'}
        randomActivity = 
            {                       
                brief_description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
                content_rating: "PG",
                genre: ["Animation", "Action", "Adventure", "Family"],
                id:20,
                image_poster:"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
                imdb_rating:"8.4",
                movie_plot:"Miles Morales is a New York teen struggling with school, friends and, on top of that, being the new Spider-Man. When he comes across Peter Parker, the erstwhile saviour of New York, in the multiverse, Miles must train to become the new protector of his city.",
                release_date:"2018-12-14",
                runtime:"117",
                title:"Spider-Man: Into the Spider-Verse",
                where_to_watch: null
            }

    })

    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <DetailsPage
                    name={name}
                    randomActivity={randomActivity}
                />
            </MemoryRouter>
        )
      });

    it('It should display a random activity', () => {
        
        render(
            <MemoryRouter>
                <DetailsPage
                    name={name}
                    randomActivity={randomActivity}
                />
            </MemoryRouter>
        )

        const banner = screen.getByRole('heading', { name: /all you need to know\./i });
        const movieTitle = screen.getByRole('heading', { name: /spider\-man: into the spider\-verse/i });
        const moviePublic = screen.getByText('PG');
        const informationTitle = screen.getByRole('heading', { name: /a little bit about me/i });
        const raitingTitle = screen.getByRole('heading', { name: /imdb raiting/i });
        const movieReleaseDateTitle = screen.getByRole('heading', { name: /release date/i });
        const movieReleaseDate = screen.getByText(/december 14, 2018/i);
        const raitingValue = screen.getByText(/8.4/i);
        const genreTitle = screen.getByRole('heading', { name: /genre/i });
        const movieDescription = screen.getByText(/teen miles morales becomes the spider-man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities./i);
        const enjoyItBanner = screen.getByRole('heading', { name: /enjoy it!/i })

        expect(banner).toBeInTheDocument();
        expect(movieTitle).toBeInTheDocument();
        expect(moviePublic).toBeInTheDocument();
        expect(informationTitle).toBeInTheDocument();
        expect(raitingTitle).toBeInTheDocument();
        expect(movieReleaseDateTitle).toBeInTheDocument();
        expect(movieReleaseDate).toBeInTheDocument();
        expect(raitingValue).toBeInTheDocument();
        expect(genreTitle).toBeInTheDocument();
        expect(movieDescription).toBeInTheDocument();
        expect(enjoyItBanner).toBeInTheDocument();

      });
});
