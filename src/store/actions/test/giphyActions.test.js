import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as giphy from "../../../api/get-giphy";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  giphy: {
    itemsArray: [],
    giphyType: "",
    searchText: ""
  }
});
const error = { message: "error" };
jest.mock("../../../api/get-giphy");

const mockReturnArray = [{ id: 1, slug: "i am a gif" }];
const mockSearch = "dogs";
const mockType = "gifs";

describe("giphyActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  describe("setitemsArray action creator", () => {
    it("should create an action to set items array", () => {
      actualResult = actions.setitemsArray(mockReturnArray);
      expectedResult = {
        type: constants.SET_RESULT_ITEMS,
        itemsArray: mockReturnArray
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setGiphyType action creator", () => {
    it("should create an action to set the type", () => {
      actualResult = actions.setGiphyType(mockType);
      expectedResult = {
        type: constants.SET_GIPHY_TYPE,
        giphyType: mockType
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setSearchText action creator", () => {
    it("should create an action to set the searchText", () => {
      actualResult = actions.setSearchText(mockSearch);
      expectedResult = {
        type: constants.SET_GIPHY_SEARCHTEXT,
        searchText: mockSearch
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("getGiphySearch action creator", () => {
    it("should retrieve search from giphy API then set in state", () => {
      giphy.getGiphySearch.mockResolvedValue(mockReturnArray);
      return store
        .dispatch(actions.getGiphySearch(mockSearch, mockType))
        .then(() => {
          actualResult = store.getActions();
          expectedResult = [
            actions.setLoading(true),
            actions.setSearchText(mockSearch),
            actions.setGiphyType(mockType),
            actions.setitemsArray(mockReturnArray),
            actions.setLoading(false)
          ];
          return expect(actualResult).to.deep.equal(expectedResult);
        });
    });

    it("should trigger failure actions creator if rejected", () => {
      giphy.getGiphySearch.mockRejectedValue(error);

      return store
        .dispatch(actions.getGiphySearch(mockSearch, mockType))
        .then(() => {
          actualResult = store.getActions();
          expectedResult = [
            actions.setLoading(true),
            actions.setError(error),
            actions.setLoading(false)
          ];
          return expect(actualResult).to.deep.equal(expectedResult);
        });
    });
  });

  describe("getGiphyTrending action creator", () => {
    it("should retrieve trending from giphy API then set in state", () => {
      giphy.getGiphyTrending.mockResolvedValue(mockReturnArray);
      return store.dispatch(actions.getGiphyTrending(mockType)).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.setLoading(true),
          actions.setSearchText(""),
          actions.setGiphyType(mockType),
          actions.setitemsArray(mockReturnArray),
          actions.setLoading(false)
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      giphy.getGiphyTrending.mockRejectedValue(error);

      return store.dispatch(actions.getGiphyTrending(mockType)).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.setLoading(true),
          actions.setError(error),
          actions.setLoading(false)
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });
});
