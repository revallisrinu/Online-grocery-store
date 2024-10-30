import React from 'react';

import "./About.css"
import FrontPart from './FrontPart';

const About = () => {
  return (
    <>
     <FrontPart/>
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our online grocery store! We are committed to providing you with the freshest produce, high-quality products, and excellent customer service. Our goal is to make your shopping experience as convenient and enjoyable as possible.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver the best grocery shopping experience by offering a wide selection of products, competitive pricing, and outstanding service.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Quality: We prioritize high-quality products.</li>
        <li>Convenience: We strive to make shopping easy and accessible.</li>
        <li>Community: We support local farmers and producers.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feel free to reach out to our support team at revallisrinu28@gmail.com.
      </p>
    </div>
    </>
  );
}

export default About;
