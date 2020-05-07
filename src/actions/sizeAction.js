export const getSize = (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/sizes`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: localStorage.getItem("token")
        },
    }).then(res => res.json())
    .then( res => {
        if (res.message) {
            return {
                type: "GET_SIZE_ERROR"
            };
        }
        dispatch(
            {
                type: "GET_SIZES",
                payload: res
            }
        ) 
     }) };
