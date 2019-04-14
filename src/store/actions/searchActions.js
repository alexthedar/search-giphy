import * as constants from "../constants";
import * as actions from "./index";
import * as giphy from "../../api/get-giphy";

export const setGiphySearch = searchArray => {
  return {
    type: constants.SET_SEARCH_RESULTS,
    searchArray
  };
};

export const getGiphySearch = searchText => {
  return dispatch =>
    Promise.resolve(giphy.getGiphySearch(searchText))
      .then(res => dispatch(setGiphySearch(res)))
      .catch(error => dispatch(actions.setError(error)));
};

export const setGiphyTrending = trendingArray => {
  return {
    type: constants.SET_TRENDING_RESULTS,
    trendingArray
  };
};

export const getGiphyTrending = () => {
  return dispatch =>
    Promise.resolve(giphy.getGiphyTrending())
      .then(res => dispatch(setGiphyTrending(res)))
      .catch(error => dispatch(actions.setError(error)));
};
