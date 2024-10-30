
import React from 'react';
import { useCart } from './CartContext';
import FrontPart from '../FrontPart/FrontPart';
import "./Cart.css"

const Cart = () => {
    const { cartItems } = useCart(); 

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
        <FrontPart/>
        <div className="cart-container">
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
        </>
    );
   
};

export default Cart;
