import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from '../../modal';
import './style.scss';

const SingleInterview = props => (
  <Modal
    isModalOpen
    closeModal={props.toggleSingleInterview}
  >
    <div className="single-interview">
      <span className="number">{ props.activeSingleInterviewId }</span>
      <span className="name"> { props.selectedInterview.name } </span>
      { props.selectedInterview.interview.filter(interview => interview.answer !== null)
        .map((interview, index) => {
          const question = props.questions.find(q => q.id === interview.question);

          return (
            <div key={`question-${question.id}`}>
              <p className="question">{index + 1}) { question.text } </p>
              <p className="answer">{ interview.answer } </p>
            </div>
          );
        })
      }
    </div>
  </Modal>
);

SingleInterview.propTypes = {
  activeSingleInterviewId: PropTypes.number.isRequired,
  selectedInterview: PropTypes.shape({
    name: PropTypes.string.isRequired,
    interview: PropTypes.array.isRequired,
  }).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default SingleInterview;
