import * as React from 'react';

import './Top.scss';

const Top = ():JSX.Element => {
  return (
    <div className="top">
      <h2 className="top__title">Топ питомцев</h2>
      <div className="top__wrapper">      
        <ul className="top__list">
          <li className="top__item">
            <span className="top__caption">1 место</span>
            <img className="top__image" src={require('../../img/mock-image.jpg')} alt="Фото питомца"/>

            <div className="top__info">
              <p className="top__name top__name--female">Маруся</p>
              <p className="top__owner">Владелец:</p>
              <p className="top__owner">Иван Иванов</p>
            </div>
          </li>

          <li className="top__item">
            <span className="top__caption">2 место</span>
            <img className="top__image" src={require('../../img/mock-image.jpg')} alt="Фото питомца"/>

            <div className="top__info">
              <p className="top__name top__name--male">Барсик</p>
              <p className="top__owner">Владелец:</p>
              <p className="top__owner">Петр Петров</p>
            </div>
          </li>

          <li className="top__item">
            <span className="top__caption">3 место</span>
            <img className="top__image" src={require('../../img/mock-image.jpg')} alt="Фото питомца"/>

            <div className="top__info">
              <p className="top__name top__name--male">Граф</p>
              <p className="top__owner">Владелец:</p>
              <p className="top__owner">Виктория Кузьмина</p>
            </div>
          </li>
        </ul>

        <button className="top__vote-button">Проголосовать</button>
      </div>
    </div>
  );
};

export default Top;