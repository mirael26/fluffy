import * as React from 'react';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import { AppUrl } from '../consts';

import ScreensMain from './Main/Main';
import ScreensPets from './Pets/Pets';
import ScreensPetsCard from './Pets/Card';
import ScreensUserPetsList from './User/Pets/List';
import ScreensUserPetsForm from './User/Pets/Form';
import ScreensProjectInfo from './Project-info/ProjectInfo';

const ScreensRoot = () => (
  <HashRouter>
    <Routes>
      <Route path={AppUrl.MAIN} element={<ScreensMain/>} />
      <Route path={AppUrl.PETS} element={<ScreensPets/>} />
      <Route path={`${AppUrl.PETS}/:id`} element={<ScreensPetsCard/>} />
      <Route path={AppUrl.USER_PETS_LIST} element={<ScreensUserPetsList/>} />
      <Route path={AppUrl.USER_PETS_ADD} element={<ScreensUserPetsForm/>} />
      <Route path={`${AppUrl.USER_PETS_EDIT}/:id`} element={<ScreensUserPetsForm/>} />
      <Route path={AppUrl.PROJECT_INFO} element={<ScreensProjectInfo/>} />
    </Routes>
  </HashRouter>
);

export default ScreensRoot;