import React from 'react';
import { Button } from '@mui/material';
import './scss/SubTotal.scss'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <div className="subtotal__price">                
                <div className="price">                    
                    <p>
                        <CurrencyFormat
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
                    </p>                    
                </div>
            </div>            
            <Link to="/payment">
                <Button className="checkout btn5">Proceed To Checkout</Button>
            </Link>
        </div>
    )
}

export default SubTotal