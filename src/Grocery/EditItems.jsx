import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditItems.css'; 
import FrontPart from '../FrontPart/FrontPart';

const EditItems = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    category: "",
    name: "",
    price: "",
    unit: ""
  });

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/groceries/${id}`);
        setEditData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
      }
    };
    
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/groceries/${id}`, editData);
      alert("Data has been updated successfully!");
      navigate('/ManageProducts'); 
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update data. Please try again.");
    }
  };

  return (
    <>
      <FrontPart />
      <article className="edit-items-container">
        <main className="form-container">
          <h2>Edit Grocery Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id='category'
                value={editData.category}
                onChange={(e) => setEditData({ ...editData, category: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id='name'
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id='price'
                value={editData.price}
                onChange={(e) => setEditData({ ...editData, price: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="unit">Unit:</label>
              <input
                type="text"
                id='unit'
                value={editData.unit}
                onChange={(e) => setEditData({ ...editData, unit: e.target.value })}
              />
            </div>

            <button type="submit" className="submit-button">UPDATE</button>
          </form>
        </main>
      </article>
    </>
  );
};

export default EditItems;
