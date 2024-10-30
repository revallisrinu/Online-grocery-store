import React, { useState } from 'react';
import axios from 'axios';
import "./Additems.css";
import FrontPart from '../FrontPart/FrontPart';
import { useNavigate } from 'react-router-dom';

const AddItems = ({ fetchData }) => {

  const navigate=useNavigate()

  const [item, setItem] = useState({
    category: '',
    name: '',
    quantity: '',
    price: '',
    unit: ''
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleAddItem = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/groceries", item);
      fetchData();
    } catch (error) {
      console.error("Error adding item:", error);
    }
    setItem({
      category: '',
      name: '',
      price: '',
      quantity: '',
      unit: '',
    });
    alert("One Item has been Added to Your Cart")
    navigate("/ManageProducts")
  };



  return (
    <><FrontPart/>
    <div className='add-items'>
      <div className='sub-items'>
        <h3>Add New Item</h3><br />
        <input type="text" name="category" placeholder="Category" value={item.category} onChange={handleChange} /><br /><br />
        <input type="text" name="name" placeholder="Name" value={item.name} onChange={handleChange} /><br /><br />
        <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} /><br /><br />
        <input type="number" name='quantity' placeholder='Quantity' value={item.quantity} onChange={handleChange}/><br /><br />
        <input type="text" name="unit" placeholder="Unit" value={item.unit} onChange={handleChange} /><br /><br />
        <button onClick={handleAddItem}>Add Item</button> 
      </div>
    </div>
    </>
  );
};

export default AddItems;
