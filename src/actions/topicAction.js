export const addTopic = (api, topic, user_id) => {
    const entry = {
        saved: {
            topic
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
    }).then(res => res.json());
  };

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
                    type: "GET_TOPICS",
                    payload: res
                }
            ) 
         }) };

         export const topicer = (topic, user_id) => {
   
            return addTopic(`http://localhost:3000/api/v1/saveds`, topic, user_id);
        }  