import React from 'react';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import './FilmList.css';
import { Link } from 'react-router-dom';

const FilmList = () => {
  return (
    <ul className="movie-list">
      <li className="movie-list__item">
        <div className="image__container">
          <img
            src="https://fwcdn.pl/fpo/81/78/558178/8014783.3.jpg"
            alt="image"
          />
        </div>
        <div className="description__container">
          <div className="description__text">
            <h3>Avatar</h3>
            <h5>Subtitle</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              temporibus, animi natus non voluptas accusantium?
            </p>
          </div>
          <PrimaryButton>
            <Link to="movie">See more</Link>
          </PrimaryButton>
        </div>
      </li>
      <li className="movie-list__item">
        <div className="image__container">
          <img
            src="https://fwcdn.pl/fpo/81/78/558178/8014783.3.jpg"
            alt="image"
          />
        </div>
        <div className="description__container">
          <div className="description__text">
            <h3>Avatar</h3>
            <h5>Subtitle</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              temporibus, animi natus non voluptas accusantium?
            </p>
          </div>
          <PrimaryButton>
            <Link to="movie">See more</Link>
          </PrimaryButton>
        </div>
      </li>
      <li className="movie-list__item">
        <div className="image__container">
          <img
            src="https://fwcdn.pl/fpo/81/78/558178/8014783.3.jpg"
            alt="image"
          />
        </div>
        <div className="description__container">
          <div className="description__text">
            <h3>Avatar</h3>
            <h5>Subtitle</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              temporibus, animi natus non voluptas accusantium?
            </p>
          </div>
          <PrimaryButton>
            <Link to="movie">See more</Link>
          </PrimaryButton>
        </div>
      </li>
    </ul>
  );
};

export default FilmList;
