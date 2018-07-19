import React from 'react';
import getConfig from 'next/config';
import PageHeaderNav from '../pageHeaderNav';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

const PageHeader = () => (
  <div className="page-header" style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/header-bg.jpg)` }}>
    <div className="sticky-header">
      <div className="container">
        <div className="logo">
          <img src={`${publicRuntimeConfig.subDirPath}/static/img/ETHPrize-logo.png`} alt="ETHPrize logo" />
        </div>
        <PageHeaderNav />
      </div>
    </div>
    <img className="page-header-bg" src={`${publicRuntimeConfig.subDirPath}/static/img/header-bg.jpg`} alt="Header background" />
    <div className="inline-header">
      <div className="container">
        <div className="logo">
          <img src={`${publicRuntimeConfig.subDirPath}/static/img/ETHPrize-logo.png`} alt="ETHPrize logo" />
        </div>
        <div className="page-header-content">
          <h1 className="main-heading" style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/heading-textured-bg.jpg)` }}>
            Eth Report <br />2018
          </h1>
          <p>
            We&rsquo;ve interviewed 100+ developers to showcase the biggest opportunities in the
            Ethereum ecosystem
          </p>
        </div>
        <PageHeaderNav />
      </div>
    </div>
  </div>

);

export default PageHeader;
