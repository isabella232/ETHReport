import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const Modal = props => (
  <div className={`modal ${props.isModalOpen ? 'modal-open' : ''} ${props.modalOnMobileOnly ? 'modal-on-mobile-only' : ''} `}>
    <div className="modal-inner">
      {props.children}
      <div role="button" tabIndex="0" onClick={props.closeModal} className="modal-close">x</div> {/* eslint-disable-line */}
    </div>
  </div>
);

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.shape({}).isRequired,
  closeModal: PropTypes.func.isRequired,
  modalOnMobileOnly: PropTypes.bool,
};

Modal.defaultProps = {
  modalOnMobileOnly: false,
};

export default Modal;
