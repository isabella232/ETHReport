import React from 'react';
import TopicsList from '../../components/topicsList';
import ProjectsList from '../../components/projectsList';
import InterviewsList from '../interviewsList';
import './style.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="search-wrap">
        <div className="search-bar">
          <div className="container">
            <h3>Browse Archives</h3>
            <input
              className="search-input"
              type="search"
              placeholder="Search archives"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        <div className="search-results-wrap container">
          <InterviewsList />
          <div className="search-results">
            <TopicsList />
            <ProjectsList />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
