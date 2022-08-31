import * as React from 'react';
import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import './Carousel.scss';

const Carousel = ():JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <div className="embla">
      <button className="embla__prev-button" onClick={scrollPrev}>Prev</button>
      <div className="embla__viewport"  ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img className="embla__image" src={require('../../../img/mock-image.jpg')} alt="Фото участника"/>
          </div>

          <div className="embla__slide">
            <img className="embla__image" src={require('../../../img/mock-image.jpg')} alt="Фото участника"/>
          </div>

          <div className="embla__slide">
            <img className="embla__image" src={require('../../../img/mock-image.jpg')} alt="Фото участника"/>            
          </div>

          <div className="embla__slide">
            <img className="embla__image" src={require('../../../img/mock-image.jpg')} alt="Фото участника"/>
          </div>

          <div className="embla__slide">
            <img className="embla__image" src={require('../../../img/mock-image.jpg')} alt="Фото участника"/>
          </div>
        </div>
      </div>
      <button className="embla__next-button" onClick={scrollNext}>Next</button>
    </div>
  );
};

export default Carousel;