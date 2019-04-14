import GphApiClient from "giphy-js-sdk-core";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const client = GphApiClient(API_KEY);

export const getGiphySearch = (searchText = "cats", type = "gifs") =>
  client
    .search(type, { q: searchText, lang: "en" })
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));

export const getGiphyTrending = (type = "gifs") =>
  client
    .trending(type, {})
    .then(response => Promise.resolve(response.data))
    .catch(err => Promise.reject(err));
