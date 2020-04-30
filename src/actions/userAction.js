const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
console.log(BACKEND_DOMAIN)
//const token = () => localStorage.getItem("token");
const loginSignup = (apiUrl, username, password) => {
    const user = {
        user: {
            username,
            password
        }
    }
    console.log(user)
    console.log(apiUrl)
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "LOGIN_ERROR",
                error: res.error
                
            };
       
        }
        console.log(res)
        console.log(user)
      //  console.log(body)
        return {
            type: "LOGIN",
            payload: res
        }
       
    } 
    
    );
    
}


const Signup = (apiUrl, username, password, email) => {
    const newUser = {
        user: {
            username,
            password,
            email
        }
    }
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(newUser)
    }).then(resp => resp.json())
    .then( res => {
        if (res.error) {
            return {
                type: "SIGNUP_ERROR",
                error: res.error
            };
        }
        return {
            type: "SIGNUP",
            payload: res
        }


     } )
  };

const addTopic = (api, topic, user_id) => {
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
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    
           Authorization: localStorage.getItem("token")
        },
       
    }).then(res => res.json())
    .then( res => {
        //here is where we going to change something
         dispatch( {
            type: "GET_TOPICS",
            payload: res })
         }) };

  //const deleteTopic = (user_id) => {
   // return fetch(`http://localhost:3000/api/v1/users/${user_id}/topics`, {
   //   method: "DELETE",
  //    headers: headers(),
 //   }).then(resp => resp.json());
  //};
  export const topicer = (topic, user_id) => {
   
    return addTopic(`http://localhost:3000/api/v1/saveds`, topic, user_id);
}  
  export const comment = (comment, search, user_id) => {
   
    return addComment(`http://localhost:3000/api/v1/saveds`, comment, search, user_id);
}  
  export const topics = {
    
  topics: {
      getTopic
    }
  };

  const addComment = (api, comment, search, user_id) => {
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
        Accept: "application/json"
       // Authorization: token()
    },
      body: JSON.stringify(entry)
    }).then(res => res.json());
  };
       
 


  const getComment = () => {
    return fetch(`http://localhost:3000/api/v1/comments`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }).then(res => res.json())
    .then( res => {
        return { 
            type: "GET_COMMENTS",
            payload: res
        } }) };
  


        export const comments = {
    
            comments: {
              getComment
            }
          };
//console.log(payload)
export const login = (username, password) => {
   
    return loginSignup(`http://localhost:3000/api/v1/login`, username, password);
}

export const signup = (username, password, email) => {
    return Signup(`http://localhost:3000/api/v1/users`, username, password, email);
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}