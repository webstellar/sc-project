import {
  ALL_HEROES_REQUEST,
  ALL_HEROES_SUCCESS,
  ALL_HEROES_FAIL,
  CLEAR_ERRORS,
} from "../constants/heroConstant";

export const heroesReducer = (state = { heroes: [] }, action) => {
  switch (action.type) {
    case ALL_HEROES_REQUEST:
      return {
        loading: true,
        heroes: [],
      };
    case ALL_HEROES_SUCCESS:
      return {
        loading: false,
        heroes: action.payload.heroes,
        heroesCount: action.payload.heroesCount,
      };
    case ALL_HEROES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
