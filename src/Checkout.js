import React from 'react'
import { useStateValue } from './StateProvider';
import './scss/Checkout.scss';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue();    
    return (
        <div className="checkout"> 
        <div className="container"><h1>Shopping Cart</h1></div>        
            <div className="container">            
                <div className="checkout__items">                    
                    {basket.length === 0 ? (
                        <div>
                            <h5>Your Shopping Cart is Empty</h5>
                        </div>
                    ) : (
                        <div>
                            <table>
                                <tr id="item">
                                    <th>Item</th>                                
                                    <th>Price</th>                
                                </tr>
                                <tr>
                                    {basket.map(item => (
                                        <CheckoutProduct
                                            item={item.id}                                                                
                                            name={item.name}
                                            image={item.image}
                                            price={item.price}                                
                                        />                                        
                                    ))
                                    }
                                </tr>                                
                            </table>
                        </div>
                    )}                    
                </div>
                {basket.length > 0 && (
                    <div className="checkout__total">
                        <SubTotal/>
                    </div>
                )} 
                </div>   
            </div>
    )
}
//npm i react-currency-format
 export default Checkout
