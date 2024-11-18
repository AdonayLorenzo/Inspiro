import React, { useEffect, useState } from 'react';
import { getRandomImagePath } from '../random-images-searchers/RandomImageSearcher';
import '../images/image-carousel.css';

const Carousel: React.FC = () => {
  const [imageBlocks, setImageBlocks] = useState<string[][]>([]); // Cada bloque contiene 4 imágenes
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0); // Índice del bloque actual

  useEffect(() => {
    // Genera el primer bloque de 4 imágenes al montar el componente
    addNewImageBlock();
  }, []);

  const addNewImageBlock = () => {
    const newImages = Array.from(new Set(Array.from({ length: 4 }, () => getRandomImagePath())));
    setImageBlocks((prevBlocks) => [...prevBlocks, newImages]);
  };

  // Función para ir al bloque anterior
  const handlePrevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Función para ir al siguiente bloque
  const handleNextBlock = () => {
    // Si estamos en el último bloque visible, generamos un nuevo bloque
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

