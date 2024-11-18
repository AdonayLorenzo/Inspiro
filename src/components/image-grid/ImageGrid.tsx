import React from 'react';
import { getRandomImagePath } from '../random-images-searchers/RandomImageSearcher';
import '../image-grid/ImageGrid.css';

const ImageGrid: React.FC = () => {
    // Genera una lista de imágenes aleatorias para el grid
    const images = Array.from({ length: 9 }, () => getRandomImagePath());

    return (
        <div className="image-grid">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`grid-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                    <img src={src} alt={`Random ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
