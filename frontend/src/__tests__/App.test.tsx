import React from "react";
import { render, screen } from "@testing-library/react";
import App from "App";

test("sample unit test", () => {
  render(<App />);
  // Nothing is tested here, just an example
  expect(1).toBe(1);
});
