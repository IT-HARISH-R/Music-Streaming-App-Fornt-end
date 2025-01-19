import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Playlist Image */}
      <div className="relative">
        <img
          src={playlist.coverImage}
          alt={playlist.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>

      {/* Playlist Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{playlist.name}</h3>
        <p className="text-gray-400 text-sm">
          {playlist.tracks.length} {playlist.tracks.length === 1 ? 'Track' : 'Tracks'}
        </p>

        {/* View Playlist Button */}
        <Link
          to={`/playlist/${playlist.id}`}
          className="text-blue-500 hover:underline text-sm mt-2 block"
        >
          View Playlist
        </Link>
      </div>
    </div>
  );
};

export default PlaylistCard;
