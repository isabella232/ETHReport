import React from 'react';
import './style.scss';

export default () => (
  <div className="page-footer">
    <div className="container">
      <p>Copyright { (new Date()).getFullYear() }</p>
    </div>
  </div>
);
