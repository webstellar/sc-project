import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { appreciationsReducer } from "./reducers/appreciationReducers";
import { heroesReducer } from "./reducers/heroReducers";

const reducer = combineReducers({
  appreciations: appreciationsReducer,
  heroes: heroesReducer,
});

let initiateState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initiateState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
