import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const RelatedInterviewsList = props => (
  <div className="related-interviews-list">
    <h4>Related <br />Interviews</h4>
    <ul>
      { props.data.map(interview => (
        // eslint-disable-next-line
        <li
          id={interview.id}
          key={interview.id}
          onClick={props.toggleSingleInterview}
        >
          { interview.name }
        </li>
        ))
      }
    </ul>
  </div>
);

RelatedInterviewsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
};

export default RelatedInterviewsList;
