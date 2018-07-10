import React from 'react';
import { PropTypes } from 'prop-types';
import Data from '../../data/archives/topics';
import './style.scss';

const TopicsList = props => (
  <div className="topics-list">
    <h4>Topics</h4>
    <ul>
      {
        Data.map(topic => (
          // eslint-disable-next-line
          <li key={topic} onClick={props.setSearchTerm}>
            <span>{ topic }</span>
          </li>
        ))
      }
    </ul>
  </div>
);

TopicsList.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default TopicsList;
