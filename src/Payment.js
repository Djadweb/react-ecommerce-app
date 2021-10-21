import React from 'react'
import './scss/Payment.scss';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'; 
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    return (
        <div className="payment">
            <div className="payment__section">
                <h3>Delievery<br/>address</h3>
                <div className="payment__address">                    
                    <p>{user?.email}</p>
                    <p>09008, Algiers, Algeria</p>
                    <p></p>
                </div>
            </div>
            <hr />
            <div className="items">
                <h3>Items</h3>
                <div className="payment__items">                    
                    <p>
                    {basket.map(item => (
                        <CheckoutProduct
                            item={item.id}                                                                
                            name={item.name}
                            image={item.image}
                            price={item.price}                                
                        />                                        
                    ))
                    }
                    </p>                    
                </div>
            </div>
            <hr />
            <div className="stripe__payment">
                <h3>Payment<br/>method</h3>                
                <div className="payment__details">
                    <form>
                        <CardElement/>                            
                    </form>
                </div>            
            </div>
            <div className="payment__section"></div>
        </div>
    )
}

export default Payment
