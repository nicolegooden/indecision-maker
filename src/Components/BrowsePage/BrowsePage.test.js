import React from "react";
import { BrowsePage } from "./BrowsePage";
import { render, screen, waitFor } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'
import "@testing-library/jest-dom";
import {getAllMovies, getAllBoardGames, getAllCardGames, getAllMusic, getAllPodcasts} from "../../apiCalls.js";
jest.mock("../../apiCalls.js");

describe("BrowsePage", () => {
    it("Board Games should load with title and image", async () => {
        let testResults;
        let podcastResults = getAllPodcasts.mockResolvedValue([{
          podcast_title: "The Joe Rogan Experience",
          image_100: "podcastURL"
        }]);
        await waitFor(async () => testResults = await podcastResults())
        render(<MemoryRouter><BrowsePage name={"boardGames"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('The Joe Rogan Experience')).toBeInTheDocument();
        expect(screen.getByAltText('The Joe Rogan Experience')).toBeInTheDocument();
    });

    it.only("Music should load with Album cover and title", async () => {
        let testResults;
        let musicResults = getAllMovies.mockResolvedValue([{
          song_title: "Poker Face",
          image_100: "musicURL"
        }]);
        await waitFor(async () => testResults = await musicResults())
        render(<MemoryRouter><BrowsePage name={"music"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('Poker Face')).toBeInTheDocument();
        expect(screen.getByAltText('Poker Face')).toBeInTheDocument();
    });

    it("Movies should load with poster images", () => {
        render(<MemoryRouter><BrowsePage name={"movies"} data={[{title: 'Test Movie', image_poster: 'movieTestURL'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Movie')).toBeInTheDocument();
        expect(screen.getByTestId('image-test')).toHaveProperty('src', 'http://localhost/movieTestURL')
    });
});
