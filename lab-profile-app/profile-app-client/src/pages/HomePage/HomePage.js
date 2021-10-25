import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <div className="Panel">
        <div>
          <h1>IronProfile</h1>
          <p>
            Today we will create an app with authorization, adding some cool
            styles!
          </p>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default HomePage;
