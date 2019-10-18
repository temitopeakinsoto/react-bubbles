import React, { useRef } from 'react';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <div>
        username <input type="text" />
        <br />
        password <input type="text" />
      </div>

      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Login;