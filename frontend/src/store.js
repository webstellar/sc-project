import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  heroesReducer,
  heroDetailsReducer,
  newHeroReducer,
  heroReducer,
} from "./reducers/heroReducers";
import {
  appreciationsReducer,
  appreciationDetailsReducer,
  newAppreciationReducer,
  appreciationReducer,
} from "./reducers/appreciationReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  heroes: heroesReducer,
  heroDetails: heroDetailsReducer,
  newHero: newHeroReducer,
  hero: heroReducer,
  newAppreciation: newAppreciationReducer,
  appreciation: appreciationReducer,
  appreciations: appreciationsReducer,
  appreciationDetails: appreciationDetailsReducer,
  auth: authReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
});

let initiateState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initiateState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
