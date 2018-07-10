import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const RelatedInterviewsList = props => (
  <div className="related-interviews-list">
    <h4>Related <br />Interviews</h4>
    <ul>
      { props.data.map(interview => (
        <li
          id={interview.id}
          key={interview.id}
        >
          <button onClick={props.toggleSingleInterview}>{interview.name}</button>
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
