import axios from "axios";
import {
  ALL_HEROES_REQUEST,
  ALL_HEROES_SUCCESS,
  ALL_HEROES_FAIL,
  CLEAR_ERRORS,
} from "../constants/heroConstant";

//Get all the heroes from the backend
export const getHeroes = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_HEROES_REQUEST });

    const { data } = await axios.get("/api/v1/heroes");

    dispatch({
      type: ALL_HEROES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_HEROES_FAIL,
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
