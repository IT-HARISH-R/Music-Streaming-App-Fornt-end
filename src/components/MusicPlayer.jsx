import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShuffleToggle = () => {
    setIsShuffled(!isShuffled);
  };

  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      {/* Track Info */}
      <div className="flex items-center mb-4">
        <img
          src={track.albumCover}
          alt={track.name}
          className="w-16 h-16 object-cover rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{track.name}</h3>
          <p className="text-gray-400 text-sm">{track.artist}</p>
        </div>
      </div>

      {/* React Player */}
      <ReactPlayer
        url={track.audioUrl}
        playing={isPlaying}
        controls={true}
        volume={volume}
        loop={isLooping}
        width="100%"
        height="50px"
        className="mb-4"
      />

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-400 transition duration-300"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        {/* Shuffle Button */}
        <button
          onClick={handleShuffleToggle}
          className={`px-4 py-2 rounded-md text-white transition duration-300 ${
            isShuffled ? 'bg-green-500' : 'bg-gray-600'
          }`}
        >
          Shuffle
        </button>

        {/* Loop Button */}
        <button
          onClick={handleLoopToggle}
          className={`px-4 py-2 rounded-md text-white transition duration-300 ${
            isLooping ? 'bg-yellow-500' : 'bg-gray-600'
          }`}
        >
          Loop
        </button>
      </div>

      {/* Volume Control */}
      <div className="mt-4">
        <label htmlFor="volume" className="text-sm">Volume</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full mt-2"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
