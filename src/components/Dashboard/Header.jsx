import React from 'react';

import Logout from '../Logout/Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header className='header'>
      <h1 className='logo'>Quick-EMS</h1>
      <h2>Employee Management Software</h2>
      <div>
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
