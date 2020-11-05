import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("User should see home page by default", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Indecision")).toBeInTheDocument();
  });

  it("User should be presented with first set of questions when clicking find activity", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("button", {name: "find activity"}));
    await waitFor(()=> expect(screen.getByText('movies')).toBeInTheDocument());
    expect(screen.getByText('podcasts').toBeInTheDocument)
  });

  it("User should answer specific questions for their selected genre", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("button", {name: "find activity"}));
    await waitFor(()=> expect(screen.getByText('movies')).toBeInTheDocument());
    userEvent.click(screen.getByText("podcasts", {name: "podcasts"}));
    userEvent.click(screen.getByRole("button", {name: "next"}));
    await waitFor(()=> expect(screen.getByText('True Crime')).toBeInTheDocument());
  });
});
