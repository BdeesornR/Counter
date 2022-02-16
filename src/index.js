import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
});

const logger = (store) => {
  // logger indicated the name of the middleware
  // (store) argument represent redux's store
  return (next) => {
    // (next) argument is from the next function, originally equal to store.dispatch
    // {/* next (next) = store.dispatch */}
    // then store.dispatch equal to action function
    // {/* store.dispatch = action (action) */}
    // next function when invoked, will execute the succeeding middleware
    // if there're no succeeding middleware, next function will pass the action to the reducer
    return (action) => {
      // (action) argument represent the dispatched action
      console.log("[Middleware] Dispatching", action);
      console.log("[Middleware] next state", store.getState());
      return next(action);
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// applyMiddleware can contain more than one middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
