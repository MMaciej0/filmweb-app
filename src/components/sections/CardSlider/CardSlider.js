import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CardSlider.css';
import PersonDefault from 'images/person-default.png';
import ImageFromUrl from 'components/atoms/ImageFromUrl/ImageFromUrl';

const CardSlider = ({ data, sliderHeader }) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselContainer = useRef();

  useEffect(() => {
    setCarouselWidth(
      carouselContainer.current.scrollWidth -
        carouselContainer.current.offsetWidth
    );
  }, []);

  return (
    <div className="carousel__container">
      <motion.h3>{sliderHeader}</motion.h3>
      <motion.div
        className="carousel"
        ref={carouselContainer}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          className="carousel__inner"
        >
          {data.map((item, index) => {
            return (
              <motion.div className="carousel__item" key={index}>
                <ImageFromUrl
                  imageUrl={item.image ?? PersonDefault}
                  alt={item.title}
                />
                <h4>{item.title}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardSlider;
