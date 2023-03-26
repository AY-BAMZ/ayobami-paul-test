import { combineReducers } from "redux";
import tableDisplayReducer from "./reducers/tableDisplayReducer";
import sidebarDisplayReducer from "./reducers/sidebarDisplayReducer";
import getProductReducer from "./reducers/getProductReducer"

const rootReducer = combineReducers({
    tableDisplay: tableDisplayReducer,
    sidebarDisplay: sidebarDisplayReducer,
    productList: getProductReducer,
})

export default rootReducer