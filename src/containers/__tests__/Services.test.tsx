import { render, waitForElement } from "@testing-library/react";
import React from "react";
import ServicesContainer from "../Services";

test("if services are fetched", async () => {
  const { getAllByTestId } = render(<ServicesContainer />);
  await waitForElement(() => getAllByTestId("service"));
});
