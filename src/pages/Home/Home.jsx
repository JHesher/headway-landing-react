import React from 'react';
import './home.scss';
import Lottie from 'react-lottie';
import animationData from '../../lotties/lf20_jeztfyx4.json';

export const Home = () => {
  return (
    <div className="page__section home">
      <div className="container">
        <div className="home__content">
          <div className="home__info-container">
            <div className="home__title-container">
              <h1 className="home__title">
                Become a better you
              </h1>
              <p className="home__subtitle">
                with 15-min bite-sized reads and audios of the world’s best nonfiction books
              </p>
            </div>

            <div className="home__animation-container">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }}
              />
            </div>
          </div>

          <div className="home__image-container">
            <img
              className="home__image"
              src="images/phones.png"
              alt="two phones"
            />
          </div>
        </div>
      </div>
    </div>
  )
}