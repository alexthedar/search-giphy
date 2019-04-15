import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as giphy from "../../../api/get-giphy";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  market: {
    marketTops: []
  }
});
const error = { message: "error" };
jest.mock("../../../api/get-giphy");

describe("giphyActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });


  describe("setGiphySearch action creator", () => {
    it("should create an action to set stock symbols data", () => {
      const gifsArray = ["test"];
      actualResult = actions.setGiphySearch(gifsArray);
      expectedResult = {
        type: constants.SET_SEARCH_RESULTS,
        gifsArray
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("getGiphySearch action creator", () => {
    it("should set the ref symbols data in state", () => {
      giphy.getGiphySearch.mockResolvedValue([{ id: 1 }]);

      return store.dispatch(actions.getGiphySearch('text')).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.setGiphySearch([{ id: 1 }])
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      giphy.getGiphySearch.mockRejectedValue(error);

      return store.dispatch(actions.getGiphySearch('text')).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });
});
