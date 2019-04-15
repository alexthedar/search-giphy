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

export const setSearchText = searchText => {
  return {
    type: constants.SET_GIPHY_SEARCHTEXT,
    searchText
  };
};

export const getGiphySearch = (searchText, giphyType) => {
  return dispatch => {
    dispatch(actions.setLoading(true));
    return Promise.resolve(giphy.getGiphySearch(searchText, giphyType))
      .then(res => {
        dispatch(setSearchText(searchText));
        dispatch(setGiphyType(giphyType));
        dispatch(setitemsArray(res));
        return dispatch(actions.setLoading(false));
      })
      .catch(error => {
        dispatch(actions.setError(error));
        return dispatch(actions.setLoading(false));
      });
  };
};

export const getGiphyTrending = giphyType => {
  return dispatch => {
    dispatch(actions.setLoading(true));
    return Promise.resolve(giphy.getGiphyTrending(giphyType))
      .then(res => {
        dispatch(setSearchText(""));
        dispatch(setGiphyType(giphyType));
        dispatch(setitemsArray(res));
        return dispatch(actions.setLoading(false));
      })
      .catch(error => {
        dispatch(actions.setError(error));
        return dispatch(actions.setLoading(false));
      });
  };
};
