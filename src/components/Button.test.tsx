// src/components/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { expect, test, vitest } from "vitest";

test("Button renders and handles click", () => {
  const handleClick = vitest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
