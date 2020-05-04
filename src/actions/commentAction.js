export const addComment = ( comment, search, saved_id) => {
    const entry = {
        comment: {
        
            comment: comment,
            search: search,
            saved_id: saved_id
        }
    }
    return fetch(`http://localhost:3000/api/v1/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
       // Authorization: token()
    },
      body: JSON.stringify(entry)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_COMMENT_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_COMMENT",
            payload: res
        }
        
    })}
       
 


  export const getComment = (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/comments`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: localStorage.getItem("token")
        },
    }).then(res => res.json())
    .then( res => {
        if (res.message) {
            return {
                type: "GET_MY_COMMENTS_ERROR"
            };
        }
        dispatch(
            {
                type: "GET_COMMENTS",
                payload: res
            }
        ) 
     }) };

//console.log(payload)