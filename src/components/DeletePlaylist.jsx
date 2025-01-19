// src/components/DeletePlaylist.js

import React from 'react';
import api from '../axios';  // Import axios instance
import { useNavigate } from 'react-router-dom';

const DeletePlaylist = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    api.delete(`/playlists/${id}`)
      .then(() => {
        navigate('/');  // Redirect to the homepage after deleting the playlist
      })
      .catch(error => console.error("Error deleting playlist:", error));
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
      Delete Playlist
    </button>
  );
};

export default DeletePlaylist;
