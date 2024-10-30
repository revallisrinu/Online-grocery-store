import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPart from './FrontPart/FrontPart';
import HomePage from './FrontPart/HomePage';
import ManageProducts from './FrontPart/ManageProducts';
import About from './FrontPart/About';
import Login from './Auth/Login';
import EditItems from './Grocery/EditItems';
import AddItems from './Grocery/AddItems';
import Cart from './Cart/Cart';
import { CartProvider } from './Cart/CartContext.jsx'; 

const App = () => {
  return (
    <CartProvider> 
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/mainpage" element={<FrontPart />} />
          <Route path="/Additems" element={<AddItems />} />
          <Route path='/Homepage' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/ManageProducts' element={<ManageProducts />} />
          <Route path='/edit/:id' element={<EditItems />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
