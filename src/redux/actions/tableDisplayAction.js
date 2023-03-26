import { CHANGE_TABLE_DISPLAY } from "../types/tableDisplayTypes"

export const switchDisplay = (display) => {
    return {
        type: CHANGE_TABLE_DISPLAY,
        payload: display
    }
}