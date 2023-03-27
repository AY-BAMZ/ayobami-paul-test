import { CREATE_PRODUCT_FAILURE } from "../types/addProductTypes"
import { CREATE_PRODUCT_SUCCESS } from "../types/addProductTypes"
import { CREATE_PRODUCT_REQUEST } from "../types/addProductTypes"

const initialProductList = {
    loading: true,
    new_product: [],
    error: '',
}

const reducer = (state = initialProductList, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case CREATE_PRODUCT_SUCCESS: 
        return {
            loading: false,
            new_product: action.payload,
            error: '',
        }
        case CREATE_PRODUCT_FAILURE: 
        return {
            loading: false,
            new_product: [],
            error: action.payload
        }
        default:
      return state;
    }
}

export default reducer