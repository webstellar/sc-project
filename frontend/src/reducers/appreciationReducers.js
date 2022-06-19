import {
  ALL_APPRECIATIONS_REQUEST,
  ALL_APPRECIATIONS_SUCCESS,
  ALL_APPRECIATIONS_FAIL,
  APPRECIATION_DETAILS_REQUEST,
  APPRECIATION_DETAILS_SUCCESS,
  APPRECIATION_DETAILS_FAIL,
  ADMIN_APPRECIATIONS_REQUEST,
  ADMIN_APPRECIATIONS_SUCCESS,
  ADMIN_APPRECIATIONS_FAIL,
  USER_APPRECIATIONS_REQUEST,
  USER_APPRECIATIONS_SUCCESS,
  USER_APPRECIATIONS_FAIL,
  NEW_APPRECIATION_REQUEST,
  NEW_APPRECIATION_SUCCESS,
  NEW_APPRECIATION_RESET,
  NEW_APPRECIATION_FAIL,
  DELETE_APPRECIATION_REQUEST,
  DELETE_APPRECIATION_SUCCESS,
  DELETE_APPRECIATION_RESET,
  DELETE_APPRECIATION_FAIL,
  UPDATE_APPRECIATION_REQUEST,
  UPDATE_APPRECIATION_SUCCESS,
  UPDATE_APPRECIATION_RESET,
  UPDATE_APPRECIATION_FAIL,
  CLEAR_ERRORS,
} from "../constants/appreciationConstant";

export const appreciationsReducer = (state = { appreciations: [] }, action) => {
  switch (action.type) {
    case ALL_APPRECIATIONS_REQUEST:
    case ADMIN_APPRECIATIONS_REQUEST:
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
    case ADMIN_APPRECIATIONS_SUCCESS:
      return {
        loading: false,
        appreciations: action.payload,
      };
    case ALL_APPRECIATIONS_FAIL:
    case ADMIN_APPRECIATIONS_FAIL:
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

export const newAppreciationReducer = (
  state = { appreciation: {} },
  action
) => {
  switch (action.type) {
    case NEW_APPRECIATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_APPRECIATION_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        appreciation: action.payload.product,
      };

    case NEW_APPRECIATION_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case NEW_APPRECIATION_RESET:
      return {
        ...state,
        success: false,
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

export const appreciationReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_APPRECIATION_REQUEST:
    case UPDATE_APPRECIATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_APPRECIATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_APPRECIATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_APPRECIATION_FAIL:
    case UPDATE_APPRECIATION_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_APPRECIATION_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case UPDATE_APPRECIATION_RESET:
      return {
        ...state,
        isUpdated: false,
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
