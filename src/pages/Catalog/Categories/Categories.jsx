import React from 'react';
import './categories.scss';

export const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__item">
          All categories
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/self-growth.svg"
            alt="self-growth"
          />
          <span>Self-Growth</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/happiness.svg"
            alt="self-growth"
          />
          <span>Happiness</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/money.svg"
            alt="money and invectment"
          />
          <span>Money & Investment</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/negotiation.svg"
            alt="negotiation"
          />
          <span>Negotiation</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/health.svg"
            alt="health"
          />
          <span>Health</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/spirituality.svg"
            alt="spirituality"
          />
          <span>Spirituality</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/productivity.svg"
            alt="productivity"
          />
          <span>Productivity</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/business.svg"
            alt="Business & Career"
          />
          <span>Business & Career</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/love.svg"
            alt="Love & Sex"
          />
          <span>Love & Sex</span>
        </div>
        <div className="categories__item">
          <img
            className="categories__image"
            src="images/svg/categories/sports.svg"
            alt="Sports & Fitness"
          />
          <span>Sports & Fitness</span>
        </div>
      </div>
    </div>
  )
}