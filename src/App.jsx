import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import TrackCard from './components/TrackCard';
import TrackUpload from './components/TrackUpload';


const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Playlist Page (Dynamic based on playlistId) */}
          <Route path="/playlist/:playlistId" element={<Playlist />} />

          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} />

          {/* Search Page */}
          <Route path="/search" element={<Search />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/TrackCard" element={<TrackCard />} />

          <Route path="/uplode" element={<TrackUpload />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
