import React from 'react';

function Header({ user, setUser }) {
  return (
    <header>
      {user ? (
        <div>Welcome, {user.name}</div>
      ) : (
        <div>Please log in</div>
      )}
    </header>
  );
}

export default Header;