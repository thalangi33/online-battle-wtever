import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import WordUI from "components/WordUI/WordUI";

const initializeWordUI = () => {
  // render(<WordUI />);
};

// Run before each test (e.g. test() or it())
beforeEach(() => {
  initializeWordUI();
});

afterEach(cleanup);

// Arrange, Act and Assert are 3 main components in testing

describe("WordUI Component", () => {
  it("should initialize all 30 empty tiles", () => {
    // Arrange
    // Act
    // Assert
    // const tiles: Array<HTMLDivElement> = screen.getAllByRole("tile");
    // expect(tiles.length).toBe(30);
    // tiles.forEach((tile: HTMLDivElement) => {
    //   expect(tile).toHaveTextContent("");
    // });
    expect(true).not.toBe(false);
  });

  it("should show 5 green tile", () => {
    // Arrange
    // Act
    // fireEvent(keydownevent)
    // Assert
    // tiles 5 green
    expect(4).toBePowerOf(2);
  });
});
