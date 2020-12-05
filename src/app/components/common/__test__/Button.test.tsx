import React from "react";
import { render, act } from "@testing-library/react";

import Button from "../Button";

describe("Button component", () => {
  const handleClick = jest.fn();
  it("should render button with proper attributes.", () => {
    const ButtonEl = render(
      <Button
        className={"test-className"}
        disable={false}
        label="button"
        onClick={handleClick}
        theme={"default"}
        role="button"
      />
    ).getByRole("button");

    expect(ButtonEl.className).toMatch(/test-className/);
    expect(ButtonEl.innerHTML).toEqual("button");
  });

  it("tests default values of the Button component.", () => {
    const ButtonEl = render(
      <Button onClick={handleClick} role="button" />
    ).getByRole("button");
    expect(ButtonEl.className).toBeTruthy();
    expect(ButtonEl.innerHTML).toBe("");
  });

  it("tests component's click event handler based on whether it is active or not.", () => {
    const renderer = render(<Button onClick={handleClick} role="button" />);
    const ButtonEl = renderer.getByRole("button");

    act(() => {
      ButtonEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleClick).toBeCalledTimes(1);

    renderer.rerender(<Button onClick={handleClick} role="button" disable />);

    act(() => {
      ButtonEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleClick).toBeCalledTimes(1);
  });
});
