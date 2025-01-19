import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const TrackCard = ({ track }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Track Image */}
      <div className="relative">
        <img
          src={track.albumCover}
          alt={track.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>

      {/* Track Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{track.name}</h3>
        <p className="text-gray-400 text-sm">{track.artist}</p>
        <p className="text-gray-500 text-sm">{track.album}</p>

        {/* Play Button */}
        <div className="mt-4 flex items-center space-x-4">
          <ReactPlayer
            url={track.audioUrl}
            playing={false}
            controls
            width="100%"
            height="50px"
          />
          <button
            className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-400 transition duration-300"
            onClick={() => alert(`Playing ${track.name}`)}
          >
            Play
          </button>
        </div>

        {/* View Details Link */}
        <Link
          to={`/track/${track.id}`}
          className="text-blue-500 hover:underline text-sm mt-2 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;
