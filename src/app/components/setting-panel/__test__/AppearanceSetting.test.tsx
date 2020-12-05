import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AppearanceSetting from "../AppearanceSetting";
import ContextProvider from "../../../stores/context";

import { stores } from "../../../stores/context";
jest.mock("../../../stores/context.tsx");
describe("AppearanceSetting component", () => {
  describe("darkMode toggle input", () => {
    it("should change darkMode property in globalStateStore when clicking toggleInput in AppearanceSetting component.", () => {
      render(
        <ContextProvider>
          <AppearanceSetting />
        </ContextProvider>
      );
      const darkMode = stores.globalStateStore.darkMode;
      userEvent.click(screen.getByRole("button"));
      expect(stores.globalStateStore.darkMode).toEqual(!darkMode);
    });
  });
});
