import React, { useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import './pagination.css';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import { useEffect } from 'react';

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
  maxPages,
}) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(maxPages);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage]);

  const numOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numOfPages + 1).keys()].slice(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + maxPages);
      setMinPageNumberLimit(minPageNumberLimit + maxPages);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % maxPages === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - maxPages);
      setMinPageNumberLimit(minPageNumberLimit - maxPages);
    }
  };

  return (
    <div className="pagination__container">
      <PrimaryButton handleClick={handlePrevPage} disabled={currentPage === 1}>
        <GrPrevious className="icon-prev" />
        Prev
      </PrimaryButton>
      <div className="pagination__page-btns">
        {pages.map((pageNumber) => {
          if (
            pageNumber < maxPageNumberLimit + 1 &&
            pageNumber > minPageNumberLimit
          ) {
            return (
              <PrimaryButton
                key={pageNumber}
                handleClick={() => handlePageClick(pageNumber)}
                active={currentPage === pageNumber}
              >
                {pageNumber}
              </PrimaryButton>
            );
          }
        })}
      </div>
      <PrimaryButton
        handleClick={handleNextPage}
        disabled={currentPage === pages.length}
      >
        Next
        <GrNext className="icon-next" />
      </PrimaryButton>
    </div>
  );
};

export default Pagination;
