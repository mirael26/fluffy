import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppUrl } from '../../consts';

import MainNav from './MainNav/MainNav';
import User from './User/User';
import './Header.scss';

const Header = ():JSX.Element => {
  let path = useLocation().pathname;

  return (
    <header className="header">
      <div className="header__logo">
        {path === '/'
          ? <img className="header__logo-image" src={require('../../img/fluffy-logo.png')} alt="Логотип Fluffy" />
          : <Link to={AppUrl.MAIN}><img className="header__logo-image" src={require('../../img/fluffy-logo.png')} alt="Логотип Fluffy" /></Link>
        }        
      </div>

      <div className="header__nav">
        <MainNav/>
      </div>

      <div className="header__user">
        <User/>
      </div>
    </header>
  );
};

export default Header;