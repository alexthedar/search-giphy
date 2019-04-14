import * as constants from "../constants";
import { updateObject } from "../shared-utils";

export const initialState = {
  gifsArray: [],
};

const setGifsArray = (state, action) =>
  updateObject(state, { gifsArray: action.gifsArray });

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_RESULTS:
      return setGifsArray(state, action);
    default:
      return state;
  }
};

export default searchReducer;
