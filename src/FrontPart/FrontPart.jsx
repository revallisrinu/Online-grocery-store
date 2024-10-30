import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import "./FrontPart.css";

const FrontPart = () => {
    const navigate = useNavigate();
    const { cartItems } = useCart();

    let handleLogout = () => {
        navigate('/');
        alert("Logged out successfully");
    };

    return (
        <>
            <div className="main-container">
                <div className="sub-container">
                    <section id='part1'>
                        <h1>ONLINE GROCERY STORE</h1>
                    </section>

                    <section id='part2'>  
                        <NavLink to='/Homepage'>
                            <div className="Home">Home</div>
                        </NavLink> 
                        <NavLink to="/About">
                            <div className="about">About</div>
                        </NavLink>                 
                        <NavLink to="/ManageProducts">
                            <div className="dashboard">Manage Products</div>
                        </NavLink>
                        <NavLink to="/Additems">
                            <div className="addnew">Add New</div>
                        </NavLink>
                        
                        
                        <NavLink to='/Cart'>
                            <div className="cart">Cart ({cartItems.length})</div>
                        </NavLink>
                        
                        <div className="logout" onClick={handleLogout}>Logout</div>    
                    </section>
                </div>
            </div>
        </>
    );
};

export default FrontPart;
