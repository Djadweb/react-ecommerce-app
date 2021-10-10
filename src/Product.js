import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import './scss/Product.scss'
import { useStateValue } from './StateProvider'

function Product({ id, stock, image, reviews, stars, name, price }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {        
        //ADD ITEM TO BASKET
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                stock: stock,
                image: image,
                reviews: reviews,
                stars: stars,
                name: name, 
                price: price
            }
        })
    }
    return (
        <div className="product"> 
            <div className="stock">
                { stock >= 5 ? <CheckCircleIcon className="in-stock"/> : <ErrorOutlineIcon className="out-stock"/> }                
                { stock > 0 ? <p className="in-stock">in stock</p> : <p className="out-stock">out of stock</p> }                
            </div>
            <div className="product__image"><img src={image} alt=""/></div>
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
            <div className="add-to-cart">
                <Button onClick={() => addToBasket()} variant="contained btn4">ADD TO CART</Button>
            </div>
        </div>
    )
}
 
 export default Product;
