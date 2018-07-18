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

  const getStartOffset = (text) => {
    if (text.indexOf('>') === 0) {
      return -2;
    } else if (text.indexOf('/p>') === 0) {
      return 3;
    } else if (text.indexOf('p>') === 0) {
      return -1;
    } else if (text.indexOf('<p>') !== 0) {
      return false;
    }

    return 0;
  };

  const getEndOffset = (text) => {
    if (text.substr(text.length - 1, 1) === '<') {
      return -1;
    } else if (text.substr(text.length - 2, 2) === '<p') {
      return -2;
    } else if (text.substr(text.length - 3, 3) === '<p>') {
      return -3;
    }

    return 0;
  };

  const trimText = (text, strpos, length) => {
    let offset = 0;
    let firstEllipses = '';
    let lastEllipses = '';
    let startOffset = 0;
    let endOffset = 0;

    if (text === null) {
      return '';
    }

    if (strpos > length && strpos !== -1 && length > 50) {
      offset = strpos - length;
      firstEllipses = '<p>...</p>';
    }

    const offsetText = text.substr(offset, length + offset);
    startOffset = getStartOffset(offsetText);
    endOffset = getEndOffset(offsetText);

    const newOffsetText = startOffset ?
      text.substr(offset + startOffset, length + offset + endOffset) :
      `<p>${text.substr(offset + 0, length + offset + endOffset)}`;

    if (newOffsetText.substr(newOffsetText.length - 1, 1) !== '.' && newOffsetText.substr(newOffsetText.length - 1, 1) !== '>') {
      lastEllipses = '...';
    }

    return text.length <= length ? text : `${firstEllipses}${newOffsetText}${lastEllipses}`;
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
                <div key={match.index + 1}>
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
