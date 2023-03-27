import axios from "axios";
import URI_MAP from "../../URI/URI_MAP";
import {
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
} from "../types/deleteProductTypes";

export const deleteProductRequest = () => {
  return {
    typeof: DELETE_PRODUCT_REQUEST,
  };
};

const deleteProductSuccess = (product) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: product,
  };
};

const deleteProductFailure = (error) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch(deleteProductRequest);
    axios
      .delete(`${URI_MAP.dummy_products.delete_product}/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        const product = response.data;
        dispatch(deleteProductSuccess(product));
      })
      .catch((error) => {
        console.log("error", error);
        const errorMsg = error.message;
        dispatch(deleteProductFailure(errorMsg));
      });
  };
};
