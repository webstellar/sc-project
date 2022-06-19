import axios from "axios";
import {
  ALL_HEROES_REQUEST,
  ALL_HEROES_SUCCESS,
  ALL_HEROES_FAIL,
  CLEAR_ERRORS,
  HERO_DETAILS_REQUEST,
  HERO_DETAILS_SUCCESS,
  HERO_DETAILS_FAIL,
  ADMIN_HEROES_REQUEST,
  ADMIN_HEROES_SUCCESS,
  ADMIN_HEROES_FAIL,
  USER_HEROES_REQUEST,
  USER_HEROES_SUCCESS,
  USER_HEROES_FAIL,
  NEW_HERO_REQUEST,
  NEW_HERO_SUCCESS,
  NEW_HERO_RESET,
  NEW_HERO_FAIL,
  UPDATE_HERO_REQUEST,
  UPDATE_HERO_SUCCESS,
  UPDATE_HERO_RESET,
  UPDATE_HERO_FAIL,
  DELETE_HERO_REQUEST,
  DELETE_HERO_SUCCESS,
  DELETE_HERO_RESET,
  DELETE_HERO_FAIL,
} from "../constants/heroConstant";

//Get all the heroes from the backend
export const getHeroes = (keyword = "") => async (dispatch) => {
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

//GET ADMIN HEROES
export const getAdminHeroes = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_HEROES_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/heroes`);

    dispatch({
      type: ADMIN_HEROES_SUCCESS,
      payload: data.heroes,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_HEROES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const newHero = (heroData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_HERO_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/hero/new`,
      heroData,
      config
    );

    dispatch({
      type: NEW_HERO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_HERO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Hero (Admin)
export const deleteHero = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HERO_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/hero/${id}`);

    dispatch({
      type: DELETE_HERO_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_HERO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Hero (ADMIN)
export const updateHero = (id, heroData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HERO_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/v1/admin/hero/${id}`,
      heroData,
      config
    );

    dispatch({
      type: UPDATE_HERO_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_HERO_FAIL,
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
