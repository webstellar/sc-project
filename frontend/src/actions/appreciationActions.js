import axios from "axios";
import {
  ALL_APPRECIATIONS_REQUEST,
  ALL_APPRECIATIONS_SUCCESS,
  ALL_APPRECIATIONS_FAIL,
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

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
