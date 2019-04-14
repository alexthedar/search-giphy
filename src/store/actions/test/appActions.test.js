import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  app: {
    error: '',
    loading: false
  }
});

describe("AppActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  describe("setError action creator", () => {
    it("should create an action to set error data", () => {
      const error = {message: 'error'};
      actualResult = actions.setError(error);
      expectedResult = {
        type: constants.SET_ERROR,
        error
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setLoading action creator", () => {
    it("should create an action to set isFetching top data", () => {
      const loading = true;
      actualResult = actions.setLoading(loading);
      expectedResult = {
        type: constants.SET_LOADING,
        loading
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });
});
