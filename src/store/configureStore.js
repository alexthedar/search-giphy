import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger"; // eslint-disable-line import/no-extraneous-dependencies
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const middlewares = [thunk];
// add any development specific middleware below
// Uncomment the following code to enable verbose Redux logging for diagnosing Redux issues
if (process.env.NODE_ENV === "development") {
  const logger = createLogger(); // eslint-disable-line no-unused-vars
  middlewares.push(logger);
}

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

export const store = configureStore();
