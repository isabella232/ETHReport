import React from 'react';
import { PropTypes } from 'prop-types';
import getConfig from 'next/config';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

const SearchBar = props => (
  <div className="search-bar" style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/header-bg.jpg)` }}>
    <div className="container">
      <h3>Browse</h3>
      <form className="search-form">
        <input
          className="search-input"
          type="search"
          placeholder="Search archives"
          value={props.term}
          onChange={props.onSearchInputChange}
        />
        { props.isSearchActive && (
          <button
            className="search-clear-button"
            onClick={props.clearSearchInput}
          >
            Clear search
          </button>
          )
        }
      </form>
    </div>
  </div>
);

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  isSearchActive: PropTypes.bool.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  clearSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
