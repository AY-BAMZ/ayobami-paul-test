import { CHANGE_SIDEBAR_DISPLAY } from "../types/sidebarDisplayTypes"

export const switchSidebarDisplay = (display) => {
    return {
        type: CHANGE_SIDEBAR_DISPLAY,
        payload: display
    }
}