import {combineReducers} from "redux";
import adminReducer from "./admin";
import workersReducer from "./workers";
import workersListReducer from "./listWorkers";
import leaveReducer from "./leave";
import advanceReducer from "./advance";

const rootReducer = combineReducers ({adminReducer, workersReducer, workersListReducer, leaveReducer, advanceReducer })



export default rootReducer;