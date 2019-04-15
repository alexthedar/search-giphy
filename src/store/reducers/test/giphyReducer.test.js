import { expect } from "chai";
import giphyReducer, { initialState } from "../giphyReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(giphyReducer(undefined, {})).to.deep.equal({
      gifsArray: []
    });
  });

  it("should react to SET_REF_SYMBOLS", () => {
    action = actions.setGiphySearch(["test"]);
    actualResult = giphyReducer(initialState, action);
    expectedResult = {
      ...initialState,
      gifsArray: ["test"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
