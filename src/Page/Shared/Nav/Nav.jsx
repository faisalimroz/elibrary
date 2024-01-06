// Nav.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import Searchresult from '../../Searchresult/Searchresult';

const Nav = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/search?query=${searchInput}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        return response.json();
      })
      .then(data => {
        setSearchResults(data);
        setLoading(false);
        // Use the navigate function from useNavigate to redirect
        navigate('/search-results');
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setError('Failed to fetch search results. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="navbar bg-green-100">
        <div className="flex items-center">
          <img src='https://i.ibb.co/r47qDyS/fahim.png' alt='' className='logo' />
        </div>
        <div className="form-control mx-auto text-center">
          <div className="input-group search-field-container">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="btn btn-square bg-slate-600"
              onClick={handleSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {searchResults.length > 0 && window.location.pathname === '/search-results' && (
        <Searchresult results={searchResults} />
      )}
    </div>
  );
};

export default Nav;
