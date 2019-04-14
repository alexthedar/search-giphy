import { combineReducers } from "redux";
import search from "./searchReducer";
import app from "./appReducer";

const rootReducer = combineReducers({ search, app });

export default rootReducer;
