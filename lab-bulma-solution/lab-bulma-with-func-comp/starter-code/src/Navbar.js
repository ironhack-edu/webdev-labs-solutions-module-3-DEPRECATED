import React from 'react';
import CoolButton from './CoolButton';

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <CoolButton>Login</CoolButton>
            </p>
            <p className="control">
              <CoolButton isDanger>Signup</CoolButton>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar