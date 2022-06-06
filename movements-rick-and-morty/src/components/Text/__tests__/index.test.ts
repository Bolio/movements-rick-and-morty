import React from "react";
import Text from "..";
import { TextProps } from "../types";
import { render } from "@testing-library/react";

describe("Text component", () => {
  const component = <Text fontSize="12px" />;

  test("Should render Text component", () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  test("Should find a title", () => {
    const { getByText } = render(component);
    expect(getByText("Hello Test")).toBeInTheDocument();
  });
});
