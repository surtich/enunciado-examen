import { waitForElement } from "@testing-library/react";
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
});

test("landing on a bad page shows home page", () => {
  const history = createMemoryHistory({
    initialEntries: ["/something-that-does-not-match"]
  });

  const { queryByTestId } = renderRouter(<App />, { history });
  expect(queryByTestId("home-page")).not.toBeInTheDocument();
  expect(queryByTestId("rooms-page")).not.toBeInTheDocument();
});
