import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ImageCarousel from "../../components/images/image-carousel";
import NewsCarousel from "../../components/news/news-carousel";
import "../landing/Landing.css"
import { useSearchContext } from '../../../public/SearchContext';


const Landing: React.FC = () => {
    const { setSearchTerm, handleSearch } = useSearchContext();

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
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/cars.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                        onClick={() => {
                            setSearchTerm('Cars'); // Define el término de búsqueda
                            setTimeout(() => handleSearch(), 0);// Realiza la búsqueda
                        }}
                    ><span>cars</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/birds.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Birds'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>birds</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/flowers.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Flowers'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>flowers</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/mountains.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Mountains'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>Mountains</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/bikes.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Bikes'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>bikes</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/city.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Cities'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>cities</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/anime.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Anime'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>anime</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/food.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Food'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>food</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/sport.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Sports'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>sports</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/wallpaper.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Wallpapers'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>wallpapers</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/fire.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Fire'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>fire</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/aiart.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Ai Art'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>ai art</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/realistic.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Realistic Draws'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>realistic</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/space.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Space'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
                    ><span>space</span></button>

                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/insect.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => {
                        setSearchTerm('Insects'); // Define el término de búsqueda
                        setTimeout(() => handleSearch(), 0); // Realiza la búsqueda
                    }}
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