import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const SearchBar = props => (
  <div className="search-bar">
    <div className="container">
      <h3>Browse Archives</h3>
      <input
        className="search-input"
        type="search"
        placeholder="Search archives"
        value={props.term}
        onChange={props.onInputChange}
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default SearchBar;
