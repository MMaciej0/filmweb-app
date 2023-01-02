import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useFilterContext } from 'contexts/filter/filter';
import './Filters.css';

import SearchBar from '../SearchBar/SearchBar';
import Checkbox from 'components/atoms/Checkbox/Checkbox';
import OutlineSingleSelectBtn from 'components/atoms/OutlineSingleSelectBtn/OutlineSingleSelectBtn';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const Filters = ({ visibility, setVisibility }) => {
  const { handleSearchMovie, handleSearchChange, searchValue, genres } =
    useFilterContext();

  useEffect(() => {
    document.body.style.overflowY = visibility ? 'hidden' : 'visible';
  }, [visibility]);

  return (
    <div
      className={
        visibility ? 'filters__container visible' : 'filters__container'
      }
    >
      <aside className="filters">
        <button className="filters__hide" onClick={() => setVisibility(false)}>
          <AiOutlineClose />
        </button>
        <div className="filters__list">
          <div className="filters__row search">
            <SearchBar
              searchValue={searchValue}
              setSeachValue={handleSearchChange}
              handleSearchMovie={handleSearchMovie}
            />
          </div>
          <div className="filters__row">
            <h3>Sort:</h3>
            <div className="filters__buttons">
              <OutlineSingleSelectBtn active={true}>
                Random
              </OutlineSingleSelectBtn>
              <OutlineSingleSelectBtn>Newest</OutlineSingleSelectBtn>
              <OutlineSingleSelectBtn>Oldest</OutlineSingleSelectBtn>
            </div>
          </div>
          <div className="filters__row">
            <h3>Genres:</h3>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>
                  <Checkbox label={genre} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filters__submit">
          <PrimaryButton>Apply</PrimaryButton>
        </div>
      </aside>
    </div>
  );
};

export default Filters;
