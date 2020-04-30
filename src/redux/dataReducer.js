
const INITIAL_STATE = {
data:[], comments: [], error: null

}

export const dataReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
            case "GET_TOPICS":
                 return { ...state,
                    data: action.payload
                 }
                  case "GET_COMMENTS":
                return {
                    ...state,
                  
                    comments: action.payload
                  };
                  case "TOPIC_ERROR":
                    return {  error: action.error}
                    
        default:
            return {
               state,
               error: action.error
              };
    };
}