import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          MusicStream
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Search
          </Link>
          <Link
            to="/playlist"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Playlists
          </Link>
          <Link
            to="/profile"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Profile
          </Link>
          <Link
            to="/uplode"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            uplode
          </Link>
        </div>

        {/* User Profile or Login */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-lg bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-400 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
