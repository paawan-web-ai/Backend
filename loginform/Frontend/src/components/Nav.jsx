import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex px-10 py-4 justify-between bg-purple-800 text-xl font-bold items-center text-white shadow-lg">
      <Link to="/" className="text-3xl hover:text-purple-200 transition">
        MyApp
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-purple-200 transition">
          HOME
        </Link>
        <Link to="/about" className="hover:text-purple-200 transition">
          ABOUT
        </Link>
        {user ? (
          <>
            <span className="text-purple-200">Hi, {user.name}!</span>
            <button
              onClick={logout}
              className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
