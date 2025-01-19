// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlaylistList from './components/PlaylistList';
import Navbar from './components/Navbar';
import DeletePlaylist from './components/DeletePlaylist';
import AddPlaylist from './components/AddPlaylist';
import UpdatePlaylist from './components/UpdatePlaylist';

// import PlaylistList from './components/PlaylistList';  // Displays list of playlists
// import PlaylistDetail from './components/PlaylistDetail';  // Displays playlist details
// import AddPlaylist from './components/AddPlaylist';  // Form to add a playlist
// import UpdatePlaylist from './components/UpdatePlaylist';  // Form to update playlist
// import Navbar from './components/Navbar';  // Navigation bar

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          {/* Route to display all playlists */}
          <Route path="/" element={<PlaylistList />} />

          {/* Route to display a specific playlist by ID */}
          <Route path="/playlist/:id" element={<DeletePlaylist />} />

          {/* Route to add a new playlist */}
          <Route path="/add" element={<AddPlaylist />} />

          {/* Route to update a playlist */}
          <Route path="/update/:id" element={<UpdatePlaylist />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
