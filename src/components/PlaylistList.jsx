// src/components/PlaylistList.js

import React, { useState, useEffect } from 'react';
import api from '../axios'; // Import the axios instance
import { Link } from 'react-router-dom';

const PlaylistList = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch playlists when the component mounts
    api.get('/playlists')  // Using the axios instance to make a GET request
      .then(response => setPlaylists(response.data))
      .catch(error => console.error("Error fetching playlists:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Playlists</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add New Playlist</Link>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist._id} className="border p-4 mb-2">
            <Link to={`/playlist/${playlist._id}`} className="text-blue-500">{playlist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;
