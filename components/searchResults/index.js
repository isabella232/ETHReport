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

  const trimText = (text, strpos, length) => {
    let offset = 0;
    let firstEllipses = '';
    let lastEllipses = '';
    const allowance = props.term.length + 5;
    const cleanText = text.replace(/<(?:.|\n)*?>/gm, '');

    if (text === null) {
      return '';
    }

    /**
     * We check if the position of the matched term is greater than the length of the trim
     * Then (strpos - length) would place our matched term at the beginning of the last character
     * We add a further x characters as an allowance (based on term length)
     * for the search term to show fully
     */

    if (strpos > length && strpos !== -1 && length > 50 && text.length > length) {
      offset = strpos - (length - allowance);
      firstEllipses = '...';
    }

    const offsetText = cleanText.substr(offset, length + offset);

    if (offsetText.substr(offsetText.length - 1, 1) !== '.') {
      lastEllipses = '...';
    }

    return cleanText.length <= length ? `<p>${offsetText}</p>` : `<p>${firstEllipses}${offsetText}${lastEllipses}</p>`;
  };

  const highlightTerm = (text) => {
    const cleanTerm = props.term.replace(/[^a-zA-Z 0-9]+/g, '');
    const regex = new RegExp(cleanTerm, 'ig');
    return text.replace(regex, match => `<span>${match}</span>`);
  };

  const processText = (text, strpos, length = 500) => highlightTerm(trimText(text, strpos, length));

  const findQuestion = (answer) => {
    const { id } = answer;
    const { text } = props.questions.find(question => question.id === id);
    return text;
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
              {interview.matchingQuestionAnswerPositions ?
              interview.matchingQuestionAnswerPositions.map(match => (
                <div className="question-wrap" key={match.index + 1}>
                  <h5>{match.index + 1})&nbsp;
                    { findQuestion(match) }
                  </h5>
                  <div>
                    { Parser(processText(match.answer, match.strpos)) }
                  </div>
                </div>
              )) : ''}
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
