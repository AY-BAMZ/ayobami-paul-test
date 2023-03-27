import { CREATE_PRODUCT_SUCCESS } from "../types/addProductTypes";
import { DELETE_PRODUCT_SUCCESS } from "../types/deleteProductTypes";
import { EDIT_PRODUCT_SUCCESS } from "../types/editProductTypes";
import { FETCH_PRODUCT_FAILURE } from "../types/getProductTypes";
import { FETCH_PRODUCT_SUCCESS } from "../types/getProductTypes";
import { FETCH_PRODUCT_REQUEST } from "../types/getProductTypes";

const initialProductList = {
  loading: true,
  products: [],
  total: 0,
  skip: 0,
  limit: 0,
  error: "",
};

const reducer = (state = initialProductList, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        ...action.payload,
        error: "",
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: [action.payload, ...state.products],
        error: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
        error: action.payload,
      };
    case EDIT_PRODUCT_SUCCESS:
      const productsCopy = [...state.products];
      const editedProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (editedProductIndex > -1)
        productsCopy[editedProductIndex] = action.payload;
      return {
        loading: false,
        products: productsCopy,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
