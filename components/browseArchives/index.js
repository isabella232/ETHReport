import React from 'react';
import RelatedInterviewsList from '../interviews/relatedInterviewsList'
import InterviewsList from '../interviews/interviewsList';
import SingleInterview from '../interviews/singleInterview';
import TopicsList from '../topicsList';
import ProjectsList from '../projectsList';
import SearchResults from '../searchResults';
import Data from '../../data/archives/interviews';
import './style.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      isSingleInterviewModalOpen: false,
      isInterviewsListModalOpen: false,
      activeSingleInterview: 1,
      isSearchActive: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.toggleSingleInterview = this.toggleSingleInterview.bind(this);
    this.toggleInterviewsListModal = this.toggleInterviewsListModal.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
      isSearchActive: true,
    });

    if (event.target.value.length === 0) {
      this.setState({isSearchActive: false});
    }
  }

  toggleInterviewsListModal() {
    const { isInterviewsListModalOpen } = this.state;
    this.setState({
      isInterviewsListModalOpen: !isInterviewsListModalOpen,
      isSingleInterviewModalOpen: false,
    });
  }

  toggleSingleInterview(event) {
    const { isSingleInterviewModalOpen } = this.state;
    this.setState({
      isSingleInterviewModalOpen: !isSingleInterviewModalOpen,
      isInterviewsListModalOpen: false,
      activeSingleInterview: Number(event.target.id),
    });
  }

  getSelectedInterview() {
    const { activeSingleInterview } = this.state;
    const selectedInterview = Data.find( item => item.id === activeSingleInterview);
    return selectedInterview;
  }

  render() {
    const { isSingleInterviewModalOpen, isInterviewsListModalOpen, isSearchActive, activeSingleInterview } = this.state;

    return (
      <div className="browse-wrap">
        <div className="search-bar">
          <div className="container">
            <h3>Browse Archives</h3>
            <input
              className="search-input"
              type="search"
              placeholder="Search archives"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <div className="browse-content-wrap container">
          <div className="browse-content-left">
            {isSearchActive && <RelatedInterviewsList data={Data} toggleSingleInterview={this.toggleSingleInterview} />}
          </div>
          <div className="browse-content-right">
            {isSearchActive ? <SearchResults /> :
             (
                <React.Fragment>
                  <InterviewsList
                    data={Data}
                    isInterviewsListModalOpen={isInterviewsListModalOpen}
                    toggleSingleInterview={this.toggleSingleInterview}
                    toggleInterviewsListModal={this.toggleInterviewsListModal}
                  />
                  <TopicsList />
                  <ProjectsList />
                </React.Fragment>
              )
            }
          </div>
          {isSingleInterviewModalOpen &&
            (<SingleInterview
              activeSingleInterview={activeSingleInterview}
              selectedInterview={this.getSelectedInterview()}
              toggleSingleInterview={this.toggleSingleInterview}
            />)
          }
        </div>
      </div>
    );
  }
}

export default Search;
