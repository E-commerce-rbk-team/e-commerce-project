import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/nav.css';
function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    
    navigate(`/Search?query=${search}`);
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <p type="submit" className="search-button" onClick={handleSearch}>
      <IoSearch />
      </p>
    </div>
  );
}

export default Search;