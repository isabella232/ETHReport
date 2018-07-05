import React from 'react';
import Modal from '../../components/modal';
import Data from '../../data/archives/interviews';
import './style.scss';

class InterviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInterviewsListModalOpen: false };
    this.toggleInterviewsListModal = this.toggleInterviewsListModal.bind(this);
  }

  toggleInterviewsListModal() {
    const { isInterviewsListModalOpen } = this.state;
    this.setState({ isInterviewsListModalOpen: !isInterviewsListModalOpen });
  }

  render() {
    const { isInterviewsListModalOpen } = this.state;

    return (
      <div className="interviews-list-wrap">
        <div className="mob-interviews-link">
          <span role="button" tabIndex="0" onClick={this.toggleInterviewsListModal}>Interviews (100)</span> {/* eslint-disable-line */}
          <span role="button" tabIndex="0" onClick={this.toggleInterviewsListModal}>View</span> {/* eslint-disable-line */}
        </div>
        <Modal
          isModalOpen={isInterviewsListModalOpen}
          closeModal={this.toggleInterviewsListModal}
          modalOnMobileOnly
        >
          {
            (
              <React.Fragment>
                <h4>Interviews</h4>
                <ul>
                  {
                    Data.map(interview => <li key={interview.id}>{ `${interview.name} ${interview.surname}`}</li>)
                  }
                </ul>
              </React.Fragment>
            )
          }
        </Modal>
      </div>
    );
  }
}

export default InterviewsList;
