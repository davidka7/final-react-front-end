const initialState = []
export const sizeReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
            case "GET_SIZES":
             return   {state, size: action.payload.map(top=>top)}
        //          case 'CREATE_COMMENT':
        //          //   console.log(action.payload.comments, "1")
        //           //  console.log(state, "2")
        //       //      console.log([...state, action.payload.comment], "3")
              
        // return {...state, size:  [...state.size, action.payload.comments]};
        default:
           return {
              ...state
        
            };
    };
}
