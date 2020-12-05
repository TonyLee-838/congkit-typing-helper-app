import React from "react";
import { render } from "@testing-library/react";

import HintBox from "../HintBox";

describe("HintBox component", () => {
  let hints: string[];
  beforeEach(() => {
    hints = ["a", "a"];
  });
  it("should take an array of character and render them into a span element.", () => {
    const renderer = render(<HintBox hints={hints} />);
    const hintsContainerEl = renderer.container.firstChild;

    expect(hintsContainerEl).toBeInstanceOf(HTMLDivElement);

    const hintEl = hintsContainerEl?.childNodes[0];
    expect(hintEl).toBeInstanceOf(HTMLSpanElement);
    expect(hintEl?.textContent).toEqual("a");
  });
});
