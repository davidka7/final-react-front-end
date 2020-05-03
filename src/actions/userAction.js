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



  //const deleteTopic = (user_id) => {
   // return fetch(`http://localhost:3000/api/v1/users/${user_id}/topics`, {
   //   method: "DELETE",
  //    headers: headers(),
 //   }).then(resp => resp.json());
  //};
  
  
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