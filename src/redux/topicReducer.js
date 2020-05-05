const initialState = []
export const dataReducer = (state = initialState, action) => {
    console.log(action)
   // if (action.type !== "GET_COMMENTS") {
    switch (action.type) {
            case "GET_TOPICS":
                 return {state, topic: action.payload.map(top=>top)}
                 case 'CREATE_TOPIC':
                   console.log(action.payload)
                  return {...state, topic: [...state.topic, action.payload.saveds]};
                  case 'DELETE_TOPIC':
                    console.log(action, "delete")
                    console.log(state.topic)
                  return {state, topic: state.topic.filter((p) => p.id !== action.id)}
        default:
           return {
              ...state
        
            };
          }
   // }
   // else {
//return null


  //  }
}
