import React from "react";
import { render, act, RenderResult } from "@testing-library/react";

import FunctionKeys from "../FunctionKeys";
import ContextProvider from "../../../stores/context";
import { stores } from "../../../stores/context";

jest.mock("../../../stores/context.tsx");

describe("FunctionKeys component", () => {
  let renderer: RenderResult;
  const { globalStateStore } = stores;
  beforeEach(() => {
    renderer = render(
      <ContextProvider>
        <FunctionKeys />
      </ContextProvider>
    );
  });

  const clickButton = (Button: HTMLElement) => {
    act(() => {
      Button.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      Button.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
    });
  };

  it("should toggle transparency when the user clicks setting transparency button", () => {
    const TransparencyButton = renderer.getAllByRole("button")[0];

    clickButton(TransparencyButton);
    expect(globalStateStore.isTransparent).toBe(false);

    clickButton(TransparencyButton);
    expect(globalStateStore.isTransparent).toBe(true);
  });

  it("should change the expansion state of Sidebar when the user clicks setting sidebar button", () => {
    const SidebarExpandButton = renderer.getAllByRole("button")[1];

    clickButton(SidebarExpandButton);
    expect(globalStateStore.isSidebarExpanded).toBe(true);

    clickButton(SidebarExpandButton);
    expect(globalStateStore.isSidebarExpanded).toBe(false);
  });
});
