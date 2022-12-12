import React, { useState } from 'react';
import DefaultImg from 'images/default-movie.jpg';
import './ImageUrl.css';

const ImageFromUrl = ({ imageUrl, alt }) => {
  const [URL, setURL] = useState(imageUrl);
  return (
    <div className="image__container">
      <img src={URL} onError={() => setURL(DefaultImg)} alt={alt} />
    </div>
  );
};

export default ImageFromUrl;
