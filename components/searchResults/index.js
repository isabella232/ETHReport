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

  const cleanTextForParse = (text) => {
    let strText = text;

    if (strText.indexOf('<p>') !== 0 && strText.indexOf('>') === 0) {
      strText = `<p${strText}`;
    } else if (strText.indexOf('<p>') !== 0 && strText.indexOf('p>') === 0) {
      strText = `<${strText}`;
    } else if (strText.indexOf('<p>') !== 0) {
      strText = `<p>${strText}`;
    }

    if (strText.substr(strText.length - 1, 1) === '<') {
      strText = strText.substr(0, strText.length - 2);
    } else if (strText.substr(strText.length - 1, 1) === '<p') {
      strText = strText.substr(0, strText.length - 3);
    }

    return strText;
  };

  const trimText = (text, strpos, length) => {
    let offset = 0;
    let firstEllipses = '';
    let lastEllipses = '';

    if (text === null) {
      return '';
    }

    if (strpos > length && strpos !== -1 && length > 50) {
      offset = strpos - length;
      firstEllipses = '<p>...</p>';
    }

    const replacedText = cleanTextForParse(text.substr(offset, length + offset));

    if (replacedText.substr(replacedText.length - 1, 1) !== '.' && replacedText.substr(replacedText.length - 1, 1) !== '>') {
      lastEllipses = '...';
    }

    return text.length <= length ? text : `${firstEllipses}${replacedText}${lastEllipses}`;
  };

  const highlightTerm = (text) => {
    const cleanTerm = props.term.replace(/[^a-zA-Z 0-9]+/g, '').toLowerCase();
    const regex = new RegExp(cleanTerm, 'ig');
    return text.replace(regex, `<span>${cleanTerm}</span>`);
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
                <div>
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
