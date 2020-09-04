import React from 'react';
//set what we needed to get navbar independednt first, once we decided that state was being kept in index. All navbar needed was the current state and some method of toggleing it. Note, yetti's preference is working from the inner bits out, but the catch is that you need to have better understanding of the product as a whole. But we should have that understanding before touching code regardless, so... Find what works for me.
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
