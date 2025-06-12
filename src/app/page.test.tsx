import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";

import Home from "./page";

describe("page.tsx", () => {
  test("Home", () => {
    render(<Home />);

    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
