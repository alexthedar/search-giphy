import * as constants from "../constants";

export const setLoading = loading => {
  return {
    type: constants.SET_LOADING,
    loading
  };
};

export const setError = error => {
  return {
    type: constants.SET_ERROR,
    error
  };
};
