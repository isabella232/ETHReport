import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from '../../modal';
import './style.scss';

const InterviewsList = props => {

  // Sort interviews alphabetically
  const sortedInterviews = props.data.sort((a, b) => { return a.name.localeCompare(b.name); });
  const interviews = {};

  // Build up interviews object with letter key
  sortedInterviews.forEach(interview => {
    const firstLetter = interview.name.charAt(0);
    if (typeof interviews[firstLetter] === 'undefined') {
      interviews[firstLetter] = [];
    }
    interviews[firstLetter].push(interview);
  });

  return (
    <div className="interviews-wrap">
      <div className="mob-interviews-link">
        {/* eslint-disable-next-line */}
        <span
          role="button"
          tabIndex="0"
          onClick={props.toggleInterviewsListModal}
        >
          Interviews ({props.data.length})
        </span>
        {/* eslint-disable-next-line */}
        <span
          role="button"
          tabIndex="0"
          onClick={props.toggleInterviewsListModal}
        >
          View
        </span>
      </div>
      <Modal
        isModalOpen={props.isInterviewsListModalOpen}
        closeModal={props.toggleInterviewsListModal}
        modalOnMobileOnly
      >
        <React.Fragment>
          <h4>Interviews ({ props.data.length })</h4>
          <div className="interviews-nav-wrap">
            <div className="interviews-list">
              {
                Object.keys(interviews).map(firstLetter => (
                  <div className="letter-block" key={firstLetter}>
                    <div id={firstLetter}>{ firstLetter }</div>
                    <ul>
                      {interviews[firstLetter].map(interview => (
                        // eslint-disable-next-line
                        <li
                          id={interview.id}
                          key={interview.id}
                          onClick={props.toggleSingleInterview}
                        >
                          {interview.name}
                        </li>
                        )
                      )}
                    </ul>
                  </div>
                  )
                )
              }
            </div>
            <div className="letters-nav">
              {
                Object.keys(interviews).map(firstLetter => (
                  <span
                    key={firstLetter}
                    onClick={() => { document.querySelector(`#${firstLetter}`).scrollIntoView({ behavior: 'smooth' }); }}
                  >
                    { firstLetter }
                  </span>
                  )
                )
              }
            </div>
          </div>
        </React.Fragment>
      </Modal>
    </div>
  );
};

InterviewsList.propTypes = {
  isInterviewsListModalOpen: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
  toggleInterviewsListModal: PropTypes.func.isRequired,
};

export default InterviewsList;
