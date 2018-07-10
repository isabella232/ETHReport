import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const SearchResults = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }

  // sort array alphabetically
  const sortedInterviews = props.data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="search-results">
      <ul>
        { sortedInterviews.map(interview => (
          // eslint-disable-next-line
          <li
            id={interview.id}
            key={interview.id}
            onClick={props.toggleSingleInterview}
          >
            <h3>{ interview.name }</h3>
            <h5>1) Question goes here</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit dolor quis
              ante mollis fringilla. <span>Lorem</span> ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
};

export default SearchResults;
