import React from 'react';
import PageHeader from '../components/pageHeader';
import PageFooter from '../components/pageFooter';
import Resources from '../components/resources';
import Search from '../components/search';
import '../styles.scss';

class PageWrapper extends React.Component {

  render() {
    return (
      <div className="page-wrapper">
        <PageHeader />
        <Resources />
        <Search />
        <PageFooter />
      </div>
    );
  }
}

export default PageWrapper;
