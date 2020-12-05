import React from "react";
import { render } from "@testing-library/react";

import MemoAddButton from "../MemoAddButton";
import MemoInput from "../MemoInput";

describe("MemoAddButton component", () => {
  it("should render MemoInput component when it's editable. Otherwise it should render an Icon,", () => {
    const handleAddButtonClick = jest.fn();
    const handleSubmit = jest.fn();
    const handleCancel = jest.fn();

    const renderer = render(
      <MemoAddButton
        onAddButtonClick={handleAddButtonClick}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    );

    expect(renderer.container.firstChild).toBeInstanceOf(SVGSVGElement);

    renderer.rerender(
      <MemoAddButton
        editable
        onAddButtonClick={handleAddButtonClick}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    );

    expect(renderer.container.querySelector("input")).toBeTruthy();
  });
});
