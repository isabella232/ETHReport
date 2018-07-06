import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const RelatedInterviewsList = props => (
  <div className="related-interviews-list">
    <h4>Related <br />Interviews</h4>
    <ul>
      {
        props.data.map(interview =>
          (<li
            id={interview.id}
            key={interview.id}
            role="button"
            tabIndex="0"
            onClick={props.toggleSingleInterview}
          >
            { interview.name }
          </li>))
      }
    </ul>
  </div>
);

RelatedInterviewsList.propTypes = {
  data: PropTypes.array.isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
}

export default RelatedInterviewsList;
