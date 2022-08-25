import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppUrl } from '../../consts';

import './About.scss';

const About = ():JSX.Element => {
  return (
    <section className="about">
      <h2 className="about__title visually-hidden">О проекте</h2>
      <p className="about__text">
        Здесь вы можете оценить питомцев других пользователей, а также поделиться своим любимым пушистиком!
      </p>
      <Link to={AppUrl.USER_PETS_ADD} className="about__add-button button">Поделиться питомцем</Link>
    </section>
  );
};

export default About;