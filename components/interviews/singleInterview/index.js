import React from 'react';
import { PropTypes } from 'prop-types';
import Parser from 'html-react-parser';
import Modal from '../../modal';
import './style.scss';

const SingleInterview = props => (
  <Modal
    isModalOpen
    closeModal={props.toggleSingleInterview}
  >
    <div className="single-interview">
      <div className="number">{ props.activeSingleInterviewId.toString().padStart(3, '0') }</div>
      <div className="name"> { Parser(props.selectedInterview.name) } </div>
      { props.selectedInterview.interview.filter(interview => interview.answer !== null)
        .map((interview, index) => {
          const question = props.questions.find(q => q.id === interview.question);

          return (
            <div className="qa-block" key={`question-${question.id}`}>
              <p className="question">{index + 1}) { question.text }</p>
              <p className="answer">{ Parser(interview.answer) }</p>
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
