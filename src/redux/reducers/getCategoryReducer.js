import { FETCH_CATEGORY_FAILURE } from "../types/getCategoryTypes"
import { FETCH_CATEGORY_SUCCESS } from "../types/getCategoryTypes"
import { FETCH_CATEGORY_REQUEST } from "../types/getCategoryTypes"

const initialCategoryList = {
    loading: true,
    categories: [],
    error: '',
}

const reducer = (state = initialCategoryList, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_CATEGORY_SUCCESS: 
        return {
            loading: false,
            categories: action.payload,
            error: '',
        }
        case FETCH_CATEGORY_FAILURE: 
        return {
            loading: false,
            categories: [],
            error: action.payload
        }
        default:
      return state;
    }
}

export default reducer