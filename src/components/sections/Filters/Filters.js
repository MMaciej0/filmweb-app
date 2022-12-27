import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import './Filters.css';

import SearchBar from '../SearchBar/SearchBar';

const Filters = ({ visibility, setVisibility }) => {
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
          <div className="filters__row search">content</div>
        </div>
      </aside>
    </div>
  );
};

export default Filters;
