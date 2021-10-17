import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";
import { App } from "./App";

describe("Shows Links", () => {
  describe("when loading", () => {
    it("should render LinkItem only", () => {
      const app = shallow(<App />);
      expect(app).to.exist;
    });
  });
});
