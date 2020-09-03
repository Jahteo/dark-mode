import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode"

const Navbar = ({darkMode, setDarkMode}) => {
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  useDarkMode(darkMode, setDarkMode)

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          // onClick={toggleMode}
          onClick={() => setDarkMode}
          // onClick={() => setDarkMode()}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
