import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from  '@testing-library/user-event';
import { ResultPage } from './ResultPage';
import '@testing-library/jest-dom';


describe('ResultPage', () => {

    let name, 
    data, 
    randomActivity, 
    determineRandomActivity, 
    error, 
    secondRandomMovie;

    beforeEach(() => {
        name = { name:'page' }
        data = [
            {
                brief_description:"A young boy and his grandmother have a run-in with a coven of witches and their leader.",
                content_rating:"PG",
                genre:["Adventure", "Comedy", "Family", "Fantasy", "Horror" ],
                id:1,
                image_poster:"https://m.media-amazon.com/images/M/MV5BNjRkYjlhMjEtYzIwOC00ZWYzLTgyMmQtYjI5M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                imdb_rating:"5.4",
                movie_plot:"Reimagining Roald Dahl's beloved story for a modern audience, Robert Zemeckis's visually innovative film tells the darkly humorous and heartwarming tale of a young orphaned boy who, in late 1967, goes to live with his loving Grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand H...",
                release_date:"2020-10-22",
                runtime:"106",
                title:"The Witches",
                where_to_watch:null
            },
            {
                brief_description: "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
                content_ratin:"PG",
                genre:["Animation", "Drama", "Family", "Fantasy", "Music"],
                id: 16,
                image_poster: "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_.jpg",
                imdb_rating: "7.3",
                movie_plot: "Set back in the late 1800s in a Victorian village, a man and woman by the names of Victor Van Dort and Victoria Everglot are betrothed because the Everglots need the money or else they'll be living on the streets and the Van Dorts want to be high in society. But when things go wrong at the wedding rehearsal, Victor goes into the woods to practice his vows. Just as soon as he gets them right, he finds himself married to Emily, the corpse bride. While Victoria waits on the other side, there's a ri...",
                release_date:"2005-09-23",
                runtime:"77",
                title:"Corpse Bride",
                where_to_watch: null
    
            }
        ]
        
        randomActivity = {
            brief_description:"Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
            content_rating:"PG",
            genre:["Adventure", "Family", "Fantasy", "Mystery"],
            id:24,
            image_poster:"https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
            imdb_rating:"7.9",
            movie_plot:"Harry Potter (Daniel Radcliffe) is having a tough time with his relatives (yet again). He runs away after using magic to inflate Uncle Vernon's (Richard Griffiths') sister Marge (Pam Ferris), who was being offensive towards Harry's parents. Initially scared for using magic outside the school, he is pleasantly surprised that he won't be penalized after all. However, he soon learns that a dangerous criminal and Voldemort's trusted aide Sirius Black (Gary Oldman) has escaped from Azkaban Prison and...",
            release_date:"2004-06-04",
            runtime:"142",
            title:"Harry Potter and the Prisoner of Azkaban",
            where_to_watch: null
        };
        determineRandomActivity = jest.fn();
        error = 'Mock Error';
    })

    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <ResultPage
                    name={name}
                    data={data}
                    randomActivity={randomActivity}
                    determineRandomActivity={determineRandomActivity}
                    error={error}
                />
            </MemoryRouter>
        )
      });

    it('It should display a random activity', () => {
        render(
            <MemoryRouter>
                <ResultPage
                    name={name}
                    data={data}
                    randomActivity={randomActivity}
                    determineRandomActivity={determineRandomActivity}
                    error={''}
                />
            </MemoryRouter>
        )

        const banner = screen.getByRole('heading', { name: /finally, here is a suggestion for you!/i })
        const movieTitle = screen.getByText('Harry Potter and the Prisoner of Azkaban');
        const moviePublic = screen.getByText('PG');
        const randomImg = screen.getByRole('img');
        const simmilarPicksTitle = screen.getByRole('heading', { name: /simmilar picks/i });
        const choosemeButton = screen.getByRole('button', { name: /choose me!/i });
        const skipButton = screen.getByRole('button', { name: /skip/i });

        expect(banner).toBeInTheDocument();
        expect(movieTitle).toBeInTheDocument();
        expect(moviePublic).toBeInTheDocument();
        expect(randomImg).toBeInTheDocument();
        expect(simmilarPicksTitle).toBeInTheDocument();
        expect(choosemeButton).toBeInTheDocument();
        expect(skipButton).toBeInTheDocument();
        expect(choosemeButton).toBeInTheDocument();
        
      });

    it('It sshould display a "back button" when an error is found', () => {
        render(
            <MemoryRouter>
                <ResultPage
                    name={name}
                    data={data}
                    randomActivity={randomActivity}
                    determineRandomActivity={determineRandomActivity}
                    error={error}
                />
            </MemoryRouter>
        )

        const backButton = screen.getByText('back');
        
        expect(backButton).toBeInTheDocument();
        
      });
    it('It should display information about other activities', () => {
        render(
            <MemoryRouter>
                <ResultPage
                    name={name}
                    data={data}
                    randomActivity={randomActivity}
                    determineRandomActivity={determineRandomActivity}
                    error={''}
                />
            </MemoryRouter>
        )

        const cardTitle = screen.getByText('The Witches');
        const cardDate = screen.getByRole('heading', { name: /2020\-10\-22/i })
        const cardDetails = screen.getByText( 'AdventureComedyFamilyFantasyHorror' )


        expect(cardTitle).toBeInTheDocument()
        expect(cardDate).toBeInTheDocument()
        expect(cardDetails).toBeInTheDocument()
        
        
      });

      it('It should display information about other activities', () => {
        render(
            <MemoryRouter>
                <ResultPage
                    name={name}
                    data={data}
                    randomActivity={randomActivity}
                    determineRandomActivity={determineRandomActivity}
                    error={''}
                />
            </MemoryRouter>
        )

        const cardTitle = screen.getByText('The Witches');
        const cardDate = screen.getByRole('heading', { name: /2020\-10\-22/i })
        const cardDetails = screen.getByText( 'AdventureComedyFamilyFantasyHorror' )

        expect(cardTitle).toBeInTheDocument()
        expect(cardDate).toBeInTheDocument()
        expect(cardDetails).toBeInTheDocument()
        
      });
      
      it('When the user click on the skip button, a new activity should display on the page', async() => {
        render(
            <MemoryRouter>
                <ResultPage
                    name={name}
                    data={data}
                    randomActivity={randomActivity}
                    determineRandomActivity={determineRandomActivity}
                    error={''}
                />
            </MemoryRouter>
        )
        
        const banner = screen.getByRole('heading', { name: /finally, here is a suggestion for you!/i })
        const movieTitle = screen.getByText('Harry Potter and the Prisoner of Azkaban');
        const moviePublic = screen.getByText('PG');
        const randomImg = screen.getByRole('img');
        const simmilarPicksTitle = screen.getByRole('heading', { name: /simmilar picks/i });
        const choosemeButton = screen.getByRole('button', { name: /choose me!/i });
        const skipButton = screen.getByRole('button', { name: /skip/i });

        expect(banner).toBeInTheDocument();
        expect(movieTitle).toBeInTheDocument();
        expect(moviePublic).toBeInTheDocument();
        expect(randomImg).toBeInTheDocument();
        expect(simmilarPicksTitle).toBeInTheDocument();
        expect(choosemeButton).toBeInTheDocument();
        expect(skipButton).toBeInTheDocument();
        expect(choosemeButton).toBeInTheDocument();

        userEvent.click(skipButton);
        expect(determineRandomActivity).toHaveBeenCalled();

        const movieTitle2  =  await waitFor(() => screen.getByText('Corpse Bride'))
        const moviePublic2  =  await waitFor(() => screen.getByText('PG'))
        const randomImg2 = await waitFor(() => screen.getByRole('img'));
        const simmilarPicksTitle2 = screen.getByRole('heading', { name: /simmilar picks/i });
        const choosemeButton2 = screen.getByRole('button', { name: /choose me!/i });
        const skipButton2 = screen.getByRole('button', { name: /skip/i });

        expect(movieTitle2).toBeInTheDocument();
        expect(moviePublic2).toBeInTheDocument();
        expect(randomImg2).toBeInTheDocument();
        expect(simmilarPicksTitle2).toBeInTheDocument();
        expect(choosemeButton2).toBeInTheDocument();
        expect(skipButton2).toBeInTheDocument();
        expect(choosemeButton2).toBeInTheDocument();

    });
});
