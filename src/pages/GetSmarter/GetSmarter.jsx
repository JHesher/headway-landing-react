import React from 'react';
import './getSmarter.scss';

export const GetSmarter = () => {
  return (
    <div className="page__section benefits">
      <div className="container">
        <div className="benefits__content">

          <div className="benefits__title-container">
            <h1 className="benefits__title">
              Get smarter with the least effort
            </h1>
          </div>

          <div className="benefits__list">
            <div className="benefits__benefit benefit">
              <div className="benefit__image-container">
                <img
                  className="benefit__image"
                  src="images/svg/benefits/the_best.svg"
                  alt="Learn from the best"
                />
              </div>
              <div className="benefit__info-container">
                <h2 className="benefit__title">
                  Learn from the best
                </h2>
                <p className="benefit__subtitle">
                  Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.
                </p>
              </div>
            </div>

            <div className="benefits__benefit benefit">
              <div className="benefit__image-container">
                <img
                  className="benefit__image"
                  src="images/svg/benefits/key.svg"
                  alt="Get key insights"
                />
              </div>
              <div className="benefit__info-container">
                <h2 className="benefit__title">
                  Get key insights
                </h2>
                <p className="benefit__subtitle">
                  Major ideas in a bite-sized form. Long reads no more!
                </p>
              </div>
            </div>

            <div className="benefits__benefit benefit">
              <div className="benefit__image-container">
                <img
                  className="benefit__image"
                  src="images/svg/benefits/habit.svg"
                  alt="Build a reading habit"
                />
              </div>
              <div className="benefit__info-container">
                <h2 className="benefit__title">
                  Build a reading habit
                </h2>
                <p className="benefit__subtitle">
                  Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}