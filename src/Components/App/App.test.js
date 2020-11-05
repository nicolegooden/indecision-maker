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

  it("First question should ask about interested activities", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("button", {name: "find activity"}));
    await waitFor(()=> expect(screen.getByText('movies')).toBeInTheDocument());
    expect(screen.getByText('podcasts')).toBeInTheDocument()
  });

  it("Second question should ask activity specific questions", async () => {
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
    expect(screen.getByText('True Crime')).toBeInTheDocument();
  });

  it("Upon submit of final answer user should see suggested activity", async () => {
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
    userEvent.click(screen.getByText("True Crime", {name: "True Crime"}));
    userEvent.click(screen.getByRole("Button", {name: "submit"}));
    expect(screen.getByTest('suggestion')).toBeInTheDocument();
  });

  it("If use selects the activity they should see more info", async () => {
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
    userEvent.click(screen.getByText("True Crime", {name: "True Crime"}));
    userEvent.click(screen.getByRole("Button", {name: "submit"}));
    await waitFor(()=> expect(screen.getByText('suggestion')).toBeInTheDocument());
    userEvent.click(screen.getByRole("suggestion", {name: "submit"}));
    await waitFor(()=> expect(screen.getByText('Enjoy it!')).toBeInTheDocument());
    expect(screen.getByText('Enjoy it!')).toBeInTheDocument();
  });

});
