import React from 'react';
import './comments.scss';

export const Comments = () => {
  return (
    <div className="page__section comments">
      <div className="container">
        <div className="comments__content">
          <div className="comments__title-container">
            <h1 className="comments__title">
              People love the Headway app
            </h1>
            <p className="comments__subtitle">
              Become a member of our global community of
              <span className="primary"> 7 million people</span>
            </p>
          </div>

          <div className="comments__list">
            <div className="comments__item item">
              <img
                className="item__stars"
                src="images/svg/five-full-stars.svg"
                alt="stars"
              />
              <div className="item__comment">
                This app simplifies books into super condensed but easy-to-digest snippets. Listened to almost all of the Art of Saying No during my warm up/stretch sesh today. A powerful tool I recommend to anyone who’s busy and can’t find time to sit down to read!
              </div>
              <div className="item__user-info user">
                <img
                  className="user__photo"
                  src="images/users/photo.png"
                  alt="user"
                />
                <span className="user__nick-name secondary">
                  mr.rageright
                </span>
                <img
                  className="user__insta"
                  src="images/svg/insta-gray.svg"
                  alt="user insta"
                />
              </div>
            </div>

            <div className="comments__item item">
              <img
                className="item__stars"
                src="images/svg/five-full-stars.svg"
                alt="stars"
              />
              <div className="item__comment">
                Headway app is one of the best investments I’ve ever made into myself outside of spiritual stuff. Summarized books that you can read or listen to!
              </div>
              <div className="item__user-info user">
                <img
                  className="user__photo"
                  src="images/users/photo (1).png"
                  alt="user"
                />
                <span className="user__nick-name secondary">
                  mcogbonna
                </span>
                <img
                  className="user__insta"
                  src="images/svg/insta-gray.svg"
                  alt="user insta"
                />
              </div>
            </div>

            <div className="comments__item item">
              <img
                className="item__stars"
                src="images/svg/five-full-stars.svg"
                alt="stars"
              />
              <div className="item__comment">
                In case you often find a book you just started — the Headway app is for you. It’s an audiobook reader that summarized all the key lessons in that great book you’ve been aspiring to read, but you didn’t finish.
              </div>
              <div className="item__user-info user">
                <img
                  className="user__photo"
                  src="images/users/photo (2).png"
                  alt="user"
                />
                <span className="user__nick-name secondary">
                  thefinestyler
                </span>
                <img
                  className="user__insta"
                  src="images/svg/insta-gray.svg"
                  alt="user insta"
                />
              </div>
            </div>

            <div className="comments__item item">
              <img
                className="item__stars"
                src="images/svg/five-full-stars.svg"
                alt="stars"
              />
              <div className="item__comment">
                So excited for my latest app subscription for self-growth! You can set reading goals, take challenges or read offline! 🤓
              </div>
              <div className="item__user-info user">
                <img
                  className="user__photo"
                  src="images/users/photo (3).png"
                  alt="user"
                />
                <span className="user__nick-name">
                  thisinnagirl
                </span>
                <img
                  className="user__insta"
                  src="images/svg/insta-gray.svg"
                  alt="user insta"
                />
              </div>
            </div>
          </div>

          <div className="comments__ratings ratings">
            <div className="ratings__rating item rating">
              <div className="rating__mark-container">
                <span className="rating__mark">4.7</span>
                <div className="rating__logo-container">
                  <img
                    className="rating__logo"
                    src="images/svg/logo-app.svg"
                    alt="logo store"
                  />
                </div>
              </div>
              <div className="rating__stars">
                <img
                  className="rating__stars-image"
                  src="images/svg/five-full-stars.svg"
                  alt="stars"
                />
              </div>
              <div className="rating__amount">50K ratings</div>
            </div>

            <div className="ratings__rating item rating">
              <div className="rating__mark-container">
                <span className="rating__mark rating__mark--store">4.2</span>
                <div className="rating__logo-container">
                  <img
                    className="rating__logo"
                    src="images/svg/logo-store.svg"
                    alt="logo store"
                  />
                </div>
              </div>
              <div className="rating__stars">
                <img
                  className="rating__stars-image"
                  src="images/svg/five-full-stars.svg"
                  alt="stars"
                />
              </div>
              <div className="rating__amount">31k ratings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}