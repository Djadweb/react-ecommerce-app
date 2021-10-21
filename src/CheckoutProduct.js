import React from 'react'
import './scss/CheckoutProduct.scss';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, name, image, price }) {
    
    return (       
            <div className="checkoutProduct">
                <td id="item">
                    <img src={image} alt="" />
                    <div className="checkoutProduct__title">
                        <p>{name}</p>
                    </div>
                </td>     
                <td id="price">
                    <div className="checkoutProduct__price">
                        <p>$</p>
                        <p>{price}</p>
                    </div>                    
                </td>   
            </div>    
    )
}

export default CheckoutProduct
