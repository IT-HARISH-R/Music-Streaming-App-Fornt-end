import React, { useState, useEffect } from 'react';
import { FaUser, FaEdit, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  const [user, setUser] = useState({
    username: 'john_doe', 
    email: 'john.doe@example.com', 
    profilePicture: 'https://via.placeholder.com/150',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  // Simulate fetching user profile data from an API
  useEffect(() => {
    // Fetch user data from API (replace with actual call)
    setUser({
      username: 'john_doe',
      email: 'john.doe@example.com',
      profilePicture: 'https://via.placeholder.com/150',
    });
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
    // You can save the updated user data to a database or API here
  };

  const handleLogout = () => {
    // Perform logout functionality (e.g., clear auth token, redirect to login page)
    console.log('Logging out...');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-400 flex items-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>

      <div className="mt-6 flex items-center">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mr-6"
        />
        <div>
          {isEditing ? (
            <div>
              <div className="mb-4">
                <label htmlFor="username" className="text-white">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={updatedUser.username}
                  onChange={handleInputChange}
                  className="mt-2 p-3 w-full rounded-lg bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-white">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                  className="mt-2 p-3 w-full rounded-lg bg-gray-700 text-white"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-green-500 p-3 rounded-lg text-white hover:bg-green-400"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xl text-white">Username: {user.username}</p>
              <p className="text-xl text-white">Email: {user.email}</p>
              <button
                onClick={handleEditToggle}
                className="mt-4 text-blue-500 hover:text-blue-400 flex items-center space-x-2"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl text-white mb-4">Liked Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example liked playlists */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white">Playlist 1</h3>
            <p className="text-gray-400">Artist 1</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white">Playlist 2</h3>
            <p className="text-gray-400">Artist 2</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white">Playlist 3</h3>
            <p className="text-gray-400">Artist 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
