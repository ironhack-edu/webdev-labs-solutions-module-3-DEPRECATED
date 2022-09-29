import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import authService from './../../services/auth.service';

/* 
  signUp
  logIn
  uploadPhoto
  getUser
  editUser
*/

function SignupPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .signUp(username, password, campus, course)
      .then((user) => {
        props.history.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="Panel">
        <div>
          <h1>Sign Up</h1>
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

          <label>Campus</label>
          <input
            type="text"
            name="campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
          />

          <label>Course</label>
          <input
            type="text"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div>
          <p>Hello!!</p>
          <p>Welcome to IronProfile!</p>

          <p>
            If you sign up, you agree with all our terms and conditions where we
            can do whatever we want with the data!
          </p>
          <button onClick={handleSubmit}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
