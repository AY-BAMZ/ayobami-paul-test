import axios from "axios";
import URI_MAP from "../../URI/URI_MAP";
import {
  EDIT_PRODUCT_FAILURE,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_REQUEST,
} from "../types/editProductTypes";

export const editProductRequest = () => {
  return {
    typeof: EDIT_PRODUCT_REQUEST,
  };
};

const editProductSuccess = (product) => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload: product,
  };
};

const editProductFailure = (error) => {
  return {
    type: EDIT_PRODUCT_FAILURE,
    payload: error,
  };
};

export const editProduct = (values) => {
  
  const images = [
    "https://res.cloudinary.com/dmixz7eur/image/upload/v1679904480/download_1_fwgesg.jpg",
    "https://res.cloudinary.com/dmixz7eur/image/upload/v1679904480/download_3_c19lhg.jpg",
    "https://res.cloudinary.com/dmixz7eur/image/upload/v1679904480/download_2_mk2son.jpg",
  ]
  return (dispatch) => {
    const new_product_Data= {
      category: values.selectCategory,
      description: values.description,
      images: images,
      rating: values.rating,
      price: values.price,
      stock: values.stock,
      title: values.title,
      brand: values.brand,
    }


    dispatch(editProductRequest);
    axios
      .put(`${URI_MAP.dummy_products.edit_product}/${values.id}`, new_product_Data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        const product = response.data;
        dispatch(editProductSuccess(product));
      })
      .catch((error) => {
        console.log("error", error);
        const errorMsg = error.message;
        dispatch(editProductFailure(errorMsg));
      });
  };
};
