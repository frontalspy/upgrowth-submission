import React from "react";
import { App } from "../App";
import {render} from "@testing-library/react";

describe("Shows Links", () => {
  describe("when loading", () => {
    it("should render LinkItem only", () => {
      render(<App />);
    });
  });
});
