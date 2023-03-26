import { CHANGE_TABLE_DISPLAY } from "../types/tableDisplayTypes"

const initialState = {
    currentTableDisplay: "row"
}

const tableDisplayReducer = (state = initialState,  action) => {
    switch(action.type) {
        case CHANGE_TABLE_DISPLAY: return {
            ...state,
            currentTableDisplay: action.payload
        }
        default: return state
    }
}

export default tableDisplayReducer