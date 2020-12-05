import React from "react";
// import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Key from "../Key";
import ContextProvider from "../../../stores/context";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });

jest.mock("../../../stores/context.tsx");
describe("components/keyboard/Key", () => {
  const handleActivate = jest.fn();
  const handleDeactivate = jest.fn();

  const wrapper = render(
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

  it("should render the Key component as well as its children node", () => {
    expect(wrapper.container.querySelector("#content")).not.toBeNull();
  });
});
