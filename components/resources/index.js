import React from 'react';
import getConfig from 'next/config';
import WordCloud from '../wordCloud';
import Data from '../../data/resources/wordclouds';
import './style.scss';

const { publicRuntimeConfig } = getConfig();

const Resources = () => (
  <div className="resources-wrap" id="resources">
    <div className="container">
      <h2 className="main-heading" style={{ backgroundImage: `url(${publicRuntimeConfig.subDirPath}/static/img/heading-textured-bg.jpg)` }}>
        Resources
      </h2>
      <div className="wordclouds-wrap">
        {
          Data.map((wordCloud, index) =>
            (<WordCloud
              index={index}
              key={wordCloud.title}
              words={wordCloud}
            />))
        }
      </div>
    </div>
  </div>
);

export default Resources;
