import { expect } from "chai";
import searchReducer, { initialState } from "../searchReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).to.deep.equal({
      gifsArray: []
    });
  });

  it("should react to SET_REF_SYMBOLS", () => {
    action = actions.setGiphySearch(["test"]);
    actualResult = searchReducer(initialState, action);
    expectedResult = {
      ...initialState,
      gifsArray: ["test"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
