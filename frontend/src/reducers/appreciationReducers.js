import {
  ALL_APPRECIATIONS_REQUEST,
  ALL_APPRECIATIONS_SUCCESS,
  ALL_APPRECIATIONS_FAIL,
  CLEAR_ERRORS,
} from "../constants/appreciationConstant";

export const appreciationsReducer = (state = { appreciations: [] }, action) => {
  switch (action.type) {
    case ALL_APPRECIATIONS_REQUEST:
      return {
        loading: true,
        appreciations: [],
      };
    case ALL_APPRECIATIONS_SUCCESS:
      return {
        loading: false,
        appreciations: action.payload.appreciations,
        appreciationsCount: action.payload.appreciationsCount,
      };
    case ALL_APPRECIATIONS_FAIL:
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
