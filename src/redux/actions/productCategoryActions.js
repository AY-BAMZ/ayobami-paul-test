import axios from "axios";
import URI_MAP from "../../URI/URI_MAP";
import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_REQUEST,
} from "../types/getCategoryTypes";

export const fetchCategoryRequest = () => {
  return {
    typeof: FETCH_CATEGORY_REQUEST,
  };
};

const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category,
  };
};

const fetchCategoryFailure = (error) => {
  return {
    type: FETCH_CATEGORY_FAILURE,
    payload: error,
  };
};

export const fetchCategory = () => {
  return (dispatch) => {
      dispatch(fetchCategoryRequest)
    axios.get(URI_MAP.dummy_products.categories ,  { 
        headers: { "Accept-Encoding": "application.json" } 
    })
      .then((response) => {
        const categories = response.data;
        dispatch(fetchCategorySuccess(categories));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCategoryFailure(errorMsg));
      });
  };
};
