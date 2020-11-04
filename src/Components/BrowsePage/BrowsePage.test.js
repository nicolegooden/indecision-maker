import React from "react";
import { BrowsePage } from "./BrowsePage";
import { render, screen } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'
import "@testing-library/jest-dom";



describe.only("BrowsePage", () => {
    it("Should load with activities", () => {
        render(<MemoryRouter><BrowsePage name={"music"} data={[{song_title: 'Test Song'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Song')).toBeInTheDocument();
    });

    it("Bord Games should load with game images", () => {
        render(<MemoryRouter><BrowsePage name={"boardGames"} data={[{name: 'Test Game', image: 'boardTestURL'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Game')).toBeInTheDocument();
        expect(screen.getByTestId('image-test')).toHaveProperty('src', 'http://localhost//boardTestURL');
    });

    it("Movies should load with poster images", () => {
        render(<MemoryRouter><BrowsePage name={"movies"} data={[{title: 'Test Movie', image_poster: 'movieTestURL'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Movie')).toBeInTheDocument();
        expect(screen.getByTestId('image-test')).toHaveProperty('src', 'http://localhost//movieTestURL')
        screen.debug()
    });
});
