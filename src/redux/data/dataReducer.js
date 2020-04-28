import { ADD_DATA } from './dataTypes';

const initialState = {
    data: [{ dataName: "Jane" }]

}


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state, data: [...state.data, { dataName: "hehe" }]

            }
        default:
            return state;
    }
}

export default dataReducer