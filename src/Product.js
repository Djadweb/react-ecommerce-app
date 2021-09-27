import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import StarIcon from '@mui/icons-material/Star';
import './scss/Product.scss'

function Product({ stock, image, reviews,stars, name, price }) {
    return (
        <div className="product" > 
            <div className="stock">
                { stock > 5 ? <CheckCircleIcon className="in-stock"/> : <ErrorOutlineIcon className="out-stock"/> }                
                { stock > 0 ? <p className="in-stock">in stock</p> : <p className="out-stock">out of stock</p> }                
            </div>
            <div className="product__image"><img src={image}/></div>
            <div className="product__reviews">                
                <div className="stars">
                    <div>
                        { Array(5).fill().map(() => <StarIcon className="star"/>) }
                    </div>                    
                    <div>
                        { Array(stars).fill().map(() => <StarIcon className="stars__rated"/>)}
                    </div>                
                </div>
                <div className="reviews">Reviews ({reviews})</div>
            </div>
            <div className="product__name">{name}</div>
            <div className="product__price">
                <div className="old-price"><strike>${price}</strike></div>
                <div className="new-price">${price}</div>                
            </div>
        </div>
    )
}
 
 export default Product;
