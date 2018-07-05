import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const WordCloud = props => (
  // eslint-disable-next-line
  <div
    className="wordcloud"
    data-index={props.index}
    onClick={props.toggleWordCloudModal}
    role="button"
    tabIndex="0"
  >
    <h3 data-index={props.index}>{ props.words.title }</h3>
    <div data-index={props.index}>
      { props.words.cloud.map(word => (
        <span key={word.word} className={`size-${word.size}`}>
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
  toggleWordCloudModal: PropTypes.func.isRequired,
};

export default WordCloud;
