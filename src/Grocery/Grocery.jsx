import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Grocery.css";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

const Grocery = () => {
    const [details, setDetails] = useState([]);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        const modifiedArray = details.filter((ele) => ele.id !== id);
        setDetails(modifiedArray);
    };

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:3000/groceries");
        setDetails(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = (item) => {
        addToCart(item);
        alert(`${item.name} has been added to the cart!`); // Optional: Notify the user
    };

    return (
        <div className="grocery-container">
            <marquee behavior="smooth" direction="">Welcome to the Grocery Page</marquee>

            <table border={2} width="80%" cellSpacing='5px' rules='all' className='table-style'>
                <thead>
                    <tr className='header-data'>
                        <th>ID</th>
                        <th>CATEGORY</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL AMOUNT</th>
                        <th>UNIT</th>
                        <th>EDIT/DELETE</th>
                        <th>ADD TO CART</th>
                    </tr>
                </thead>
                <tbody>
                    {details.length === 0 ? (
                        <tr>
                            <td colSpan="8" style={{ textAlign: "center" }}>Enter Some Data..!</td>
                        </tr>
                    ) : (
                        details.map((ele) => {
                            const totalAmount = ele.price * ele.quantity;
                            return (
                                <tr key={ele.id} style={{ textAlign: "center" }}>
                                    <td>{ele.id}</td>
                                    <td>{ele.category}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{totalAmount}</td> 
                                    <td>{ele.unit}</td>
                                    <td className='btn'>
                                        <button onClick={() => handleEdit(ele.id)}>EDIT</button>
                                        <button onClick={() => handleDelete(ele.id)}>DELETE</button>
                                    </td>
                                    <td className='cart-btn'>
                                        <button onClick={() => handleAddToCart(ele)}>Add to Cart</button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Grocery;
