import axios from "axios";
import {
  ALL_HEROES_REQUEST,
  ALL_HEROES_SUCCESS,
  ALL_HEROES_FAIL,
  CLEAR_ERRORS,
  HERO_DETAILS_REQUEST,
  HERO_DETAILS_SUCCESS,
  HERO_DETAILS_FAIL,
} from "../constants/heroConstant";

//Get all the heroes from the backend
export const getHeroes =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_HEROES_REQUEST });

      const { data } = await axios.get(`/api/v1/heroes?keyword=${keyword}`);

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

//Get A single hero detail from the backend
//use id as a parameter since dealing with one
export const getHeroDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HERO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/hero/${id}`);

    dispatch({
      type: HERO_DETAILS_SUCCESS,
      payload: data.hero,
    });
  } catch (error) {
    dispatch({
      type: HERO_DETAILS_FAIL,
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
