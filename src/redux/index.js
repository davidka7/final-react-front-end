import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { dataReducer } from "./data/dataReducer";


export default combineReducers({
    data: dataReducer,
    userContext: userReducer
});


