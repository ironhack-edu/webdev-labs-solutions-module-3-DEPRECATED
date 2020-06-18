import React from 'react';

import './Header.css';

const Header = () => (
  <div className='jumbotron jumbotron-fluid my-jumbo'>
    <h1 className='display-4'>
      React <strong>Game of Thrones</strong>
    </h1>
    <p className='lead'>
      Learning how to consume <strong>3rd party APIs</strong> with React.
    </p>
  </div>
);

export default Header;
