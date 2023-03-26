import { CHANGE_SIDEBAR_DISPLAY } from "../types/sidebarDisplayTypes"

const initialState = {
    currentSidebarDisplay: "products"
}

const sidebarDisplayReducer = (state = initialState,  action) => {
    switch(action.type) {
        case CHANGE_SIDEBAR_DISPLAY: return {
            ...state,
            currentSidebarDisplay: action.payload
        }
        default: return state
    }
}

export default sidebarDisplayReducer