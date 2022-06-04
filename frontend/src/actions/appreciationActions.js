import axios from "axios";
import {
  ALL_APPRECIATIONS_REQUEST,
  ALL_APPRECIATIONS_SUCCESS,
  ALL_APPRECIATIONS_FAIL,
  APPRECIATION_DETAILS_REQUEST,
  APPRECIATION_DETAILS_SUCCESS,
  APPRECIATION_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/appreciationConstant";

//Get all the appreciations from the backend
export const getAppreciations = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_APPRECIATIONS_REQUEST });

    const { data } = await axios.get("/api/v1/appreciations");

    dispatch({
      type: ALL_APPRECIATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_APPRECIATIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Get a single appreciation detail from the backend
export const getAppreciationDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: APPRECIATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/appreciation/${id}`);

    dispatch({
      type: APPRECIATION_DETAILS_SUCCESS,
      payload: data.appreciation,
    });
  } catch (error) {
    dispatch({
      type: APPRECIATION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
