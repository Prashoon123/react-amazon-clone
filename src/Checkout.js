import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';
import './Checkout.css';
import checkoutOutAd from './checkOutAd.jpg';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src={checkoutOutAd} 
                    alt="checkout__ad" 
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is empty</h2>
                        <p>
                            You have no items in your cart. To buy one or more items, click 
                            "Add to Cart" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {/* List out all of the Checkout Products */}
                        {basket?.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
