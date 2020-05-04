export const addTopic = ( topic, user_id) => {
    console.log(topic, user_id)
    const entry = {
        saved: {
            topic: topic,
            user_id: user_id

        }
    }
    return fetch(`http://localhost:3000/api/v1/saveds`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

       Authorization: localStorage.getItem("token")
    },
      body: JSON.stringify(entry)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_TOPIC_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_TOPIC",
            payload: res
        }
    });
            
                     }         

export const getTopic = (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/saveds`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
           Authorization: localStorage.getItem("token")
        },
    }).then(res => res.json())
    .then( res => {
        //here is where we going to change something
       
            if (res.message) {
                return {
                    type: "GET_MY_TOPICS_ERROR"
                };
            }
            dispatch(
                {
                    type:"GET_TOPICS",
                    payload: res
                }
            ) 
         }) };

         export const deleteTopic = (id, dispatch) => {
            fetch(`http://localhost:3000/api/v1/saveds/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: localStorage.getItem("token")
                },
            }).then(res => res.json())
            .then(res => {
                if (res.error) {
                    dispatch( {
                        type: "DELETE_TOPIC_ERROR",
                        error: res.error
                    });
                }
                else {
                    dispatch(
                        {
                            type: "DELETE_TOPIC",
                            id: id
                        }
                    );
                }
            }).catch(err => {
                dispatch( {
                    type: "DELETE_TOPIC_ERROR",
                    error: err
                })
            });
        }