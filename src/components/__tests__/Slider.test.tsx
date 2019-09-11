import { render, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Slider from "../Slider";

const items = new Array(3).fill(0).map((_, i) => ({
  id: i + 1,
  item: <div data-testid={`item-${i + 1}`}>Item {i + 1}</div>
}));
test("if slider move the items", async () => {
  const { getByTestId, queryByTestId } = render(
    <Slider size={2} items={items} />
  );
  const left = getByTestId("slider-left");
  const right = getByTestId("slider-right");

  await waitForElement(() => getByTestId("item-1"));
  expect(getByTestId("item-2")).toBeInTheDocument();
  expect(queryByTestId("item-3")).not.toBeInTheDocument();

  userEvent.click(right);
  await waitForElement(() => getByTestId("item-3"));
  expect(getByTestId("item-2")).toBeInTheDocument();
  expect(queryByTestId("item-1")).not.toBeInTheDocument();

  userEvent.click(right);
  await waitForElement(() => getByTestId("item-1"));
  expect(getByTestId("item-3")).toBeInTheDocument();
  expect(queryByTestId("item-2")).not.toBeInTheDocument();

  userEvent.click(left);
  await waitForElement(() => getByTestId("item-2"));
  expect(getByTestId("item-3")).toBeInTheDocument();
  expect(queryByTestId("item-1")).not.toBeInTheDocument();

  userEvent.click(left);
  await waitForElement(() => getByTestId("item-1"));
  expect(getByTestId("item-2")).toBeInTheDocument();
  expect(queryByTestId("item-3")).not.toBeInTheDocument();

  userEvent.click(left);
  await waitForElement(() => getByTestId("item-3"));
  expect(getByTestId("item-1")).toBeInTheDocument();
  expect(queryByTestId("item-2")).not.toBeInTheDocument();
});
