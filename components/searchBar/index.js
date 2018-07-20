import React from 'react';
import { PropTypes } from 'prop-types';
import getConfig from 'next/config';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

const SearchBar = props => (
  <div
    className={`search-bar ${props.isSearchActive ? 'search-active' : ''}`}
    style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/header-bg.jpg)` }}
  >
    <div className="container">
      <h3 className="main-heading" style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/heading-textured-bg.jpg)` }}>
        Archives
      </h3>
      <form className="search-form">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={props.term}
          onChange={props.onSearchInputChange}
        />
        <img className="search-icon" src={`${publicRuntimeConfig.subDirPath}/static/img/search-icon.svg`} alt="Search" />
        { props.isSearchActive && (
          <button
            className="search-clear-button"
            onClick={props.clearSearchInput}
          >
            <img src={`${publicRuntimeConfig.subDirPath}/static/img/clear-search-icon.svg`} alt="Clear search" />
          </button>
          )
        }
      </form>
      {props.numResults > 0 && props.numResults[0] !== null ?
        <p className="search-count">{ props.numMatchedTerms } search term matches | { props.numResults } interview matches</p> :
      ''}
    </div>
  </div>
);

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  isSearchActive: PropTypes.bool.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  clearSearchInput: PropTypes.func.isRequired,
  numResults: PropTypes.number.isRequired,
  numMatchedTerms: PropTypes.number.isRequired,
};

export default SearchBar;
