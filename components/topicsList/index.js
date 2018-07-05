import React from 'react';
import Data from '../../data/archives/topics';
import './style.scss';

export default () => (
  <div className="topics-list">
    <h4>Topics</h4>
    <ul>
      {
        Data.map(topic => <li key={topic}><span>{ topic }</span></li>)
      }
    </ul>
  </div>
);
