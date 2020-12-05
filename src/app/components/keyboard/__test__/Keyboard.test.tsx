import React from "react";
import { render, RenderResult, act } from "@testing-library/react";

import Keyboard from "../Keyboard";
import ContextProvider, { stores } from "../../../stores/context";
jest.mock("../../../stores/context.tsx");
describe("Keyboard component", () => {
  const { keyStore, globalStateStore } = stores;
  const renderer = render(
    <ContextProvider>
      <Keyboard />
    </ContextProvider>
  );
  const KeyboardContainer = renderer.container;
  const keyDown = () => {
    act(() => {
      KeyboardContainer.dispatchEvent(
        new KeyboardEvent("keydown", { bubbles: true, key: "a" })
      );
    });
  };
  const KeyUp = () => {
    act(() => {
      KeyboardContainer.dispatchEvent(
        new KeyboardEvent("keyup", { bubbles: true })
      );
    });
  };

  it("tests subscription and unsubscription logic when the component mounts", () => {
    keyDown();
    expect(keyStore.activeKey).toBe("a");

    KeyUp();
    expect(keyStore.activeKey).toBe("");

    globalStateStore.toggleSidebarExpansion();

    renderer.rerender(
      <ContextProvider>
        <Keyboard />
      </ContextProvider>
    );

    keyDown();
    expect(keyStore.activeKey).toBe("");

    KeyUp();
    expect(keyStore.activeKey).toBe("");
  });
});
