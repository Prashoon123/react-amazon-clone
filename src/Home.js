import React from 'react'
import './Home.css';
import Product from './Product';
import bannerImg from './bannerImg.jpg';
import prod1 from './prod1.jpg';
import prod2 from './prod2.jpg';
import prod3 from './prod3.jpg';
import prod4 from './prod4.jpg';
import prod5 from './prod5.jpg';
import prod6 from './prod6.jpg';
import prod7 from './prod7.jpg';
import prod8 from './prod8.jpg';
import prod9 from './prod9.jpg';
import prod10 from './prod10.jpg';
import prod11 from './prod11.jpg';
function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src={bannerImg} 
                alt="home__image" 
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id={1}
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover"
                    price={13}
                    rating={5}
                    image={prod1}
                />
                <Product 
                    id={2}
                    title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray"
                    price={1656}
                    rating={5}
                    image={prod2}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={3}
                    title="Kindle Paperwhite – Now Waterproof with 2x the Storage - 8 GB (International Version)"
                    price={155}
                    rating={5}
                    image={prod3}
                />
                <Product 
                    id={4}
                    title="CHEFTRONIC SM928-Red Standing Mixer, One Size, Red"
                    price={93}
                    rating={5}
                    image={prod4}
                />
                <Product 
                    id={5}
                    title="The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams & Reaching Your Destiny Paperback"
                    price={11}
                    rating={5}
                    image={prod5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={6}
                    title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                    price={545}
                    rating={5}
                    image={prod6}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={7}
                    title="Nike Men's Flex Experience Run 8 Sneaker"
                    price={70}
                    rating={4}
                    image={prod7}
                />
                <Product 
                    id={8}
                    title="PlayStation 4 Pro 1TB Console"
                    price={400}
                    rating={5}
                    image={prod8}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={9}
                    title="New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Gray (2nd Generation)"
                    price={1299}
                    rating={5}
                    image={prod9}
                />
                <Product 
                    id={10}
                    title="Mpow EG10 Gaming Headset for PS4, PC, Xbox One Controller,Over-Ear Headphones with Mic Noise Cancelling, Switchable LED Light Soft Earmuffs for Laptop Mac Nintendo Switch Pad MAC Game(2020 Edition)"
                    price={23}
                    rating={5}
                    image={prod10}
                />
                <Product 
                    id={11}
                    title="Jenga Giant Family (Stacks to Over 3 Feet) Precision-Crafted Hardwood Game (Authentic Brand Game) (01506-19-noAcc)"
                    price={90}
                    rating={5}
                    image={prod11}
                />
            </div>
            
            {/* Product */}

        </div>
    )
}

export default Home;
