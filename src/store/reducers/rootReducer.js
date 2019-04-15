import { combineReducers } from "redux";
import giphy from "./giphyReducer";
import app from "./appReducer";

const rootReducer = combineReducers({ giphy, app });

export default rootReducer;
