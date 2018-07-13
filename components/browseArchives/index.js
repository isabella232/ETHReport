import React from 'react';
import _ from 'lodash';
import RelatedInterviewsList from '../interviews/relatedInterviewsList';
import InterviewsList from '../interviews/interviewsList';
import SingleInterview from '../interviews/singleInterview';
import TopicsList from '../topicsList';
import ProjectsList from '../projectsList';
import SearchBar from '../searchBar';
import SearchResults from '../searchResults';
import { InterviewsData, Questions } from '../../data/archives/interviews-data';
import './style.scss';

class BrowseArchives extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      debounceTerm: '',
      searchResults: [null],
      isSingleInterviewModalOpen: false,
      isInterviewsListModalOpen: false,
      activeSingleInterviewId: 1,
      isSearchActive: false,
      interviewData: this.transformInterviews(InterviewsData),
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.toggleSingleInterview = this.toggleSingleInterview.bind(this);
    this.toggleInterviewsListModal = this.toggleInterviewsListModal.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.clearSearchInput = this.clearSearchInput.bind(this);
    this.transformInterviews = this.transformInterviews.bind(this);
    this.termIsInInterview = this.termIsInInterview.bind(this);
    this.getSearchResultsDebounce = this.getSearchResultsDebounce.bind(this);
  }

  onSearchInputChange = (event) => {
    this.setState({
      term: event.target.value,
      isSearchActive: true,
      searchResults: [null],
    });

    if (event.target.value.length === 0) {
      this.setState({ isSearchActive: false });
    }

    // Throttle search result frequency with debounce while typing
    this.getSearchResultsDebounce();
  }

  getSearchResults = (term) => {
    // Edit function to do actual search based on term and update searchResults with dynamic data
    // eslint-disable-next-line
    console.log(`Get search results array based on searching for: ${term}`);

    const { interviewData } = this.state;
    // we need to mutate searchResults to contain matchedQuestionIndex
    /* const searchResults = interviewData
      .filter(interview => this.termIsInInterview(term, interview)); */

    const searchResults = interviewData.reduce((filtered, interview) => {
      const findTerm = this.termIsInInterview(term, interview);
      const matchedIndex = findTerm.foundIndex;

      if (findTerm.found) {
        filtered.push({ ...interview, matchedIndex });
      }

      return filtered;
    }, []);

    // Using static full interviews data array for now
    this.setState({
      searchResults,
      debounceTerm: term,
    });
  }

  getSelectedInterview = () => {
    const { activeSingleInterviewId, interviewData } = this.state;
    const selectedInterview = interviewData
      .find(item => item.id === activeSingleInterviewId);
    return selectedInterview;
  }

  setSearchTerm = (event) => {
    this.setState({
      term: event.target.innerText,
      isSearchActive: true,
    });

    this.getSearchResults(event.target.innerText);
  }

  getSearchResultsDebounce = _.debounce(() => {
    const { term } = this.state;
    this.getSearchResults(term);
  }, 700);

  clearSearchInput = () => {
    this.setState({
      isSearchActive: false,
      term: '',
    });
  }

  transformInterviews = (interviews) => {
    // eslint-disable-next-line
    const length = Object.keys(interviews).length;
    const betterInterviews = [];

    for (let i = 0; i < length; i++) {
      const interview = interviews[i];
      const qKeys = Object.keys(interview);
      const interviewFormatted = [];

      qKeys.forEach((key, index) => {
        if (key !== 'Name') {
          interviewFormatted.push({
            question: index,
            answer: interview[key],
          });
        }
      });

      betterInterviews.push({
        id: i,
        tags: 'tag1, tag2, tag3',
        name: interview.Name,
        matchedIndex: -1,
        interview: interviewFormatted,
      });
    }

    return betterInterviews;
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

  termIsInInterview = (term, interview) => {
    // first search name
    // then search tags
    // then search answers
    const lcTerm = term.toLowerCase();
    const matchesName = interview.name.toLowerCase().includes(lcTerm);
    const { interviewData } = this.state;
    let foundIndex = 0;

    if (matchesName) {
      return {
        found: true,
        foundIndex: 0,
      };
    }


    const matchesTag = interview.tags.toLowerCase().indexOf(lcTerm) !== -1;

    if (matchesTag) {
      return {
        found: true,
        foundIndex: 0,
      };
    }

    const matchingQuestions = interview.interview
      .filter((question, questionIndex) => {
        if (question.answer === null) {
          return false;
        }

        const index = question.answer.toLowerCase().indexOf(lcTerm);

        if (index !== -1 && interview.activeIndex !== -1) {
          foundIndex = questionIndex;
        }

        return index !== -1;
      });

    this.setState({
      interviewData,
    });

    if (matchingQuestions.length > 0) {
      return {
        found: true,
        foundIndex,
      };
    }

    return false;
  }

  render() {
    const {
      isSingleInterviewModalOpen,
      isInterviewsListModalOpen,
      isSearchActive,
      activeSingleInterviewId,
      term,
      searchResults,
      interviewData,
      debounceTerm,
    } = this.state;

    return (
      <div className="browse-wrap" id="browse">
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
                data={interviewData}
                toggleSingleInterview={this.toggleSingleInterview}
              />)
            }
          </div>
          <div className="browse-content-right">
            {isSearchActive ? (
              <SearchResults
                data={searchResults}
                questions={Questions}
                term={debounceTerm}
                toggleSingleInterview={this.toggleSingleInterview}
              />) :
              (
                <React.Fragment>
                  <InterviewsList
                    data={interviewData}
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
              questions={Questions}
            />)
          }
        </div>
      </div>
    );
  }
}

export default BrowseArchives;
