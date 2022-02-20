import React, { useState } from 'react';
import classNames from 'classnames';
import '../ReadOrListen/readOrListen.scss';

export const ReadOrListen = () => {
  const [ isToggle, setToggle ] = useState(true);
  console.log(isToggle);

  const handleClick = (idPhoto, idToggle) => {
    setToggle(!isToggle);

    if (isToggle) {
      document.getElementById(idPhoto).src = "images/phone-read.png";
      document.getElementById(idToggle).src = "images/svg/toggle/read.svg";
    } else {
      document.getElementById(idPhoto).src = "images/phone-listen.png";
      document.getElementById(idToggle).src = "images/svg/toggle/listen.svg";
    }
  };

  return (
    <div className="page__section toggle">
      <div className="container">
        <div className="toggle__content">
          <div className="toggle__title-container">
            <h1 className="toggle__title">
              Read or Listen
            </h1>
            <p className="toggle__subtitle">
              Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.
            </p>
            <div className="toggle__toggle-container">
              <div className={classNames({'secondary': !isToggle})}>
                Listen
              </div>
              <button
                onClick={() => handleClick('phone', 'toggle')}
                className={classNames('toggle__button', {
                  'toggle__button--listen': isToggle,
                  'toggle__button--read': !isToggle,
                })}
              >
                <img
                  className="toggle__button-image"
                  src="images/svg/toggle/listen.svg"
                  alt="toggle status"
                  id="toggle"
                />
              </button>
              <div className={classNames({ 'secondary': isToggle })}>Read</div>
            </div>
          </div>

          <div className="toggle__image-container">
            <img
              className="toggle__image"
              src="images/phone-listen.png"
              alt="two phones"
              id="phone"
            />
          </div>
        </div>
      </div>
    </div>
  )
}