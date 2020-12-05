import React from "react";
import { render, RenderResult } from "@testing-library/react";

import Key from "../Key";
import ContextProvider, { stores } from "../../../stores/context";

jest.mock("../../../stores/context.tsx");
describe("components/keyboard/Key", () => {
  const handleActivate = jest.fn();
  const handleDeactivate = jest.fn();
  const { globalStateStore } = stores;

  let renderer: RenderResult;
  beforeEach(() => {
    renderer = render(
      <ContextProvider>
        <Key
          isActive={false}
          onActivate={handleActivate}
          onDeactivate={handleDeactivate}
        >
          <div id="content" />
        </Key>
      </ContextProvider>
    );
  });

  it("should render the Key component as well as its children node", () => {
    expect(renderer.container.querySelector("#content")).toBeTruthy();
  });

  it("should change the theme accordingly.", () => {
    const KeyContainer = renderer.getByRole("button");
    expect(KeyContainer.className).toMatch(/light/);

    globalStateStore.toggleDarkMode();
    expect(KeyContainer.className).toMatch(/dark/);
  });
});
