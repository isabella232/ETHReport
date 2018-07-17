import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import getConfig from 'next/config';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

const PageHeader = () => (
  <div className="page-header" style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/header-bg.jpg)` }}>
    <div className="container">
      <nav className="page-header-nav">
        <AnchorLink href="#resources">Resources</AnchorLink>
        <AnchorLink href="#browse">Browse Archives</AnchorLink>
      </nav>
      <img className="logo" src={`${publicRuntimeConfig.subDirPath}/static/img/ETHPrize-logo.png`} alt="ETHPrize logo" />
      <h1 className="main-heading">Eth Report 2018</h1>
      <p>
        We&rsquo;ve interviewed 100+ developers to showcase the biggest opportunities in the
        Ethereum ecosystem
      </p>
    </div>
  </div>
);

export default PageHeader;
