import React from 'react';
import { PropTypes } from 'prop-types';
import Data from '../../data/archives/projects';
import './style.scss';

const ProjectsList = props => (
  <div className="projects-list">
    <h4>Projects</h4>
    <ul>
      {
        Data.map(project => (
          // eslint-disable-next-line
          <li key={project} onClick={props.setSearchTerm}>
            <span>{ project }</span>
          </li>
        ))
      }
    </ul>
  </div>
);

ProjectsList.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default ProjectsList;
