import React from "react";
import Key from "../Key";
import ContextProvider from "../../../stores/context";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

jest.mock("../../../../db/api/keyInfo.js");
jest.mock("../../../../db/api/config.js");
jest.mock("../../../stores/context.tsx");
describe("components/keyboard/Key", () => {
  it("should render the Key component as well as its children node", () => {
    const handleActivate = jest.fn();
    const handleDeactivate = jest.fn();

    const wrapper = shallow(
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

    expect(wrapper.childAt(1)).toBeDefined();
    expect(wrapper.contains(<div id="content" />)).toBe(true);
  });
});
