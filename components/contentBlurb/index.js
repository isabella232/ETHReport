import React from 'react';
import Data from '../../data/content/content';
import Parser from 'html-react-parser';
import './style.scss';

const ContentBlurb = () => (
  <div className="content-blurb">
    <div className="container">
      { Parser(Data.blurb) }
    </div>
  </div>
);

export default ContentBlurb;
