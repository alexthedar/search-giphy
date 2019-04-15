import * as constants from "../constants";
import { updateObject } from "../shared-utils";

export const initialState = {
  searchArray: [],
  trendingArray: []
};

const setTrendingArray = (state, action) =>
  updateObject(state, { trendingArray: action.trendingArray });

const setSearchArray = (state, action) =>
  updateObject(state, { searchArray: action.searchArray });

const giphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TRENDING_RESULTS:
      return setTrendingArray(state, action);
    case constants.SET_SEARCH_RESULTS:
      return setSearchArray(state, action);
    default:
      return state;
  }
};

export default giphyReducer;
