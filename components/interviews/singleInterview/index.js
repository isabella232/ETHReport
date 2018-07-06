import React from 'react';
import { PropTypes } from 'prop-types';
import Parser from 'html-react-parser';
import Modal from '../../modal';
import './style.scss';

const SingleInterview = props => (
  <Modal
    isModalOpen={true}
    closeModal={props.toggleSingleInterview}
  >
    <div className="single-interview">
      <span className="number">{ props.activeSingleInterview }</span>
      <div>{ Parser(props.selectedInterview.content) }</div>
    </div>
  </Modal>
);

SingleInterview.propTypes = {
  activeSingleInterview: PropTypes.number.isRequired,
  selectedInterview: PropTypes.shape({}).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
};

export default SingleInterview;
