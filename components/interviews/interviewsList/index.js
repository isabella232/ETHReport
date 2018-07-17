import React from 'react';
import { PropTypes } from 'prop-types';
import Parser from 'html-react-parser';
import Modal from '../../modal';
import getConfig from 'next/config';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

class InterviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLetter: 'A',
    };
  }

  render() {
    const { activeLetter } = this.state;

    // Sort interviews alphabetically
    const sortedInterviews = this.props.data.sort((a, b) => a.name.localeCompare(b.name));
    const interviews = {};

    // Build up interviews object with letter key
    sortedInterviews.forEach((interview) => {
      const firstLetter = interview.name.charAt(0);

      if (typeof interviews[firstLetter] === 'undefined') {
        interviews[firstLetter] = [];
      }

      interviews[firstLetter].push(interview);
    });

    return (
      <div className="interviews-wrap">
        <div className="mob-interviews-link">
          <button onClick={this.props.toggleInterviewsListModal}>
            <span>Interviews ({this.props.data.length})</span>
          </button>
          <button onClick={this.props.toggleInterviewsListModal}>
            <span>View</span> <img src={`${publicRuntimeConfig.subDirPath}/static/img/right-chevron-icon.svg`} alt="right chevron icon" />
          </button>
        </div>
        <Modal
          isModalOpen={this.props.isInterviewsListModalOpen}
          closeModal={this.props.toggleInterviewsListModal}
          modalOnMobileOnly
        >
          <React.Fragment>
            <h4>Interviews</h4>
            <div className="interviews-nav-wrap">
              <div className="interviews-list">
                {
                  Object.keys(interviews).map(firstLetter => (
                    <div className="letter-block" key={firstLetter}>
                      <div id={firstLetter}>{ firstLetter }</div>
                      <ul>
                        { interviews[firstLetter].map(interview => (
                          <li
                            id={interview.id}
                            key={interview.id}
                          >
                            <button onClick={this.props.toggleSingleInterview}>
                              { Parser(interview.name) }
                            </button>
                          </li>
                        ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
              <div className="letters-nav">
                {
                  Object.keys(interviews).map(firstLetter => (
                    <button
                      key={firstLetter}
                      onClick={() => {
                        document.querySelector(`#${firstLetter}`).scrollIntoView({ behavior: 'smooth' });
                        this.setState({ activeLetter: firstLetter });
                      }}
                      className={activeLetter === firstLetter ? 'active' : ''}
                    >
                      { firstLetter }
                    </button>
                  ))
                }
              </div>
            </div>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

InterviewsList.propTypes = {
  isInterviewsListModalOpen: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired, /* eslint-disable-line */
  toggleInterviewsListModal: PropTypes.func.isRequired,
};

export default InterviewsList;
