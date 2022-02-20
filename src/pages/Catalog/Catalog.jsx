import React from 'react';
import './catalog.scss';
import { Categories } from './Categories';
import { Books } from './Books';

export const Catalog = () => {
  return (
    <div className="page__section catalog">
      <div className="container">
        <div className="catalog__content">
          <div className="catalog__title-container">
            <h1 className="catalog__title">
              Determine your goal and go ahead!
            </h1>
            <p className="catalog__subtitle">
              Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts.
            </p>
          </div>
          <div className="catalog__categories">
            <Categories />
          </div>
            <Books />
        </div>
      </div>
    </div>
  )
}