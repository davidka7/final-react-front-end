export const comment = (comment, search, user_id) => {
   
    return addComment(`http://localhost:3000/api/v1/saveds`, comment, search, user_id);
}  
 
  
  export const addComment = (api, comment, search, user_id) => {
    const entry = {
        comment: {
            user_id,
            comment,
            search
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
    }).then(res => res.json());
  };
       
 


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