import React, { createContext, useState, ReactNode, useContext } from 'react';
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

    const handleSearch = () => {
        navigate(`/Searched/${encodeURIComponent(searchTerm)}`);
        console.log('Buscando:', searchTerm);
    };

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

