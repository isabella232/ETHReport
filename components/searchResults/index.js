import React from 'react';
import Parser from 'html-react-parser';
import { PropTypes } from 'prop-types';
import getConfig from 'next/config';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

const SearchResults = (props) => {
  if (!props.data || props.data[0] === null) {
    return <div>Loading...</div>;
  } else if (props.data.length < 1) {
    return <div>No results found</div>;
  }

  // sort array alphabetically
  const sortedInterviews = props.data.sort((a, b) => a.name.localeCompare(b.name));

  const trimText = (text, length) => {
    if (text === null) {
      return '';
    }

    return text.length <= length ? text : `${text.substr(0, length)}...`;
  };

  const highlightTerm = (text) => {
    const cleanTerm = props.term.replace(/[^a-zA-Z 0-9]+/g, '').toLowerCase();
    const regex = new RegExp(cleanTerm, 'ig');
    return text.replace(regex, `<span>${cleanTerm}</span>`);
  };

  const processText = (text, length = 500) => highlightTerm(trimText(text, length));

  const findFirstQuestion = (interview) => {
    let { answer } = interview.interview[interview.matchedIndex];
    let id = interview.interview[interview.matchedIndex].question;

    if (answer === null) {
      const firstNonNullAnswer = interview.interview.find(question => question.answer !== null);
      id = firstNonNullAnswer.question;
      // eslint-disable-next-line
      answer = firstNonNullAnswer.answer;
    }

    const { text } = props.questions.find(question => question.id === id);

    return {
      question: text,
      answer: processText(answer),
    };
  };

  const interviewNameContainsTerm = (name, searchTerm) =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div className="search-results">
      <ul>
        { sortedInterviews.map(interview => (
          <li key={interview.id}>
            <button id={interview.id} onClick={props.toggleSingleInterview}>
              <div className="li-header">
                <h3 className={interviewNameContainsTerm(interview.name, props.term) ? 'matched-name' : ''}>
                  { Parser(interview.name) }
                </h3>
                <div>
                  <span>View</span>
                  <img src={`${publicRuntimeConfig.subDirPath}/static/img/right-chevron-icon.svg`} alt="right chevron icon" />
                </div>
              </div>
              <h5>{interview.matchedIndex + 1})&nbsp;
                { findFirstQuestion(interview).question }
              </h5>
              <div>
                { Parser(findFirstQuestion(interview).answer) }
              </div>
            </button>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleSingleInterview: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  term: PropTypes.string.isRequired,
};

export default SearchResults;
