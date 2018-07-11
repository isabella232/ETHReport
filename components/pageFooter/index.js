import React from 'react';
import './style.scss';

const PageFooter = () => (
  <div className="page-footer">
    <div className="container">
      <p>Copyright { (new Date()).getFullYear() }</p>
    </div>
  </div>
);

export default PageFooter;
