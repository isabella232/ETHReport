import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const SearchBar = props => (
  <div className="search-bar">
    <div className="container">
      <h3>Browse Archives</h3>
      <form className="search-form">
        <input
          className="search-input"
          type="search"
          placeholder="Search archives"
          value={props.term}
          onChange={props.onSearchInputChange}
        />
        { props.isSearchActive && (
          // eslint-disable-next-line
          <span
            className="search-clear-button"
            onClick={props.clearSearchInput}
          >
            Clear search
          </span>
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
