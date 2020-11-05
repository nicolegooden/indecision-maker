import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Homepage } from "./Homepage";
import { MemoryRouter } from 'react-router-dom'
import "@testing-library/jest-dom";

describe("BrowsePage", () => {
    it("User should see links to view different activity categories", () => {
      render(<MemoryRouter><Homepage /></MemoryRouter>);
      expect(screen.getByRole('link', {name: 'Podcasts'})).toBeInTheDocument()
      expect(screen.getByRole('link', {name: 'Board Games'})).toBeInTheDocument()
      expect(screen.getByRole('link', {name: 'Card Games'})).toBeInTheDocument()
      expect(screen.getByRole('link', {name: 'Movies'})).toBeInTheDocument()
      expect(screen.getByRole('link', {name: 'Music'})).toBeInTheDocument()
    });

    it("User should see button to start activity questions", () => {
      render(<MemoryRouter><Homepage /></MemoryRouter>);
      expect(screen.getByRole('button', {name: 'find activity'})).toBeInTheDocument()
    });

    it("User Should see Activity component", () => {
      render(<MemoryRouter><Homepage /></MemoryRouter>);
      expect(screen.getByText(/A man can learn/i)).toBeInTheDocument()
      expect(screen.getByText(/make him an offer/i)).toBeInTheDocument()
      expect(screen.getByText(/Don\'t bore people/i)).toBeInTheDocument()
      expect(screen.getByText(/Life is not a matter/i)).toBeInTheDocument()
      expect(screen.getByText(/Music is the language/i)).toBeInTheDocument()
    });

    it("User should see the footer ", () => {
      render(<MemoryRouter><Homepage /></MemoryRouter>);
      expect(screen.getByText('What activities interest you?')).toBeInTheDocument()
      expect(screen.getByText('Games')).toBeInTheDocument()
      expect(screen.getByText('Maybe?')).toBeInTheDocument()
    });

});
