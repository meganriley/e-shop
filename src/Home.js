import React from "react";
import "./Home.css";
import Product from "./Product.js";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="e-commerce home page" className="home__image" />
                    <div className="home__row">
                        <Product
                            id="12321341"
                            title="Small succulent calico cat little pot, cactus vase, cat lover gift, Housewarming Gift, mini planter, indoor planter"
                            price={27.50}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/61+lKooHaPL._SY800_.jpg"
                        />
                        <Product
                            id="12321342"
                            title="White Mountain Puzzles 20th Century, 1000 Piece Jigsaw Puzzle"
                            price={14.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/81Qcrbh5BtL._AC_SX679_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="12321343"
                            title="Small Victories: Recipes, Advice + Hundreds of Ideas for Home Cooking Triumphs (Best Simple Recipes, Simple Cookbook Ideas, Cooking Techniques Book)"
                            price={27.77}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/41CUxwM+29S._SS135_.jpg"
                        />
                        <Product
                            id="12321344"
                            title="SAMIAH LUXE Chunky Knit Blanket 50x60 Buttercream"
                            price={109.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/91IeBCV202L._AC_SX679_.jpg"
                        />
                        <Product
                            id="12321345"
                            title="10 Herb Seeds Variety Pack & Gardening eBook | Seed Planting Set Includes Rosemary Seeds, Mint, Parsley, Sweet Basil and More"
                            price={9.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/51Gp-RSO85L._AC_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="12321346"
                            title="Balloon Dog - Mini - Rose Gold"
                            price={18.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/41IiYztobqL._SS135_.jpg"
                        />
                </div>
            </div>
        </div>
    )
}

export default Home;
