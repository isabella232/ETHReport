import React from 'react';
import _ from 'lodash';
import RelatedInterviewsList from '../interviews/relatedInterviewsList';
import InterviewsList from '../interviews/interviewsList';
import SingleInterview from '../interviews/singleInterview';
import TopicsList from '../topicsList';
import ProjectsList from '../projectsList';
import SearchBar from '../searchBar';
import SearchResults from '../searchResults';
import InterviewsData from '../../data/archives/interviews';
import './style.scss';

class BrowseArchives extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      searchResults: [],
      isSingleInterviewModalOpen: false,
      isInterviewsListModalOpen: false,
      activeSingleInterviewId: 1,
      isSearchActive: false,
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.toggleSingleInterview = this.toggleSingleInterview.bind(this);
    this.toggleInterviewsListModal = this.toggleInterviewsListModal.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.clearSearchInput = this.clearSearchInput.bind(this);
  }

  onSearchInputChange = (event) => {
    const { term } = this.state;
    const getSearchResults = _.debounce(() => { this.getSearchResults(term); }, 500);

    this.setState({
      term: event.target.value,
      isSearchActive: true,
    });

    if (event.target.value.length === 0) {
      this.setState({ isSearchActive: false });
    }

    // Throttle search result frequency with debounce
    getSearchResults(term);
  }

  getSearchResults = (term) => {
    // Edit function to do actual search based on term and update searchResults with dynamic data
    // eslint-disable-next-line
    console.log(`Get search results array based on searching for: ${term}`);

    // Using static full interviews data array for now
    this.setState({
      searchResults: InterviewsData,
    });
  }

  getSelectedInterview = () => {
    const { activeSingleInterviewId } = this.state;
    const selectedInterview = InterviewsData.find(item => item.id === activeSingleInterviewId);
    return selectedInterview;
  }

  setSearchTerm = (event) => {
    this.setState({
      term: event.target.innerText,
      isSearchActive: true,
    });
  }

  clearSearchInput = () => {
    this.setState({
      isSearchActive: false,
      term: '',
    });
  }

  toggleInterviewsListModal = () => {
    const { isInterviewsListModalOpen } = this.state;

    this.setState({
      isInterviewsListModalOpen: !isInterviewsListModalOpen,
      isSingleInterviewModalOpen: false,
    });
  }

  toggleSingleInterview = (event) => {
    const { isSingleInterviewModalOpen, isInterviewsListModalOpen } = this.state;

    let clickedInterview = event.target;
    while (clickedInterview.id === '') {
      clickedInterview = clickedInterview.parentNode;
    }
    const clickedSingleInterviewId = clickedInterview.id;

    this.setState({
      isInterviewsListModalOpen: !isInterviewsListModalOpen,
      isSingleInterviewModalOpen: !isSingleInterviewModalOpen,
      activeSingleInterviewId: Number(clickedSingleInterviewId),
    });
  }

  render() {
    const {
      isSingleInterviewModalOpen,
      isInterviewsListModalOpen,
      isSearchActive,
      activeSingleInterviewId,
      term,
      searchResults,
    } = this.state;

    return (
      <div className="browse-wrap">
        <SearchBar
          onSearchInputChange={this.onSearchInputChange}
          clearSearchInput={this.clearSearchInput}
          isSearchActive={isSearchActive}
          term={term}
        />
        <div className="browse-content-wrap container">
          <div className="browse-content-left">
            {isSearchActive &&
              (<RelatedInterviewsList
                data={InterviewsData}
                toggleSingleInterview={this.toggleSingleInterview}
              />)
            }
          </div>
          <div className="browse-content-right">
            {isSearchActive ? (
              <SearchResults
                data={searchResults}
                toggleSingleInterview={this.toggleSingleInterview}
              />) :
              (
                <React.Fragment>
                  <InterviewsList
                    data={InterviewsData}
                    isInterviewsListModalOpen={isInterviewsListModalOpen}
                    toggleSingleInterview={this.toggleSingleInterview}
                    toggleInterviewsListModal={this.toggleInterviewsListModal}
                  />
                  <TopicsList setSearchTerm={this.setSearchTerm} />
                  <ProjectsList setSearchTerm={this.setSearchTerm} />
                </React.Fragment>
              )
            }
          </div>
          {isSingleInterviewModalOpen &&
            (<SingleInterview
              activeSingleInterviewId={activeSingleInterviewId}
              selectedInterview={this.getSelectedInterview()}
              toggleSingleInterview={this.toggleSingleInterview}
            />)
          }
        </div>
      </div>
    );
  }
}

export default BrowseArchives;
