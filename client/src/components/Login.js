import React, { useRef } from 'react';
import axios from 'axios';

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const submit = () => {
    axios.post('http://localhost:5000/api/login', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
    .then(res => {      
      console.log("token is", res.data.payload);
      localStorage.setItem("token", res.data.payload); 
      props.history.replace('/bubblepage');     
    // when you have handled the token, navigate to the BubblePage route
    })
    .catch(err => {
      console.log("error");
    })
  }
  return (
    <div>
      <div>
        username <input ref={usernameRef} type="text" />
        <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
