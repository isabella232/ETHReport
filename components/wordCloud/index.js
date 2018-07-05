import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const WordCloud = props => (
  // eslint-disable-next-line
  <div
    className="wordcloud"
    data-index={props.index}
    onClick={props.openWordCloudModal}
    role="button"
    tabIndex="0"
  >
    <h3>{ props.words.title }</h3>
    <div>
      { props.words.cloud.map(word => (
        <span
          key={word.word}
          className={`size-${word.size}`}
        >
          { word.word }
        </span>
        ))
      }
    </div>
  </div>
);

WordCloud.propTypes = {
  index: PropTypes.number.isRequired,
  words: PropTypes.shape({
    title: PropTypes.string,
    cloud: PropTypes.array,
  }).isRequired,
  openWordCloudModal: PropTypes.func.isRequired,
};

export default WordCloud;
