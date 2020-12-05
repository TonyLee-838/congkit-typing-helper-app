import React from "react";
import { render } from "@testing-library/react";

import ExpandableDiv from "../ExpandableDiv";
import ContextProvider from "../../../stores/context";
jest.mock("../../../stores/context.tsx");

describe("ExpandableDiv component", () => {
  it("should render child component when it's expanded. Otherwise, it doesn't render anything.", () => {
    const renderer = render(
      <ContextProvider>
        <ExpandableDiv expanded={true}>
          <div id="content" />
        </ExpandableDiv>
      </ContextProvider>
    );

    expect(renderer.container.querySelector("#content")).toBeTruthy();

    renderer.rerender(
      <ExpandableDiv>
        <div id="content" />
      </ExpandableDiv>
    );
    expect(renderer.container.querySelector("#content")).toBeFalsy();
  });
});
