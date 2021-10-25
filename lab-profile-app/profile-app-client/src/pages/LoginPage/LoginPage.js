import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/auth.context';

import authService from './../../services/auth.service';

function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logInUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .logIn(username, password)
      .then((authToken) => {
        console.log('Log in page authToken ->', authToken);
        logInUser(authToken);
        props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="LoginPage">
      <div className="Panel">
        <div>
          <h1>Log in</h1>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            If you don't have an account yet, you can create your account{' '}
            <Link to="/signup">here</Link>.
          </p>
        </div>

        <div>
          <p>Hello!!</p>
          <p>Awesome to have you at IronProfile again!</p>

          <p>
            If you sign up, you agree with all our terms and conditions where we
            can do whatever we want with the data!
          </p>
          <button onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
