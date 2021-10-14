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
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                        />   
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                        />   
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                        />   
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                        />   
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                        />   
                        <Product className="product"
                            id={6542321}
                            stock={0}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
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
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                    />   
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                    />   
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                    />   
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
                            price={3300}
                    />   
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={4}
                            stars={1}
                            name="gaming station"
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
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                       
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                       
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                       
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                       
                    <Product className="product"
                            id={6542321}
                            stock={5}
                            image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                            reviews={5}
                            stars={4}
                            name="gaming station"
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
                            image={desktop1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={desktop1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={desktop1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={desktop1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={desktop1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={desktop1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
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
                            image={monitor1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={monitor1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={monitor1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={monitor1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={monitor1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                                           
                    <Product className="product"
                            id={6542321}
                            stock={10}
                            image={monitor1}
                            reviews={5}
                            stars={4}
                            name="gaming station"
                            price={3300}
                    />                                                           
                    </div>
                </div>

                {/* Brands section */}                
                <div className="home___row">                                        
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
    return(
        <div>
            <Slider />
        </div>
    )
}

export default Home
