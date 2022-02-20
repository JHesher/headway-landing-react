import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <div className="page__section header">
      <div className="container">
        <div className="header__actions actions">
          <div className="actions__action">
            <a href="#home" className="logo">
              <img
                src="images/svg/logo-headway.svg"
                alt="logo headway"
                className="actions__icon--logo"
              />
            </a>
          </div>

          <div className="actions__action">
            <a href="#user" className="actions__icon-link">
              <img
                src="images/svg/user.svg"
                alt="logo headway"
                className="actions__icon--user-menu"
              />
            </a>

            <a href="#menu" className="actions__icon-link">
              <img
                src="images/svg/menu.svg"
                alt="logo headway"
                className="actions__icon--user-menu"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}