import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { heroesReducer } from "./reducers/heroReducers";
import { appreciationsReducer } from "./reducers/appreciationReducers";

const reducer = combineReducers({
  heroes: heroesReducer,
  appreciations: appreciationsReducer,
});

let initiateState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initiateState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
