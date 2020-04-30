import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { topics } from "../actions/userAction";
//import { dataReducer } from "./dataReducer";
import { dataReducer } from "./dataReducer";

export default combineReducers({
    
   userContext: userReducer,

   topics: dataReducer
});


