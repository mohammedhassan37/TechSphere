import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About TechSphere</h2>
      <p>
        Welcome to <strong>TechSphere</strong> – your one-stop shop for the latest and greatest in consumer electronics. 
        From smartphones and tablets to headphones and smart home devices, we bring you cutting edge technology at competitive prices.
      </p>

      <h3>Our Mission</h3>
      <p>
        At TechSphere, our mission is simple: to provide high quality tech products with exceptional customer service. 
        We strive to make technology accessible and enjoyable for everyone, whether you're a tech enthusiast or a casual user.
      </p>

      <h3>Our Vision</h3>
      <p>
        We envision a world where technology seamlessly enhances everyday life. 
        By offering the latest innovations, we help our customers stay connected, productive, and entertained.
      </p>

      <h3>Contact Us</h3>
      <p>
        Have questions or need assistance? Feel free to reach out to our support team at <a href="mailto:support@techsphere.com">support@techsphere.com</a>.
      </p>
    </div>
  );
};

export default About;
