import React from 'react';
import _ from 'lodash';
import RelatedInterviewsList from '../interviews/relatedInterviewsList';
import InterviewsList from '../interviews/interviewsList';
import SingleInterview from '../interviews/singleInterview';
import TopicsList from '../topicsList';
import ProjectsList from '../projectsList';
import SearchBar from '../searchBar';
import SearchResults from '../searchResults';
import { InterviewData, Questions } from '../../data/archives/interviews';
import './style.scss';

class BrowseArchives extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      debounceTerm: '',
      searchResults: [],
      isSingleInterviewModalOpen: false,
      isInterviewsListModalOpen: false,
      activeSingleInterviewId: 1,
      isSearchActive: false,
      interviewData: this.transformInterviews(InterviewData),
      matchedCount: 0,
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
      searchResults: [],
    });

    if (event.target.value.length === 0) {
      this.setState({ isSearchActive: false });
    }

    // Throttle search result frequency with debounce while typing
    this.getSearchResultsDebounce();
  }

  getSearchResults = (term) => {
    const { interviewData } = this.state;

    const searchResults = interviewData.reduce((filtered, interview) => {
      const findTerm = this.termIsInInterview(term, interview);
      const matchedIndex = findTerm.foundIndex;
      const { matchingQuestionAnswerPositions } = findTerm;
      const { matchCount } = findTerm;

      if (findTerm.found) {
        filtered.push({
          ...interview,
          matchedIndex,
          matchingQuestionAnswerPositions,
          matchCount,
        });
      }

      return filtered;
    }, []);

    const matchedCount = searchResults
      .reduce((accumulator, match) => accumulator + match.matchCount, 0);

    this.setState({
      searchResults,
      debounceTerm: term,
      matchedCount,
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
      matchedCount: 0,
      searchResults: [],
    });
  }

  transformInterviews = (interviews) => {
    const { length } = Object.keys(interviews);
    const betterInterviews = [];

    for (let i = 0; i < length; i++) {
      const interview = interviews[i];
      const qKeys = Object.keys(interview);
      const interviewFormatted = [];

      qKeys.forEach((key) => {
        if (key !== 'name' && interview[key] !== null && interview[key].answer !== null && interview[key].answer !== '') {
          interviewFormatted.push({
            question: key,
            answer: interview[key].answer,
          });
        }
      });

      betterInterviews.push({
        id: i + 1,
        name: interview.name,
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
    const lcTerm = term.toLowerCase();
    const matchesName = interview.name.toLowerCase().includes(lcTerm);
    let foundIndex = 0;
    let positionInAnswer = -1;

    if (matchesName) {
      return {
        found: true,
        foundIndex: 0,
        matchCount: 0,
      };
    }

    const matchingQuestionAnswerPositions = [];

    const matchingQuestions = interview.interview
      .filter((question, questionIndex) => {
        if (question.answer === null) {
          return false;
        }

        const index = question.answer.toLowerCase().indexOf(lcTerm);

        if (index !== -1 && interview.activeIndex !== -1) {
          const cleanTerm = term.replace(/[^a-zA-Z 0-9]+/g, '');
          const regex = new RegExp(cleanTerm, 'ig');
          const count = question.answer.match(regex).length;

          foundIndex = questionIndex;
          positionInAnswer = index;
          matchingQuestionAnswerPositions.push({
            id: question.question,
            strpos: index,
            answer: question.answer,
            index: questionIndex,
            count,
          });
        }

        return index !== -1;
      });

    const matchCount = matchingQuestionAnswerPositions
      .reduce((accumulator, match) => accumulator + match.count, 0);

    if (matchingQuestions.length > 0) {
      return {
        found: true,
        foundIndex,
        positionInAnswer,
        matchingQuestionAnswerPositions,
        matchCount,
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
      matchedCount,
    } = this.state;

    return (
      <div className="browse-wrap" id="browse">
        <SearchBar
          onSearchInputChange={this.onSearchInputChange}
          clearSearchInput={this.clearSearchInput}
          isSearchActive={isSearchActive}
          term={term}
          numResults={searchResults.length}
          numMatchedTerms={matchedCount}
        />
        <div className="browse-content-wrap container">
          <div className="browse-content-left">
            {isSearchActive &&
              (<RelatedInterviewsList
                data={searchResults}
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
