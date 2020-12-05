import React from "react";
import { render, RenderResult, act } from "@testing-library/react";

import CharacterKeys from "../CharacterKeys";
import ContextProvider from "../../../stores/context";
import { stores } from "../../../stores/context";

jest.mock("../../../stores/context.tsx");

describe("CharacterKeys component", () => {
  let renderer: RenderResult;
  beforeEach(() => {
    stores.keyStore.clearActiveKey();

    renderer = render(
      <ContextProvider>
        <CharacterKeys />
      </ContextProvider>
    );
  });

  it("should render 26 character keys in 3 columns as well as two function keys", () => {
    expect(
      renderer.container.querySelectorAll(".keyboardColumn-0-2-2").length
    ).toBe(3);
    expect(
      renderer.container.querySelectorAll(".characterKeys-0-2-3").length
    ).toBe(26);
    expect(
      renderer.container.querySelector(".functionKeys-0-2-38")?.children.length
    ).toBe(2);
  });

  it("should render HintBox component for the key that is being pressed.", () => {
    const { keyStore } = stores;
    keyStore.setActiveKey("q");
    expect(
      renderer.container.querySelectorAll(".hint-0-2-71").length
    ).toBeGreaterThan(0);
  });

  it("should call event handler properly when the user clicks.", () => {
    const { keyStore } = stores;

    const KeyEl = renderer.container.querySelector(
      ".characterKeys-0-2-3 > div"
    );

    act(() => {
      KeyEl?.dispatchEvent(
        new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true,
          composed: true,
        })
      );
    });
    expect(keyStore.activeKey).toEqual("Q");

    act(() => {
      KeyEl?.dispatchEvent(
        new MouseEvent("mouseup", {
          bubbles: true,
          cancelable: true,
          composed: true,
        })
      );
    });
    expect(keyStore.activeKey).toEqual("");
  });
});
