import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for tracks, artists, or albums"
          className="p-3 w-full rounded-l-lg text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 p-3 rounded-r-lg text-white hover:bg-blue-400 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
