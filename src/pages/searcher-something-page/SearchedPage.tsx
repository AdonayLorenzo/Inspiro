import React from 'react';
import './SearchedPage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import ImageGrid from '../../components/image-grid/ImageGrid';

const SearchedPage: React.FC = () => {
    const { searchTerm } = useParams<{ searchTerm: string }>();
    return (
        
        <div className="searched-page">
            <Header/>
                <p className="searched-p">Searched: <strong>{searchTerm}</strong></p>
                <ImageGrid></ImageGrid>
            <Footer />
        </div>
    );
};

export default SearchedPage;
