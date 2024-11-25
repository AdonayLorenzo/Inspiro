import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css'; // Para diseño Masonry
import { getRandomImagePath } from '../random-images-searchers/RandomImageSearcher';
import './ImageGrid.css';

const ImageGrid: React.FC = () => {
    const MAX_IMAGES = 50; // Límite máximo de imágenes
    const [images, setImages] = useState<string[]>(Array.from({ length: 9 }, () => getRandomImagePath()));
    const [hasMore, setHasMore] = useState(true); // Controla si se pueden cargar más imágenes
    const [isLoading, setIsLoading] = useState(false); // Indica si estamos cargando más imágenes

    // Función para cargar más imágenes con un retraso
    const loadMoreImages = () => {
        if (images.length < MAX_IMAGES) {
            setIsLoading(true); // Indica que se está cargando
            setTimeout(() => {
                const newImages = Array.from({ length: 9 }, () => getRandomImagePath());
                setImages((prevImages) => {
                    const updatedImages = [...prevImages, ...newImages];
                    if (updatedImages.length >= MAX_IMAGES) {
                        setHasMore(false); // Detenemos la carga cuando alcanzamos el límite
                    }
                    return updatedImages.slice(0, MAX_IMAGES); // Aseguramos que no exceda el máximo
                });
                setIsLoading(false); // Finaliza el estado de carga
            }, 2000); // Retraso de 2 segundos
        }
    };

    // Escucha el scroll para agregar más imágenes al llegar al final
    useEffect(() => {
        const handleScroll = () => {
            if (
                hasMore && 
                !isLoading && 
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
            ) {
                loadMoreImages();
            }
        };

        // Añade y limpia el listener de scroll
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [images, hasMore, isLoading]); // Dependencias actualizadas para reaccionar al cambio de estado

    // Configuración de las columnas del diseño Masonry
    const breakpointColumns = {
        default: 3, // 3 columnas en pantallas grandes
        1024: 2,    // 2 columnas en pantallas medianas
        768: 1      // 1 columna en pantallas pequeñas
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumns}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
            >
                {images.map((src, index) => (
                    <div key={index} className="masonry-item">
                        <img src={src} alt={`Random ${index + 1}`} />
                    </div>
                ))}
            </Masonry>
            {/* Indicador de carga */}
            {isLoading && <p className="loading-message">Cargando más imágenes...</p>}
            {!hasMore && <p className="end-message">No hay más imágenes para cargar.</p>}
        </div>
    );
};

export default ImageGrid;

