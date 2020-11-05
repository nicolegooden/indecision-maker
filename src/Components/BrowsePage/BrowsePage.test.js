import React from "react";
import { BrowsePage } from "./BrowsePage";
import { render, screen, waitFor } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'
import "@testing-library/jest-dom";
import {getAllMovies, getAllBoardGames, getAllCardGames, getAllMusic, getAllPodcasts} from "../../apiCalls.js";
jest.mock("../../apiCalls.js");

describe("BrowsePage", () => {
    it("Podcasts should load with podcast art and title", async () => {
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

    it("Music should load with album cover and title", async () => {
        let testResults;
        let musicResults = getAllMusic.mockResolvedValue([{
          song_title: "Poker Face",
          image_100: "musicURL"
        }]);
        await waitFor(async () => testResults = await musicResults())
        render(<MemoryRouter><BrowsePage name={"music"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('Poker Face')).toBeInTheDocument();
        expect(screen.getByAltText('Poker Face')).toBeInTheDocument();
    });

    it("Movies should load with movie poster and title", async () => {
        let testResults;
        let movieResults = getAllMovies.mockResolvedValue([{
          song_title: "Harry Potter",
          image_100: "movieURL"
        }]);
        await waitFor(async () => testResults = await movieResults())
        render(<MemoryRouter><BrowsePage name={"movies"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('Harry Potter')).toBeInTheDocument();
        expect(screen.getByAltText('Harry Potter')).toBeInTheDocument();
    });

    it("Board Games should load with game image and title", async () => {
        let testResults;
        let boardResults = getAllBoardGames.mockResolvedValue([{
          name: "Jenga",
          image: "boardURL"
        }]);
        await waitFor(async () => testResults = await boardResults())
        render(<MemoryRouter><BrowsePage name={"movies"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('Jenga')).toBeInTheDocument();
        expect(screen.getByAltText('Jenga')).toBeInTheDocument();
    });

    it.skip("Card Games should load with a name and min / max players", async () => {
        let testResults;
        let cardResults = getAllCardGames.mockResolvedValue([{
          name: "Rummy",
          min_players: "2",
          max_players: "4"
        }]);
        await waitFor(async () => testResults = await cardResults())
        render(<MemoryRouter><BrowsePage name={"movies"} data={testResults}/></MemoryRouter>);
        expect(screen.getByText('Rummy')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
    });

});
