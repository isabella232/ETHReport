import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.scss';

const PageHeader = () => (
  <div className="page-header">
    <div className="container">
      <h1>Ethereum Report</h1>
      <p>
        We&rsquo;ve interviewed 100+ developers to showcase the biggest opportunities in the
        Ethereum ecosystem
      </p>

      <nav className="page-header-nav">
        <AnchorLink offset="24" href="#resources">Resources</AnchorLink>
        <AnchorLink offset="24" href="#browse">Browse Archives</AnchorLink>
      </nav>
    </div>
  </div>
);

export default PageHeader;
