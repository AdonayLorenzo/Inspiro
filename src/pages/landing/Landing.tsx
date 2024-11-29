import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ImageCarousel from "../../components/images/image-carousel";
import NewsCarousel from "../../components/news/news-carousel";
import "../landing/Landing.css"
import { useSearchContext } from '../../../public/SearchContext';


const Landing: React.FC = () => {
    const { setSearchTerm, handleSearch } = useSearchContext();

    const handleButtonClick = (term: string) => {
        setSearchTerm(term);  // Cambia el término de búsqueda
        handleSearch();       // Realiza la búsqueda
    };

    return (

        <>
            <Header></Header>
            <h1 className="Title">POPULAR</h1>
            <hr className="first-line"></hr>
            <ImageCarousel></ImageCarousel>

            <section className="categories">
                <h1 className="Title">CATEGORIES</h1>
                <hr className="second-line"></hr>
                <div className="categoriesButtons">
                    <button
                        className="categoryButton"
                        style={{
                            backgroundImage: 'url(./category-buttons/cars.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        onClick={() => handleButtonClick('cars')} // Cambia el término de búsqueda y realiza la búsqueda
                    >
                        <span>cars</span>
                    </button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/birds.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('birds')}
                    ><span>birds</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/flowers.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('flowers')}
                    ><span>flowers</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/mountains.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Mountains')}
                    ><span>Mountains</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/bikes.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Bikes')}
                    ><span>bikes</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/city.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('City')}
                    ><span>cities</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/anime.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Anime')}
                    ><span>anime</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/food.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Food')}
                    ><span>food</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/sport.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('cars')}
                    ><span>sports</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/wallpaper.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Wallpaper')}
                    ><span>wallpapers</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/fire.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Fire')}
                    ><span>fire</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/aiart.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('AI Art')}
                    ><span>ai art</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/realistic.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Realistic Drawing')}
                    ><span>realistic</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/space.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Space')}
                    ><span>space</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/insect.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => handleButtonClick('Insects')}
                    ><span>insects</span></button>

                </div>
            </section>
            <section>
                <h1 className="Title">NEWS</h1>
                <hr className="third-line"></hr>
                <NewsCarousel jsonPath="src\components\news\news.json" />
            </section>
            <Footer></Footer>
        </>
    )
}

export default Landing;