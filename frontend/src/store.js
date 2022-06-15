import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { heroesReducer, heroDetailsReducer } from "./reducers/heroReducers";
import {
  appreciationsReducer,
  appreciationDetailsReducer,
} from "./reducers/appreciationReducers";
import { authReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  heroes: heroesReducer,
  heroDetails: heroDetailsReducer,
  appreciations: appreciationsReducer,
  appreciationDetails: appreciationDetailsReducer,
  auth: authReducer,
});

let initiateState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initiateState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
