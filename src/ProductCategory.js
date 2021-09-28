import React from 'react'
import { Link } from 'react-router-dom'
import './scss/ProductCategory.scss'

function ProductCategory({ title, img }) {
    return (
        <div className="product-category"> 
            <img src={img} alt="" />
            <h4>{title}</h4>
            <Link className="product-category__link">See All Products</Link>
        </div>
    )
} 
 export default ProductCategory;