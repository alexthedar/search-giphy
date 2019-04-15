import { expect } from "chai";
import giphyReducer, { initialState } from "../giphyReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(giphyReducer(undefined, {})).to.deep.equal({
      itemsArray: [],
      giphyType: "",
      searchText: ""
    });
  });

  it("should react to SET_RESULT_ITEMS", () => {
    action = actions.setitemsArray(["test"]);
    actualResult = giphyReducer(initialState, action);
    expectedResult = {
      ...initialState,
      itemsArray: ["test"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it("should react to SET_GIPHY_TYPE", () => {
    action = actions.setGiphyType("test");
    actualResult = giphyReducer(initialState, action);
    expectedResult = {
      ...initialState,
      giphyType: "test"
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it("should react to SET_GIPHY_SEARCHTEXT", () => {
    action = actions.setSearchText("test");
    actualResult = giphyReducer(initialState, action);
    expectedResult = {
      ...initialState,
      searchText: "test"
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
