import React, { useEffect, useState } from 'react'
import './scss/Payment.scss';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'; 
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [succeeded, setSucceeded] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        //Generete Stripe secret to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${getBasketTotal(basket)}`
            });
            setClientSecret(response.data.client_secret);
        }        

        getClientSecret();
    }, [basket]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);        
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);
        });
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
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
                        <CardElement onChange={handleChange}/>                            
                        <br />
                        <div className="payment__price-container">
                            <CurrencyFormat className="price"
                                renderText={(value) => (
                                    <p>
                                        Subtotal ({basket.length} items): <strong id="price">{value}</strong>
                                    </p>
                                )}

                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />

                            <button onClick={handleSubmit} disabled={processing || disabled || succeeded} className="btn5 pay">Pay</button>
                        </div>                        
                    </form>
                </div>            
            </div>
            <div className="payment__section"></div>
        </div>
    )
}

export default Payment
