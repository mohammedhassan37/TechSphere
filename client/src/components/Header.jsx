import '../Styles/Header.css'
import { Link } from "react-router-dom";
import basket from '../assets/basket.png';

function Header() {
    return (
        <>
        <div class="nav-container">
        <header>
            <nav>
                <div class="logo">
                    
                    <Link to="/" id='title'><h1>TechSphere</h1></Link>
                </div>
                
                <div class="nav-links">
                    <Link to="/phone">Phone</Link>
                    <Link to="/Tablets">Tablets</Link>
                    <Link to="/Headphones">Headphones</Link>
                    <Link to="/TV">TV & Home</Link>
                    <Link to="/Smartwatch">Smartwatch</Link>
                    <Link to="/About">About</Link>
                </div>
                
                <div class="nav-search">
                    <div class="search-container">
                        
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div class="basket">
                        <img src={basket} alt= "Shopping Basket"/>
                        
                    </div>
                </div>
            </nav>
        </header>
    </div> 
        </>
    )
}

export default Header;