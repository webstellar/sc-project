import axios from "axios";
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

//GET ADMIN APPRECIATIONS
export const getAdminAppreciations = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_APPRECIATIONS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/appreciations");

    dispatch({
      type: ADMIN_APPRECIATIONS_SUCCESS,
      payload: data.appreciations,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_APPRECIATIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const newAppreciation = (appreciationData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_APPRECIATION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/appreciation/new`,
      appreciationData,
      config
    );

    dispatch({
      type: NEW_APPRECIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_APPRECIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete appreciation (Admin)
export const deleteAppreciation = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_APPRECIATION_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/appreciation/${id}`);

    dispatch({
      type: DELETE_APPRECIATION_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_APPRECIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Appreciation (ADMIN)
export const updateAppreciation = (id, appreciationData) => async (
  dispatch
) => {
  try {
    dispatch({ type: UPDATE_APPRECIATION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      appreciationData,
      config
    );

    dispatch({
      type: UPDATE_APPRECIATION_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_APPRECIATION_FAIL,
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
