import cart from "./cart.webp"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [action, setAction] = useState("SignUp");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === "SignUp") {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("Registered successfully!");
        } else if (action === "Login") {
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {
                alert("Login successful!");
                navigate("/mainpage"); 
            } else {
                alert("Invalid username or password!");
            }
        }

        setUsername("");
        setPassword("");
    };

    return (
        <section className="login-style">
          <div className='login-container'>
            <div className='login-card'>
                <div className='logo-section'>
                    <div className='logo'>RS</div>
                </div>
                <div className='login-illustration'>
                    <img src={cart} alt="cart" height="100px" width="50px" />
                    <p className='description'>Welcome! Please log in or create a new account to continue.</p>
                </div>
                <h2 className='form-title'>{action}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type="text"
                            placeholder='Email or Username'
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className='options'>
                        <label>
                            <input type="checkbox" /> Remember
                        </label>
                        <a href='/forgot-password'>Forgot password?</a>
                    </div>
                    <button type="submit" className="submit-primary">
                        {action === "SignUp" ? "Register" : "Login"}
                    </button>
                    <div className='toggle-buttons'>
                        <button
                            type="button"
                            className={action === "Login" ? "toggle-button gray" : "toggle-button"}
                            onClick={() => setAction("SignUp")}
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            className={action === "SignUp" ? "toggle-button gray" : "toggle-button"}
                            onClick={() => setAction("Login")}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Login;
