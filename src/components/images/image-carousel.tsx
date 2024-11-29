import React, { useEffect, useState } from 'react';
import { getRandomImagePath } from '../random-images-searchers/RandomImageSearcher';
import '../images/image-carousel.css';

const Carousel: React.FC = () => {
  const [imageBlocks, setImageBlocks] = useState<string[][]>([]);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [imagesPerBlock, setImagesPerBlock] = useState(4);

  const detectImagesPerBlock = () => {
    if (window.innerWidth <= 768) {
      setImagesPerBlock(2);
    } else {
      setImagesPerBlock(4);
    }
  };

  useEffect(() => {
    detectImagesPerBlock(); // Detectamos el tamaño de la pantalla al montar el componente
    addNewImageBlock(); // Generamos el primer bloque de imágenes basado en el tamaño de pantalla
    window.addEventListener('resize', detectImagesPerBlock); // Agregar listener para el cambio de tamaño
    return () => {
      window.removeEventListener('resize', detectImagesPerBlock); // Limpiar el listener al desmontar
    };
  }, []); 

  const addNewImageBlock = () => {
    const newImages = Array.from(new Set(Array.from({ length: imagesPerBlock }, () => getRandomImagePath())));
    setImageBlocks((prevBlocks) => [...prevBlocks, newImages]);
  };

  const handlePrevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextBlock = () => {
    if (currentBlockIndex === imageBlocks.length - 1) {
      addNewImageBlock();
    }
    setCurrentBlockIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="carouselContainer">
      <button onClick={handlePrevBlock} className="carouselButton left" disabled={currentBlockIndex === 0}>
        {'<'}
      </button>
      <div className="carouselSlide">
        {imageBlocks[currentBlockIndex]?.map((path, index) => (
          <img
            key={`${path}-${index}`}
            src={path}
            alt={`Random ${index}`}
            className="carouselItem"
          />
        ))}
      </div>
      <button onClick={handleNextBlock} className="carouselButton right">
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;