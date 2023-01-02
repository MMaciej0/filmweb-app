import React, { useRef, useEffect } from 'react';
import './OutlineSingleSelectBtn.css';

const OutlineSingleSelectBtn = ({
  children,
  type,
  handleClick,
  active,
  disabled,
}) => {
  const singleBtn = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        !singleBtn.current.contains(e.target) &&
        e.target.classList.contains('outline-btn__single')
      ) {
        console.log(
          singleBtn.current.classList.value === 'outline-btn__single active'
        );
        singleBtn.current.classList.remove('active');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  const handleButton = () => {
    singleBtn.current.classList.add('active');
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <button
      className={active ? 'outline-btn__single active' : 'outline-btn__single'}
      type={type ?? 'button'}
      onClick={handleButton}
      disabled={disabled}
      ref={singleBtn}
    >
      {children}
    </button>
  );
};

export default OutlineSingleSelectBtn;
