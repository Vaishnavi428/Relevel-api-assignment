import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breed/malinois/images');
        const data = response.data.message;
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      <h1>Dog Images</h1>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Dog ${index + 1}`} />
      ))}
    </div>
  );
};

export default DogImages;
