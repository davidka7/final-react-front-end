const initialState = []
export const commentReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
            case "GET_COMMENTS":
                 return action.payload.map(top=>top) 
                        
        default:
           return {
              state
        
            };
    };
}
