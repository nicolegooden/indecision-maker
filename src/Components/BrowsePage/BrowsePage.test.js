import React from "react";
import { BrowsePage } from "./BrowsePage";
import { render, screen, waitFor } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'
import "@testing-library/jest-dom";
import {getAllMovies, getAllBoardGames, getAllCardGames, getAllMusic, getAllPodcasts} from "../../apiCalls.js";
jest.mock("../../apiCalls.js");


describe("BrowsePage", () => {
    it.only("Should load with activities", async () => {
        let podcastResults = getAllPodcasts.mockResolvedValue([{
          podcast_title: "The Joe Rogan Experience",
          image_100: "podcastURL"
        }]);
        let testResults;
        await waitFor(async () => testResults = await podcastResults())
        render(<MemoryRouter><BrowsePage name={"boardGames"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('The Joe Rogan Experience')).toBeInTheDocument();
    });

    it("Bord Games should load with game images", () => {
        render(<MemoryRouter><BrowsePage name={"boardGames"} data={[{name: 'Test Game', image: 'boardTestURL'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Game')).toBeInTheDocument();
        expect(screen.getByTestId('image-test')).toHaveProperty('src', 'http://localhost/boardTestURL');
    });

    it("Movies should load with poster images", () => {
        render(<MemoryRouter><BrowsePage name={"movies"} data={[{title: 'Test Movie', image_poster: 'movieTestURL'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Movie')).toBeInTheDocument();
        expect(screen.getByTestId('image-test')).toHaveProperty('src', 'http://localhost/movieTestURL')
    });
});
