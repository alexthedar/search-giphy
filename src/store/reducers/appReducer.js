import * as constants from "../constants";
import { updateObject } from "../shared-utils";

export const initialState = {
  error: null,
  loading: false
};

const setError = (state, action) =>
  updateObject(state, { error: action.error.message });

const setLoading = (state, action) =>
  updateObject(state, { loading: action.loading });

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ERROR:
      return setError(state, action);
    case constants.SET_LOADING:
      return setLoading(state, action);
    default:
      return state;
  }
};

export default appReducer;
