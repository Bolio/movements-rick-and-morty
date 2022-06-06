import React from "react";
import Text from "..";
import { render } from "@testing-library/react";

describe("Text component", () => {
  test("Should render Text component", () => {
    const { container } = render(<Text fontSize="12px" />);
    expect(container).toMatchSnapshot();
  });

  test("Should find a title", () => {
    const { getByText } = render(component);
    expect(getByText("Hello Test")).toBeInTheDocument();
  });
});
