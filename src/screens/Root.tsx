import * as React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import ScreensMain from './Main/Main';

const ScreensRoot = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<ScreensMain/>} />
    </Routes>
  </HashRouter>
);

export default ScreensRoot;