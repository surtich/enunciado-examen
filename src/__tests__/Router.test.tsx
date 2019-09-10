import { waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import App from "../App";
import { renderRouter } from "../utils/tests";

test("app renders rooms and home and I can navigate to those pages", async () => {
  const { getByTestId, queryByTestId, history } = renderRouter(<App />);
  expect(getByTestId("home-page")).toBeInTheDocument();
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();

  history.push("/rooms");
  await waitForElement(() => getByTestId("rooms-page"));
  expect(queryByTestId("home-page")).not.toBeInTheDocument();

  history.push("/rooms/1");
  await waitForElement(() => getByTestId("single-room-page"));
  expect(queryByTestId("home-page")).not.toBeInTheDocument();
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();
  expect(getByTestId("navbar")).toBeInTheDocument();
});

test("landing on a bad page shows home page", () => {
  const history = createMemoryHistory({
    initialEntries: ["/something-that-does-not-match"]
  });

  const { getByTestId, queryByTestId } = renderRouter(<App />, { history });
  expect(queryByTestId("home-page")).not.toBeInTheDocument();
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();
  expect(getByTestId("error-page")).toBeInTheDocument();
  expect(getByTestId("navbar")).toBeInTheDocument();
});

test("after click on logo navigate to home page", async () => {
  const history = createMemoryHistory({
    initialEntries: ["/rooms"]
  });

  const { getByTestId, queryByTestId } = renderRouter(<App />, { history });

  expect(queryByTestId("home-page")).not.toBeInTheDocument();
  expect(getByTestId("rooms-page")).toBeInTheDocument();

  const logo = getByTestId("logo");
  userEvent.click(logo);
  await waitForElement(() => getByTestId("home-page"));
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();
});
