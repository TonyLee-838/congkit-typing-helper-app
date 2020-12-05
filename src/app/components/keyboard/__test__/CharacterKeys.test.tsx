import React from "react";
// import Enzyme, { shallow, render } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";

import CharacterKeys from "../CharacterKeys";
import ContextProvider from "../../../stores/context";

// Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../../stores/context.tsx");

describe("CharacterKeys component", () => {
  it("should render 26 character keys in 3 columns as well as two function keys", () => {
    const wrapper = render(
      <ContextProvider>
        <CharacterKeys />
      </ContextProvider>
    );
    expect(
      wrapper.container.querySelectorAll(".keyboardColumn-0-2-2").length
    ).toBe(3);
    expect(
      wrapper.container.querySelectorAll(".characterKeys-0-2-3").length
    ).toBe(26);
  });
});
