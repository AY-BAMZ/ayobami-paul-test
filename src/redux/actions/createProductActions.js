import axios from "axios";
import URI_MAP from "../../URI/URI_MAP";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQUEST,
} from "../types/addProductTypes";

export const createProductRequest = () => {
  return {
    typeof: CREATE_PRODUCT_REQUEST,
  };
};

const createProductSuccess = (product) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
};

const createProductFailure = (error) => {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const createProduct = (values) => {
  
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


    dispatch(createProductRequest);
    axios
      .post(URI_MAP.dummy_products.create_product, new_product_Data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        const product = response.data;
        dispatch(createProductSuccess(product));
      })
      .catch((error) => {
        console.log("error", error);
        const errorMsg = error.message;
        dispatch(createProductFailure(errorMsg));
      });
  };
};
