// src/components/AddPlaylist.js

import React, { useState } from 'react';
import api from '../axios';  // Import the axios instance
import { useNavigate } from 'react-router-dom';

const AddPlaylist = () => {
  const [name, setName] = useState('');
  const [tracks, setTracks] = useState([]);
  const navigate = useNavigate();

  const handleAddPlaylist = (e) => {
    e.preventDefault();

    // Prepare the playlist data
    const newPlaylist = { name, tracks };

    // Send a POST request to create a new playlist
    api.post('/playlists', newPlaylist)
      .then(response => {
        navigate('/');  // Redirect to the home page after successfully adding a playlist
      })
      .catch(error => {
        console.error("Error adding playlist:", error);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Playlist</h1>
      <form onSubmit={handleAddPlaylist}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Playlist Name" 
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Playlist</button>
      </form>
    </div>
  );
};

export default AddPlaylist;
