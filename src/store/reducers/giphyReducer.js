import * as constants from "../constants";
import { updateObject } from "../shared-utils";

export const initialState = {
  itemsArray: [],
  giphyType: "",
  searchText: ""
};

const setGiphySearchText = (state, action) =>
  updateObject(state, { searchText: action.searchText });

const setGiphyType = (state, action) =>
  updateObject(state, { giphyType: action.giphyType });

const setItemsArray = (state, action) =>
  updateObject(state, { itemsArray: action.itemsArray });

const giphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_GIPHY_SEARCHTEXT:
      return setGiphySearchText(state, action);
    case constants.SET_GIPHY_TYPE:
      return setGiphyType(state, action);
    case constants.SET_RESULT_ITEMS:
      return setItemsArray(state, action);
    default:
      return state;
  }
};

export default giphyReducer;
