const initialState = []
export const dataReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
            case "GET_TOPICS":
                 return action.payload.map(top=>top) 
                        
        default:
           return {
              state
        
            };
    };
}
