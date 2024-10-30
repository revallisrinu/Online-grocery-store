// Cart/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create Cart Context
export const CartContext = createContext(); // Export the context directly

// CartProvider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the Cart context
export const useCart = () => {
    return useContext(CartContext);
};
