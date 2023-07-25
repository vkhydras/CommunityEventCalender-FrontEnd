import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = ({ isAuthenticated, onLogout,button,dark}) => {
  return (
    <header className={dark && "dark"}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/create-event">Create Event</Link>
              </li>
              
              <li>
                <button onClick={onLogout} className='log'>Log out</button>
              </li>
              {button}
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">SignUp</Link>
              </li>
              {button}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
