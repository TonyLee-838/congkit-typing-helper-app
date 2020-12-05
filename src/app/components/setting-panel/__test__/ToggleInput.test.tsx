import React, { MouseEventHandler } from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToggleInput from "../ToggleInput";

describe("ToggleInput component", () => {
  let handleToggle: MouseEventHandler;
  let renderer: RenderResult;
  let on: boolean;
  beforeEach(() => {
    handleToggle = jest.fn(() => {
      on = !on;
    });
    on = false;
    renderer = render(
      <ToggleInput label="toggle" on={on} onToggle={handleToggle} />
    );
  });

  it("should render label, backgroundContainer and slider", () => {
    const labelEl = renderer.getByText("toggle");
    expect(labelEl).toBeInstanceOf(HTMLLabelElement);
    expect(labelEl.innerHTML).toEqual("toggle");

    const backgroundContainerEl = renderer.container.querySelector(
      ".input-0-2-4"
    );
    expect(backgroundContainerEl).toBeInstanceOf(HTMLDivElement);

    const toggleEl = renderer.getByRole("button");
    expect(toggleEl).toBeInstanceOf(HTMLSpanElement);
  });

  it("should change the state of toggleInput when user clicks it.", () => {
    userEvent.click(renderer.getByRole("button"));

    expect(handleToggle).toBeCalledTimes(1);
    expect(on).toBe(true);

    userEvent.click(renderer.getByRole("button"));
    expect(handleToggle).toBeCalledTimes(2);
    expect(on).toBe(false);
  });
});
