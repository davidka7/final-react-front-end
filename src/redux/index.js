import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { topics } from "../actions/userAction";
//import { dataReducer } from "./dataReducer";
import { dataReducer } from "./topicReducer";
import { commentReducer } from "./commentReducer";
import { sizeReducer } from "./sizeReducer";
export default combineReducers({
    
   userContext: userReducer,//,
    topic: dataReducer,
    comment: commentReducer,
    size: sizeReducer
   //topics: dataReducer
});


