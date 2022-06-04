import {
  ALL_APPRECIATIONS_REQUEST,
  ALL_APPRECIATIONS_SUCCESS,
  ALL_APPRECIATIONS_FAIL,
  APPRECIATION_DETAILS_REQUEST,
  APPRECIATION_DETAILS_SUCCESS,
  APPRECIATION_DETAILS_FAIL,
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

export const appreciationDetailsReducer = (
  state = { appreciation: {} },
  action
) => {
  switch (action.type) {
    case APPRECIATION_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case APPRECIATION_DETAILS_SUCCESS:
      return {
        loading: false,
        appreciation: action.payload,
      };

    case APPRECIATION_DETAILS_FAIL:
      return {
        ...state,
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
