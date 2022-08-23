import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

import MainNav from './MainNav/MainNav';
import User from './User/User';

const Header = ():JSX.Element => {
  let path = useLocation().pathname;

  return (
    <div className="header">
      <div className="header__logo">
        {path === '/'
          ? <img className="header__logo-image" src={require('../../img/fluffy-logo.png')} alt="Логотип Fluffy" />
          : <Link to='/'><img className="header__logo-image" src={require('../../img/fluffy-logo.png')} alt="Логотип Fluffy" /></Link>
        }        
      </div>

      <div className="header__nav">
        <MainNav/>
      </div>

      <div className="header__user">
        <User/>
      </div>
    </div>
  );
};

export default Header;