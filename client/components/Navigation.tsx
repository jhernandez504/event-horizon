import React, {FC} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

type NavProps = {
  user: Object | null;
  toggleDarkMode: () => void;
  handleLogin: Function;
};

const NavigationBar: FC<NavProps> = ({ toggleDarkMode, user, handleLogin}) => {
  const location = useLocation();

  const handleLogout = () => {
    axios.post('/api/logout')
    .then(() => {
      window.location.href = '/';
    })
    .catch((err) =>{
      console.error('Failed to logout!');
    });
  };

  const renderNavForRoute = () => {
    switch (location.pathname) {
      case '/':
        return (
          <nav className="fixed z-10 top-0 w-full p-4 rounded-sm bg-yellow-500 dark:bg-purple-950 shadow-lg text-white flex items-center justify-between space-x-4 h-10 sm:grid-cols-2">
            <Link to="/" className="hover:text-blue-600  truncate">
              EVENT HORIZON
            </Link>
            <Link to="/instructions" className="hover:text-blue-600  truncate">
              How To Play
            </Link>
            {user ? (
              <>
                <Link to="/title-menu" className="hover:text-blue-600 truncate">
                  Play!
                </Link>
                <button
                  onClick={() => handleLogout()}
                  className="hover:text-blue-600  truncate"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => handleLogin()} className="hover:text-blue-600  truncate">
                Sign Up / Login
              </Link>
            )}
            <button onClick={toggleDarkMode} className="hover:text-blue-600 ">
              🌗
            </button>
          </nav>
        );

      case '/instructions':
        return (
          <nav className="fixed top-0 w-full p-4 rounded-sm bg-orange-300 dark:bg-purple-950 shadow-lg text-white flex items-center justify-between h-10">
            <Link to="/" className="hover:text-blue-600  truncate">
              EVENT HORIZON
            </Link>
            <Link to="/instructions" replace className="hover:text-blue-600  truncate">
              How To Play
            </Link>
            {user && (
              <Link to="/title-menu" className="hover:text-blue-600  truncate">
                Play!
              </Link>
            )}
            <button onClick={toggleDarkMode} className="hover:text-blue-600 ">
              🌗
            </button>
          </nav>
        );

      case '/user-profile':
        return (
          <nav className="fixed top-0 w-full rounded-sm p-4 bg-orange-300 dark:bg-purple-950 shadow-lg text-white flex items-center justify-between h-10">
            <Link to="/" className="hover:text-blue-600  truncate">
              EVENT HORIZON
            </Link>
            <Link to="/title-menu" className="hover:text-blue-600  truncate">
              Play!
            </Link>
            <Link to="/instructions" className="hover:text-blue-600  truncate">
              How To Play
            </Link>
            <Link to="/" onClick={() => handleLogout()}className='hover:text-orange-400 truncate'>Logout</Link>
            <button onClick={toggleDarkMode} className="hover:text-blue-600 ">
              🌗
            </button>
          </nav>
        );

      case '/title-menu':
        return (
          <nav className="fixed top-0 w-full p-4 rounded-sm bg-orange-300 dark:bg-purple-950 shadow-lg text-white flex items-center justify-between h-10">
            <Link to="/" className="hover:text-blue-600  truncate">
              EVENT HORIZON
            </Link>
            <Link to="/friends" className="hover:text-blue-600  truncate">
              Friends
            </Link>
            <button
              className="hover:text-blue-600  truncate"
            >
              Logout
            </button>
            <button onClick={toggleDarkMode} className="hover:text-blue-600 ">
              🌗
            </button>
          </nav>
        );

      case '/friends':
        return (
          <nav className="fixed top-0 w-full p-4 rounded-sm bg-orange-300 dark:bg-purple-950 shadow-lg text-white flex items-center justify-between h-10">
            <Link to="/" className="hover:text-blue-600  truncate">
              EVENT HORIZON
            </Link>
            <Link to="/title-menu" className="hover:text-blue-600  truncate">
              Play!
            </Link>
            <Link to="/user-profile" className="hover:text-blue-600  truncate">
              Profile
            </Link>
            <Link to="/instructions" className="hover:text-blue-600  truncate">
              How To Play
            </Link>
            <button onClick={toggleDarkMode} className="hover:text-blue-600 ">
              🌗
            </button>
          </nav>
        );

      default:
        return (
          <nav className="fixed top-0 w-full p-4 rounded-sm bg-orange-300 dark:bg-purple-950 shadow-lg text-white flex items-center justify-between h-10">
            <Link to="/" className="hover:text-blue-600 truncate">
              EVENT HORIZON
            </Link>
            <button onClick={toggleDarkMode} className="hover:text-blue-600 ">
              🌗
            </button>
          </nav>
        );
    }
  };

  return renderNavForRoute();
};


export default NavigationBar;
