import { DELETE_PRODUCT_FAILURE } from "../types/deleteProductTypes"
import { DELETE_PRODUCT_SUCCESS } from "../types/deleteProductTypes"
import { DELETE_PRODUCT_REQUEST } from "../types/deleteProductTypes"

const initialProductList = {
    loading: true,
    products: [],
    error: '',
}

const reducer = (state = initialProductList, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case DELETE_PRODUCT_SUCCESS: 
        return {
            loading: false,
            products: action.payload,
            error: '',
        }
        case DELETE_PRODUCT_FAILURE: 
        return {
            loading: false,
            products: [],
            error: action.payload
        }
        default:
      return state;
    }
}

export default reducer