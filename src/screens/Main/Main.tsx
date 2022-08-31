import * as React from 'react';

import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Top from '../../components/Top/Top';
import LastAdded from '../../components/LastAdded/LastAdded';

const ScreensMain = ():JSX.Element => {
  return (
    <>
      <h1 className='visually-hidden'>Главная</h1>
      <Header/>
      <About/>
      <Top/>
      <LastAdded/>
    </>
  )
};

export default ScreensMain;