import React from 'react';
import Parser from 'html-react-parser';
import Data from '../../data/content/content';
import './style.scss';

const ContentBlurb = () => (
  <div className="content-blurb">
    <div className="container">
      { Parser(Data.blurb) }
    </div>
  </div>
);

export default ContentBlurb;
