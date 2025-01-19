import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa';
import TrackCard from '../components/TrackCard';

const Playlist = () => {
  const { playlistId } = useParams(); // Get the playlist ID from the URL
  const [playlist, setPlaylist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Simulate fetching playlist details from an API or database
  useEffect(() => {
    // Replace with actual API call if needed
    const fetchPlaylist = () => {
      // Example playlist data
      const fetchedPlaylist = {
        id: playlistId,
        name: 'Top Hits 2025',
        coverImage: 'https://via.placeholder.com/150',
        tracks: [
          { id: '1', name: 'Song 1', artist: 'Artist 1', liked: false, url: 'song1.mp3' },
          { id: '2', name: 'Song 2', artist: 'Artist 2', liked: false, url: 'song2.mp3' },
        ],
      };
      setPlaylist(fetchedPlaylist);
    };

    fetchPlaylist();
  }, [playlistId]);

  const togglePlay = (track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying); // Toggle play/pause if the same track is clicked
    } else {
      setCurrentTrack(track);
      setIsPlaying(true); // Start playing the new track
    }
  };

  const toggleLike = (trackId) => {
    setPlaylist((prevPlaylist) => {
      const updatedTracks = prevPlaylist.tracks.map((track) =>
        track.id === trackId ? { ...track, liked: !track.liked } : track
      );
      return { ...prevPlaylist, tracks: updatedTracks };
    });
  };

  return (
    <div className="container mx-auto p-6">
      {playlist ? (
        <>
          <div className="flex items-center mb-6">
            <img
              src={playlist.coverImage}
              alt={playlist.name}
              className="w-40 h-40 rounded-full object-cover mr-6"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{playlist.name}</h1>
              <p className="text-gray-400">{playlist.tracks.length} tracks</p>
            </div>
          </div>

          {/* Track List */}
          <div>
            {playlist.tracks.map((track) => (
              <div key={track.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
                <TrackCard track={track} onPlay={togglePlay} onLike={toggleLike} isPlaying={isPlaying && currentTrack?.id === track.id} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-white">Loading playlist...</p>
      )}
    </div>
  );
};

export default Playlist;
