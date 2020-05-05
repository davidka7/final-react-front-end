const initialState = []
export const commentReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
            case "GET_COMMENTS":
             return   {state, comment: action.payload.map(top=>top)}
                 case 'CREATE_COMMENT':
                 //   console.log(action.payload.comments, "1")
                  //  console.log(state, "2")
              //      console.log([...state, action.payload.comment], "3")
                console.log(state, "state.comment")
                console.log(action.payload, "action.payload")
                console.log(action.payload.comments, "action.payload.comments")
        return {...state, comment:  [...state.comment, action.payload.comments]};
        default:
           return {
              ...state
        
            };
    };
}
