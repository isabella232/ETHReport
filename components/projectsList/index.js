import React from 'react';
import Data from '../../data/archives/projects';
import './style.scss';

export default () => (
  <div className="projects-list">
    <h4>Projects</h4>
    <ul>
      {
        Data.map(project => <li key={project}><span>{ `${project}`}</span></li>)
      }
    </ul>
  </div>
);
