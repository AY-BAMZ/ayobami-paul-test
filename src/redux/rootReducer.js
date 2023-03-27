import { combineReducers } from "redux";
import tableDisplayReducer from "./reducers/tableDisplayReducer";
import sidebarDisplayReducer from "./reducers/sidebarDisplayReducer";
import getProductReducer from "./reducers/productReducer"
import getCategoryReducer from "./reducers/getCategoryReducer"
import createProductReducer from "./reducers/createProductReducer"
import deleteProductReducer from "./reducers/deleteProductReducer"
import editProductReducer from "./reducers/editProductReducer"

const rootReducer = combineReducers({
    tableDisplay: tableDisplayReducer,
    sidebarDisplay: sidebarDisplayReducer,
    productList: getProductReducer,
    category: getCategoryReducer,
    product: createProductReducer,
    remainingProduct: deleteProductReducer,
    editProduct: editProductReducer,
})

export default rootReducer