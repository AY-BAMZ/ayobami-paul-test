import { EDIT_PRODUCT_FAILURE } from "../types/editProductTypes"
import { EDIT_PRODUCT_SUCCESS } from "../types/editProductTypes"
import { EDIT_PRODUCT_REQUEST } from "../types/editProductTypes"

const initialProductDeata = {
    loading: true,
    edit_product: [],
    error: '',
}

const reducer = (state = initialProductDeata, action) => {
    switch (action.type) {
        case EDIT_PRODUCT_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case EDIT_PRODUCT_SUCCESS: 
        return {
            loading: false,
            edit_product: action.payload,
            error: '',
        }
        case EDIT_PRODUCT_FAILURE: 
        return {
            loading: false,
            edit_product: [],
            error: action.payload
        }
        default:
      return state;
    }
}

export default reducer