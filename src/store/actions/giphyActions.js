import * as constants from "../constants";
import * as actions from "./index";
import * as giphy from "../../api/get-giphy";

export const setitemsArray = itemsArray => {
  return {
    type: constants.SET_RESULT_ITEMS,
    itemsArray
  };
};

export const setGiphyType = giphyType => {
  return {
    type: constants.SET_GIPHY_TYPE,
    giphyType
  };
};

export const getGiphySearch = (searchText, giphyType) => {
  return dispatch =>
    Promise.resolve(giphy.getGiphySearch(searchText, giphyType))
      .then(res => dispatch(setitemsArray(res)))
      .catch(error => dispatch(actions.setError(error)));
};

export const getGiphyTrending = giphyType => {
  return dispatch =>
    Promise.resolve(giphy.getGiphyTrending(giphyType))
      .then(res => dispatch(setitemsArray(res)))
      .catch(error => dispatch(actions.setError(error)));
};
