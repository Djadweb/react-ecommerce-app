import React from 'react'
import { Link } from 'react-router-dom'

import Product from './Product'
import ProductCategory from './ProductCategory'
import Support from './Support'
import Footer from './Footer'
import Slider from './Slider';

import './scss/Home.scss'
import './scss/buttons.scss'

import Button from '@mui/material/Button';

import customBuilds from './assets/custom-builds.png'
import msilaptops from './assets/MSI-laptops.png'
import desktops from './assets/desktops.png'
import desktop1 from './assets/desktop1.png'
import monitors from './assets/monitors.png'
import monitor1 from './assets/monitor1.png'
import brand1 from './assets/brands/brand (1).png'
import brand2 from './assets/brands/brand (2).png'
import brand3 from './assets/brands/brand (3).png'
import brand4 from './assets/brands/brand (4).png'
import brand5 from './assets/brands/brand (5).png'
import brand6 from './assets/brands/brand (6).png'
import brand7 from './assets/brands/brand (7).png'
import igpost1 from "./assets/ig-posts/IG-post(1).png"
import igpost2 from "./assets/ig-posts/IG-post(2).png"
import igpost3 from "./assets/ig-posts/IG-post(3).png"
import igpost4 from "./assets/ig-posts/IG-post(4).png"
import igpost5 from "./assets/ig-posts/IG-post(5).png"
import igpost6 from "./assets/ig-posts/IG-post(6).png"
import igpost7 from "./assets/ig-posts/IG-post(7).png"
import igpost9 from "./assets/ig-posts/IG-post(9).png"
import quote from "./assets/quote.png"

import product1 from "./assets/products/product1.png"
import product2 from "./assets/products/product2.png"
import product3 from "./assets/products/product3.png"
import product4 from "./assets/products/product4.png"
import product5 from "./assets/products/product5.png"
import product6 from "./assets/products/product6.png"
import product7 from "./assets/products/product7.png"
import product8 from "./assets/products/product8.png"
import product9 from "./assets/products/product9.png"
import product10 from "./assets/products/product10.png"
import product11 from "./assets/products/product11.png"
import product12 from "./assets/products/product12.png"
import product13 from "./assets/products/product13.png"
import product14 from "./assets/products/product14.png"
import product15 from "./assets/products/product15.png"
import product16 from "./assets/products/product16.png"
import product17 from "./assets/products/product17.png"
import product18 from "./assets/products/product18.png"
import product19 from "./assets/products/product19.png"
import product20 from "./assets/products/product20.png"



function Home() {
    return (
        <div className="home">
            <div className="container">
                <Banner />
                {/* New products section */}
                <div className="new-products">
                    <div className="head">
                        <h4>New Products</h4>
                        <Link className="new-products__link">See All New Products</Link>
                    </div>
                    <div className="products">
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image={product1}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image={product2}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image={product3}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image={product4}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image={product5}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image={product5}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                    </div>
                </div>

                {/* Custom builds section */}
                <div className="home___row">
                    <ProductCategory className="product-category"
                        title="Custome Builds"
                        img={customBuilds}
                    />
                    <div className="products">
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product6}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product7}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product8}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product9}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product10}
                            reviews={4}
                            stars={1}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                    </div>
                </div>

                {/* MSI Laptops section */}
                <div className="home___row">
                    <ProductCategory className="product-category"
                        title="MSI Laptops"
                        img={msilaptops}
                    />
                    <div className="products">
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product11}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product12}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product13}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product13}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={5}
                            image={product14}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                    </div>
                </div>

                {/* Desktops section */}
                <div className="home___row">
                    <ProductCategory className="product-category"
                        title="Desktops"
                        img={desktops}
                    />
                    <div className="products">
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product15}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product16}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product17}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product17}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product17}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />                       
                    </div>
                </div>

                {/* Monitors section */}
                <div className="home___row">
                    <ProductCategory className="product-category"
                        title="Desktop Monitors"
                        img={monitors}
                    />
                    <div className="products">
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product20}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product18}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product19}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product20}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />
                        <Product className="product"
                            id={6542321}
                            stock={10}
                            image={product20}
                            reviews={5}
                            stars={4}
                            name="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
                            price={3300}
                        />                     
                    </div>
                </div>

                {/* Brands section */}
                <div className="brands-row">
                    <div className="brands">
                        <div className="brand"><img src={brand1} alt="" /></div>
                        <div className="brand"><img src={brand2} alt="" /></div>
                        <div className="brand"><img src={brand3} alt="" /></div>
                        <div className="brand"><img src={brand4} alt="" /></div>
                        <div className="brand"><img src={brand5} alt="" /></div>
                        <div className="brand"><img src={brand6} alt="" /></div>
                        <div className="brand"><img src={brand7} alt="" /></div>
                    </div>
                </div>

                {/* Follow us section */}
                <div className="follow-us">
                    <div className="head">
                        <h4>Follow us on Instagram for News, Offers & More</h4>
                    </div>
                    <div className="posts">
                        <img src={igpost1} alt="" className="post" />
                        <img src={igpost2} alt="" className="post" />
                        <img src={igpost3} alt="" className="post" />
                        <img src={igpost4} alt="" className="post" />
                        <img src={igpost5} alt="" className="post" />
                        <img src={igpost6} alt="" className="post" />
                        <img src={igpost7} alt="" className="post" />
                        <img src={igpost9} alt="" className="post" />
                    </div>
                </div>

                {/* Testemonials section */}
                <div className="testemonials">
                    <div className="text">
                        <img className="quote" src={quote} alt="" />
                        <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                    </div>
                    <div className="name">- Tama Brown</div>
                    <Link className="review-cta">
                        <Button variant="outlined" className="btn2">Leave Us A Review</Button>
                    </Link>
                </div>
            </div>
            {/* Support section */}
            <Support />
            {/* Footer section */}
            <Footer />
        </div>
    )
}

function Banner() {
    return (
        <div>
            <Slider />
        </div>
    )
}

export default Home
