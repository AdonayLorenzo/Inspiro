// Header.tsx
import React, { useState } from 'react';
import './Header.css'; // Asegúrate de crear este archivo CSS
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/Searched/${encodeURIComponent(searchTerm)}`);
        console.log('Buscando:', searchTerm);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src='../../../public/images/Logo.png' alt="Logo" />
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img 
                    src='../../../public/images/lupa.png'
                    alt="Buscar"
                    onClick={handleSearch}
                    className="search-icon"
                />
            </div>
            <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
        </header>
    );
};

export default Header;