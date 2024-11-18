import React from "react";
import Header from "../../components/header/Header";
import ImageCarousel from "../../components/images/image-carousel";
import NewsCarousel from "../../components/news/news-carousel";
import "../landing/Landing.css"


const Landing: React.FC = () => {
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
                    }}><span>cars</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/birds.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>birds</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/flowers.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>flowers</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/mountains.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>Mountains</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/bikes.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>bikes</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/city.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>cities</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/anime.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>anime</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/food.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>food</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/sport.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>sports</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/wallpaper.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>wallpapers</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/fire.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>fire</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/aiart.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>ai art</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/realistic.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>realistic</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/space.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>space</span></button>
                    <button className="categoryButton" style={{
                        backgroundImage: 'url(./category-buttons/insect.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}><span>insects</span></button>
                </div>
            </section>
            <section>
            <NewsCarousel jsonPath="src\components\news\news.json" />
            </section>
        </>
    )
}

export default Landing;