// src/components/UpdatePlaylist.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../axios';  // Import the axios instance

const UpdatePlaylist = () => {
  const { id } = useParams();  // Get the playlist ID from the URL parameters
  const [name, setName] = useState('');
  const [tracks, setTracks] = useState([]);
  const navigate = useNavigate();

  // Fetch the playlist data when the component mounts
  useEffect(() => {
    api.get(`/playlists/${id}`)
      .then(response => {
        const playlist = response.data;
        setName(playlist.name);
        setTracks(playlist.tracks || []);
      })
      .catch(error => console.error("Error fetching playlist:", error));
  }, [id]);

  // Handle the form submission to update the playlist
  const handleUpdatePlaylist = (e) => {
    e.preventDefault();

    // Prepare the updated playlist data
    const updatedPlaylist = { name, tracks };

    // Send a PUT request to update the playlist
    api.put(`/playlists/${id}`, updatedPlaylist)
      .then(response => {
        navigate(`/playlist/${id}`);  // Redirect to the playlist detail page after updating
      })
      .catch(error => {
        console.error("Error updating playlist:", error);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Update Playlist</h1>
      <form onSubmit={handleUpdatePlaylist}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Playlist Name"
          className="border p-2 mb-4 w-full"
          required
        />
        <textarea
          value={tracks}
          onChange={(e) => setTracks(e.target.value.split(','))}
          placeholder="Track Names (comma-separated)"
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Playlist
        </button>
      </form>
    </div>
  );
};

export default UpdatePlaylist;
