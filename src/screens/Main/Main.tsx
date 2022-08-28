import * as React from 'react';

import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Top from '../../components/Top/Top';

const ScreensMain = ():JSX.Element => {
  return (
    <>
      <h1 className='visually-hidden'>Главная</h1>
      <Header/>
      <About/>
      <Top/>
    </>
  )
};

export default ScreensMain;