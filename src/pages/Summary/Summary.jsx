import React from 'react';
import './summary.scss';

export const Summary = () => {
  return (
    <div className="page__section summary">
      <div className="container">
        <div className="summary__content">

          <div className="summary__title-container">
            <h1 className="summary__title">
              Summary is the new black
            </h1>
            <p className="summary__subtitle">
              wUse summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.
            </p>
          </div>

          <div className="summary__device-scheme">
            <div className="summary__device-container device">
              <img
                className="device__image"
                src="images/svg/summary/book.svg"
                alt="book"
              />
              <div className="device__description">
                <p>Typical book</p>
                <p
                  className="device__description-secondury"
                >
                  320 pages ~ 20 hours
                </p>
              </div>
            </div>

            <div className="summary__arrows-container">
              <div className="device__arrow--desctop">
                <img
                  className="device__image"
                  src="images/svg/summary/arrow-p1-768w.svg"
                  alt="arrow"
                />
              </div>
              <div className="device__arrow--mobile">
                <img
                  className="device__image"
                  src="images/svg/summary/arrow-p1.svg"
                  alt="arrow"
                />
              </div>
              <p className="device__description">
                Key ideas & insights
              </p>
              <div className="device__arrow--desctop">
                <img
                  className="device__image"
                  src="images/svg/summary/arrow-p2-768w.svg"
                  alt="arrow"
                />
              </div>
              <div className="device__arrow--mobile">
                <img
                  className="device__image"
                  src="images/svg/summary/arrow-p2.svg"
                  alt="arrow"
                />
              </div>
            </div>

            <div className="summary__device-container device">
              <img
                className="device__image"
                src="images/svg/summary/phone.svg"
                alt="phone"
              />
              <div className="device__description">
                <p>Summary</p>
                <p
                  className="device__description-secondury">
                  ~ 15 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}