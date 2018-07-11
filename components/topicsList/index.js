import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { PropTypes } from 'prop-types';
import Data from '../../data/archives/topics';
import './style.scss';

const TopicsList = props => (
  <div className="topics-list">
    <h4>Topics</h4>
    <ul>
      {
        Data.map(topic => (
          <li key={topic}>
            <AnchorLink href="#browse" onClick={props.setSearchTerm}>{ topic }</AnchorLink>
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
