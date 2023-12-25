import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchRes from './SearchRes';

function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    
    navigate(`/Search?query=${search}`);
  };

  return (
    <div>
      <input
        type="search"
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button type="submit" className="search-button" onClick={handleSearch}>
        <IoSearch />
      </button>
    </div>
  );
}

export default Search;
