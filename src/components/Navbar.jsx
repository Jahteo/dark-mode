import React from 'react';

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          // onClick={() => toggleDarkMode()}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
