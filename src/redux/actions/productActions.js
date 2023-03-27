import axios from "axios";
import URI_MAP from "../../URI/URI_MAP";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
} from "../types/getProductTypes";

export const fetchProductRequest = () => {
  return {
    typeof: FETCH_PRODUCT_REQUEST,
  };
};

const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
      dispatch(fetchProductRequest)
    axios.get(URI_MAP.dummy_products.products ,  { 
        headers: { "Accept-Encoding": "application.json" } 
    })
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};

export const searchProduct = (searchParm) => {
  const params = {
    q: searchParm,
  };
  return (dispatch) => {
      dispatch(fetchProductRequest)
    axios.get(`${URI_MAP.dummy_products.search}?${new URLSearchParams(
      params
    ).toString()}`,  { 
        headers: { "Accept-Encoding": "application.json" } 
    })
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};