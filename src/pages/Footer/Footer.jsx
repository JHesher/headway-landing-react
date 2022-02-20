import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="page__section footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__title-container">
            <a href="#home" className="logo">
              <img
                src="images/svg/logo-headway.svg"
                alt="logo headway"
                className="footer__icon--logo"
              />
            </a>
            <h1 className="footer__title">
              Empower yourself with the best books insights
            </h1>
          </div>

          <div className="footer__social-media">
            <span>Social media:</span>
            <div className="footer__icons">
              <a
                className="footer__icon-link"
                href="https://www.facebook.com/GenTechPartners"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src="images/svg/fb.svg"
                  alt="facebook"
                />
              </a>

              <a
                className="footer__icon-link"
                href="https://www.instagram.com/genesis.tech/?fbclid=IwAR0g4OJ5pJHnGCpYYRJrx13xu9lCb9Ts92Vo6yc9pneHkZl1UhzkKAvU6vE"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src="images/svg/insta-black.svg"
                  alt="instagram"
                />
              </a>

              <a
                className="footer__icon-link"
                href="https://www.instagram.com/genesis.tech/?fbclid=IwAR0g4OJ5pJHnGCpYYRJrx13xu9lCb9Ts92Vo6yc9pneHkZl1UhzkKAvU6vE"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="footer__icon"
                  src="images/svg/twitter.svg"
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}