import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from '../../modal';
import './style.scss';

const InterviewsList = props => (
  <div className="interviews-wrap">
    <div className="mob-interviews-link">
      <span role="button" tabIndex="0" onClick={props.toggleInterviewsListModal}>Interviews ({ props.data.length })</span> {/* eslint-disable-line */}
      <span role="button" tabIndex="0" onClick={props.toggleInterviewsListModal}>View</span> {/* eslint-disable-line */}
    </div>
    <Modal
      isModalOpen={props.isInterviewsListModalOpen}
      closeModal={props.toggleInterviewsListModal}
      modalOnMobileOnly
    >
      <div className="interviews-list">
        <h4>Interviews ({ props.data.length })</h4>
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
    </Modal>
  </div>
);

InterviewsList.propTypes = {
  isInterviewsListModalOpen: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
  toggleInterviewsListModal: PropTypes.func.isRequired,
};

export default InterviewsList;
