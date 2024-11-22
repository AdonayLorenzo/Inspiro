import React, { useState, useEffect } from 'react';
import { NewsItem } from '../news/types';
import { RandomNewsSearcher } from '../news/random-news-searcher';
import '../news/news-carousel.css';

interface NewsCarouselProps {
    jsonPath: string; // Ruta del archivo JSON
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ jsonPath }) => {
    const [newsBlocks, setNewsBlocks] = useState<NewsItem[][]>([]); // Cada bloque contiene 4 noticias
    const [currentBlockIndex, setCurrentBlockIndex] = useState(0); // Índice del bloque actual

    useEffect(() => {
        // Genera los primeros 2 bloques de noticias al montar el componente
        addNewNewsBlock();
        addNewNewsBlock();
    }, [jsonPath]);

    // Función para añadir un nuevo bloque de noticias (4 noticias)
    const addNewNewsBlock = async () => {
        const newsSearcher = new RandomNewsSearcher(jsonPath);
        const news = await newsSearcher.getRandomNews(); // Obtenemos noticias aleatorias
        const newBlock = news.slice(0, 4); // Tomamos solo 4 noticias para el bloque
        setNewsBlocks((prevBlocks) => [...prevBlocks, newBlock]); // Añadimos el bloque de noticias
    };

    // Función para ir al bloque anterior
    const handlePrevBlock = () => {
        if (currentBlockIndex > 0) {
            setCurrentBlockIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Función para ir al siguiente bloque
    const handleNextBlock = () => {
        if (currentBlockIndex === newsBlocks.length - 1) {
            addNewNewsBlock(); // Generamos un nuevo bloque si estamos en el último bloque
        }
        setCurrentBlockIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className="news-carousel-container">
            
            <div className="news-carousel">
            <button
                onClick={handlePrevBlock}
                className="carousel-button left"
                disabled={currentBlockIndex === 0}
                aria-label="Previous Block"
            >
                {'<'}
            </button>
                <div className="news-cards">
                    {newsBlocks[currentBlockIndex]?.map((item, index) => (
                        <div
                            className="news-card"
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="overlay"></div>
                            <h3>{item.title}</h3>
                            <p>{item.creator}</p>
                        </div>
                    ))}
                </div>
                <button
                onClick={handleNextBlock}
                className="carousel-button right"
                aria-label="Next Block"
            >
                {'>'}
            </button>
            </div>
           
        </div>
    );
};

export default NewsCarousel;

