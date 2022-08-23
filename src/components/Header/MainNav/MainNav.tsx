import * as React from 'react';

import './MainNav.scss';

const MainNav = ():JSX.Element => {
  return (
    <ul className="main-nav">
      <li className="main-nav__item">
        <a href='#' className='main-nav__link'>О нас</a>
      </li>
      <li className="main-nav__item">
        <a href='#' className='main-nav__link'>Топ питомцев</a>
      </li>
      <li className="main-nav__item">
        <a href='#' className='main-nav__link'>Все питомцы</a>
      </li>
      <li className="main-nav__item">
        <a href='#' className='main-nav__link'>Добавить моего</a>
      </li>
    </ul>
  );
};

export default MainNav;