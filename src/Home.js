import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import ProductCategory from './ProductCategory'
import './scss/Home.scss'
import customBuilds from './assets/custom-builds.png'
import msilaptops from './assets/MSI-laptops.png'
import desktops from './assets/desktops.png'
import desktop1 from './assets/desktop1.png'
import monitors from './assets/monitors.png'
import monitor1 from './assets/monitor1.png'

function Home() {
    return (        
        <div className="home">
            <div className="container">                                         
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
            </div>            
        </div>
    )
}

export default Home
