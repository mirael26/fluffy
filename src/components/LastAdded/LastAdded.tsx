import * as React from 'react';
import { Link } from 'react-router-dom';

import { AppUrl } from '../../consts';

import Carousel from './Carousel/Carousel';
import './LastAdded.scss';

const LastAdded = ():JSX.Element => {
  return (
    <div className="last-added">
      <h2 className="last-added__title">Новые участники</h2>
      <div className="last-added__title__wrapper">
        <Carousel/>

        <Link to={AppUrl.PETS} className="last-added__showmore-button">Посмотреть всех</Link>
      </div>
    </div>
  );
};

export default LastAdded;