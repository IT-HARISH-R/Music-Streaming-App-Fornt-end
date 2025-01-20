import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios';

const TrackUpload = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState(''); // Add releaseDate state
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  // Handle audio file selection
  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!title || !artist || !album || !genre || !duration || !releaseDate || !audioFile) {
      setErrorMessage('All fields are required');
      return;
    }

    // Create FormData to send the data (including the file)
    const formData = new FormData();
    formData.append('name', title);
    formData.append('artist', artist);
    formData.append('album', album);
    formData.append('genre', genre);
    formData.append('duration', duration);
    formData.append('releaseDate', releaseDate); // Include releaseDate in FormData
    formData.append('audio', audioFile);

    try {
      setLoading(true);
      // Make a POST request to upload the track
      const response = await api.post('/track', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setLoading(false);
      if (response.status === 201) {
        alert('Track uploaded successfully!');
        navigate('/tracks');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('Error uploading track, please try again.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Upload New Track</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Artist Field */}
        <div>
          <label htmlFor="artist" className="block text-sm font-medium">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Album Field */}
        <div>
          <label htmlFor="album" className="block text-sm font-medium">Album</label>
          <input
            type="text"
            id="album"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Genre Field */}
        <div>
          <label htmlFor="genre" className="block text-sm font-medium">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Duration Field */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium">Duration (in seconds)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Release Date Field */}
        <div>
          <label htmlFor="releaseDate" className="block text-sm font-medium">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Audio File Input */}
        <div>
          <label htmlFor="audio" className="block text-sm font-medium">Audio File</label>
          <input
            type="file"
            id="audio"
            name="audio"
            onChange={handleFileChange}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-700 text-white"
          />
        </div>

        {/* Display Error Message */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 ${loading && 'opacity-50 cursor-not-allowed'}`}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Track'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrackUpload;
