import React from 'react'
import Product from './Product'
import './scss/Home.scss'

function Home() {
    return (        
        <div className="home">
            <div className="container">
                <Product
                    stock={0}
                    image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                    reviews={4}
                    stars={1}
                    name="gaming station"
                    price={3300}
                />                            
                <Product
                    stock={13}
                    image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                    reviews={2}
                    stars={2}
                    name="gaming station"
                    price={3300}
                />                            
                <Product
                    stock={13}
                    image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                    reviews={2}
                    stars={4}
                    name="gaming station"
                    price={3300}
                />                            
                <Product
                    stock={13}
                    image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                    reviews={2}
                    stars={5}
                    name="gaming station"
                    price={3300}
                />                            
                <Product
                    stock={13}
                    image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                    reviews={2}
                    stars={5}
                    name="gaming station"
                    price={3300}
                />                            
                <Product
                    stock={13}
                    image="https://i.ibb.co/xg7w7f3/pc-portable-msi-gl65-9sd-216xfr-1-removebg-preview.png"
                    reviews={2}
                    stars={5}
                    name="gaming station"
                    price={3300}
                />                            
            </div>            
        </div>
    )
}

export default Home
