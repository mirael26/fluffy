import * as React from 'react';
import './User.scss';

const User = ():JSX.Element => {
  return (
    <div className="user">
      <button className="user__button">Меню пользователя</button>
      <div className="user__menu"></div>
    </div>
  );
};

export default User;