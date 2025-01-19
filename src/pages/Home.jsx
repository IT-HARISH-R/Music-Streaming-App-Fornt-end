import React, { useState, useEffect } from 'react';
import PlaylistCard from '../components/PlaylistCard';

const Home = () => {
  const [playlists, setPlaylists] = useState([]);

  // Simulate fetching playlists from an API or database
  useEffect(() => {
    const fetchPlaylists = () => {
      // Replace with actual API call if needed
      const fetchedPlaylists = [
        {
          id: '1',
          name: 'Top Hits 2025',
          coverImage: 'https://via.placeholder.com/150',
          tracks: [
            { id: '1', name: 'Song 1', artist: 'Artist 1' },
            { id: '2', name: 'Song 2', artist: 'Artist 2' },
          ],
        },
        {
          id: '2',
          name: 'Chill Vibes',
          coverImage: 'https://via.placeholder.com/150',
          tracks: [
            { id: '3', name: 'Song 3', artist: 'Artist 3' },
            { id: '4', name: 'Song 4', artist: 'Artist 4' },
          ],
        },
        // Add more playlists as needed
      ];
      setPlaylists(fetchedPlaylists);
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Browse Playlists</h1>

      {/* Playlist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Home;
