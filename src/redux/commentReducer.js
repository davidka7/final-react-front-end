const initialState = []
export const commentReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
            case "GET_COMMENTS":
                 return   action.payload.map(top=>top)
                // case 'CREATE_COMMENT':
                 //   console.log(action.payload.comments, "1")
                  //  console.log(state, "2")
              //      console.log([...state, action.payload.comment], "3")
                
             //   return [...state, action.payload.comment];
        default:
           return {
              state
        
            };
    };
}
