import React from 'react'
import fruits from "../FrontPart/Assests/fruits.webp"
import  vegetables from "../FrontPart/Assests/vegtables.webp"
import dairy from "../FrontPart/Assests/dairy.webp"
import bakery from "../FrontPart/Assests/bakery.jpeg"
import FrontPart from './FrontPart'
import "./Homepage.css"
const HomePage = () => {
  return (
    
    <div>
        <FrontPart/>
  <section class="hero">
    <h1>Fresh & Organic Groceries</h1>
  </section>

  
  <section class="categories">
    <div class="category">
      <img src={fruits} alt="Fruits"/>
      <h3>Fresh Fruits</h3>
    </div>
    <div class="category">
      <img src={vegetables} alt="Vegetables"/>
      <h3>Organic Vegetables</h3>
    </div>
    <div class="category">
      <img src={dairy} alt="Dairy"/>
      <h3>Dairy Products</h3>
    </div>
    <div class="category">
      <img src={bakery} alt="Bakery" height="100px" width="100px"/>
      <h3>Bakery Items</h3>
    </div>
  </section>

  
  <section class="promotion">
    <div>
      <h2>Get 20% Off Your First Purchase!</h2>
      <p>Use code FIRST20 at checkout</p>
    </div>
  </section>


  <footer>
    <p>&copy; 2024 Grocery Store. All rights reserved.</p>
  </footer>
    </div>
  )
}

export default HomePage