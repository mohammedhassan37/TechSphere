import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <h3>TechSphere</h3>
          <p>Your one-stop shop for the latest tech.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/phone">Phones</Link></li>
            <li><Link to="/Tablets">Tablets</Link></li>
            <li><Link to="/Headphones">Headphones</Link></li>
            <li><Link to="/TV">TVs</Link></li>
            <li><Link to="/Smartwatch">Watches</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Account</h4>
          <ul className="footer-links">
            <li><Link to="/registration">Register</Link></li>
            <li><Link to="/orders">Previous Orders</Link></li>
            <li><Link to="/accountdetails">Account Details</Link></li>
            <li><Link to="/admin">Admin Hub</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Basket</h4>
          <ul className="footer-links">
            <li><Link to="/Basket">View Basket</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://www.instagram.com/tech___sphere1/"
               target="_blank" 
               rel="noopener noreferrer"
            >

            <i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/Tech___Sphere"
               target="_blank" 
               rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TechSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;