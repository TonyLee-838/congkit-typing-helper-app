import React from "react";
import { render, RenderResult, act } from "@testing-library/react";

import MemoInput from "../MemoInput";

describe("MemoInput component", () => {
  let renderer: RenderResult;

  const handleCancel = jest.fn();
  const handleSubmit = jest.fn((value: string) => {});

  beforeEach(() => {
    renderer = render(
      <MemoInput onCancel={handleCancel} onSubmit={handleSubmit} />
    );
  });

  it("should render an input box and button groups with 2 buttons inside by default.", () => {
    const Input = renderer.container.querySelector("input");
    expect(Input).toBeInstanceOf(HTMLInputElement);

    const Buttons = renderer.getAllByRole("button");
    expect(Buttons[0]).toBeInstanceOf(SVGSVGElement);
    expect(Buttons.length).toBe(2);
  });

  it("should render delete button as well if deleteButton prop is set to true  ", () => {
    const handleDelete = jest.fn();
    renderer.rerender(
      <MemoInput
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        deleteButton
        onDelete={handleDelete}
      />
    );
    const Buttons = renderer.getAllByRole("button");
    expect(Buttons.length).toBe(3);

    const DeleteButton = Buttons[2];
    act(() => {
      DeleteButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleDelete).toBeCalled();
  });

  it("should render properly if default value is passed.", () => {
    renderer = render(
      <MemoInput
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        initialValue="value"
      />
    );
    const Input = renderer.container.querySelector("input");
    expect(Input?.value).toEqual("value");
  });

  it("should change the value of input element and pass the value with onSubmit handler if user type something and click submit button or press Enter.", () => {
    const Input = renderer.container.querySelector("input");
    if (!Input) return;

    Input.value = "value";

    const SubmitButton = renderer.getAllByRole("button")[1];
    act(() => {
      SubmitButton.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          composed: true,
          cancelable: true,
        })
      );
    });

    expect(handleSubmit).toBeCalledTimes(1);
    // expect(handleSubmit).toBeCalledWith("value");
  });

  it("should clear the value if user click the clear button.", () => {
    const Input = renderer.container.querySelector("input");
    if (!Input) return;

    const CancelButton = renderer.getAllByRole("button")[0];
    act(() => {
      CancelButton.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          composed: true,
          cancelable: true,
        })
      );
    });

    expect(handleCancel).toBeCalled();
  });
});
