import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { PropTypes } from 'prop-types';
import Data from '../../data/archives/projects';
import './style.scss';

const ProjectsList = props => (
  <div className="projects-list">
    <h4>Projects</h4>
    <ul>
      {
        Data.map(project => (
          <li key={project}>
            <AnchorLink href="#browse" onClick={props.setSearchTerm}>{ project }</AnchorLink>
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
