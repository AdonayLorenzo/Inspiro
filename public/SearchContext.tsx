import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define la forma de los datos del contexto
interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    handleSearch: () => void;
}

// Crear el contexto con valores iniciales
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Proveedor del contexto
interface SearchProviderProps {
    children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Este hook asegura que el searchTerm sea el más reciente
    const handleSearch = () => {
        if (searchTerm.trim()) { // Solo realiza la búsqueda si hay un término de búsqueda
            navigate(`/Searched/${encodeURIComponent(searchTerm)}`);
            console.log('Buscando:', searchTerm);
        }
    };

    // Hook para escuchar cambios en searchTerm y hacer la búsqueda automáticamente si lo deseas
    useEffect(() => {
        // Si hay un término de búsqueda en la URL al iniciar, establece el searchTerm
        if (searchTerm) {
            handleSearch();
        }
    }, [searchTerm]); // Si el searchTerm cambia, realiza la búsqueda

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

// Hook para usar el contexto
export const useSearchContext = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext debe ser usado dentro de un SearchProvider');
    }
    return context;
};

