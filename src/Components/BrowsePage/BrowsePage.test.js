import React from "react";
import { BrowsePage } from "./BrowsePage";
import { render, screen } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'
import "@testing-library/jest-dom";

describe.only("BrowsePage", () => {
    it("Should load with a list of activities", () => {
        render(<MemoryRouter><BrowsePage name={"boardGames"} data={[{song_title: 'Test Song'}]}/></MemoryRouter>);
        expect(screen.getByText('Test Song')).toBeInTheDocument();
    screen.debug()
    });
});
