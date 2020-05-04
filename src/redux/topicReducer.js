const initialState = {topic:null}
export const dataReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
            case "GET_TOPICS":
                 return action.payload.map(top=>top) 
                 case 'CREATE_TOPIC':
                   console.log(action.payload)
                  return [...state, action.payload.saveds];
                  case 'DELETE_TOPIC':
                  return state.filter((p) => p.id !== action.id)
        default:
           return {
              state
        
            };
    };
}
