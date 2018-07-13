import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';
import Parser from 'html-react-parser';

const SearchResults = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
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

  const processText = (text, length) => highlightTerm(trimText(text, length));

  return (
    <div className="search-results">
      <ul>
        { sortedInterviews.map(interview => (
          // eslint-disable-next-line
          <li
            id={interview.id}
            key={interview.id}
            onClick={props.toggleSingleInterview}
          >
            <h3>{ interview.name }</h3>
            <h5> {interview.matchedIndex + 1})&nbsp;
              {props.questions.find(question => question.id === interview.interview[interview.matchedIndex].question).text}
            </h5>
            <p> { Parser(processText(interview.interview[interview.matchedIndex].answer, 1500))}
            </p>
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
