import { render, waitForElement } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router";
import App from "../App";

test("app renders rooms and home and I can navigate to those pages", async () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByTestId("home-page")).toBeInTheDocument();
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();

  history.push("/rooms");
  await waitForElement(() => getByTestId("rooms-page"));
  expect(queryByTestId("home-page")).toBeInTheDocument();
});

test("landing on a bad page shows home page", () => {
  const history = createMemoryHistory({
    initialEntries: ["/something-that-does-not-match"]
  });
  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByTestId("home-page")).toBeInTheDocument();
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();
});
