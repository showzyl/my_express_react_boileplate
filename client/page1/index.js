'use strict';


import React from 'react';
import { render } from 'react-dom';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import './index.scss';


render(
  <div style={{'marginTop': '20px'}}>
    <DatePicker />
    <div className="lizi">日历title</div>
  </div>,
  document.querySelector('#wrapper')
);


// Uncomment these to enable hot module reload for this entry.
 if (module.hot) {
   module.hot.accept();
 }
