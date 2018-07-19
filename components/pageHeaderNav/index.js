import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.scss';

const PageHeaderNav = () => (
  <nav className="page-header-nav">
    <AnchorLink href="#resources">Resources</AnchorLink>
    <AnchorLink href="#browse">Browse Archives</AnchorLink>
  </nav>
);

export default PageHeaderNav;
