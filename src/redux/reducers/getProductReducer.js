import { FETCH_PRODUCT_FAILURE } from "../types/getProductTypes"
import { FETCH_PRODUCT_SUCCESS } from "../types/getProductTypes"
import { FETCH_PRODUCT_REQUEST } from "../types/getProductTypes"

const initialProductList = {
    loading: true,
    products: [],
    error: '',
}

const reducer = (state = initialProductList, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_PRODUCT_SUCCESS: 
        return {
            loading: false,
            products: action.payload,
            error: '',
        }
        case FETCH_PRODUCT_FAILURE: 
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