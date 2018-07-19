import React from 'react';
import Parser from 'html-react-parser';
import { PropTypes } from 'prop-types';
import './style.scss';

const WordCloud = props => (
  <div className="wordcloud" data-index={props.index}>
    <div className="wordcloud-header">
      <p className="number">{ (props.index + 1).toString().padStart(3, '0') }</p>
      <h3>{ Parser(props.words.title) }</h3>
    </div>
    <div className="words-wrap">
      <div>
      { props.words.cloud.map(word => (
        <span
          key={word.word}
          className={`size-${word.size}`}
        >
          { word.url ?
            (<a href={word.url} target="_blank" rel="noopener noreferrer">{ word.word }</a>) :
            <span>{ word.word }</span>
          }
        </span>
        ))
      }
      </div>
    </div>
  </div>
);

WordCloud.propTypes = {
  index: PropTypes.number.isRequired,
  words: PropTypes.shape({
    title: PropTypes.string,
    cloud: PropTypes.array,
  }).isRequired,
};

export default WordCloud;
