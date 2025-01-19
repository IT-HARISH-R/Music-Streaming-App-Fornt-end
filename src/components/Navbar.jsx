// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          <span className="text-blue-400">Music</span>App
        </Link>
        <div>
          <Link to="/" className="px-4 py-2 hover:bg-gray-600 rounded-md">
            Home
          </Link>
          <Link to="/add" className="px-4 py-2 hover:bg-gray-600 rounded-md ml-4">
            Add Playlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
