import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// increment test block
test("increment count functionality", () => {
  // render the component
  render(<Counter />);

  // select the elements that you want to interact with
  const count = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");
  // interact with the elements
  fireEvent.click(incrementBtn);

  // assert the expected results
  expect(count).toHaveTextContent("1");
});

// decrement test block
test("decrement count logic", () => {
  render(<Counter />);

  // select the elements to interact
  const count = screen.getByTestId("counter");
  const decrementBtn = screen.getByTestId("decrement");

  // interact with the element
  fireEvent.click(decrementBtn);

  // assert the results of the interaction
  expect(count).toHaveTextContent("0");
});
