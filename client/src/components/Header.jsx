import '../Styles/Header.css'
import { Link } from "react-router-dom";
import basket from '../assets/basket.png';
import logo from '../assets/logo.png'


function Header() {
    return (
        <>
        <div class="nav-container">
        <header>
            <nav>
                <div className="logo">
                     <img src={logo}
                        alt="logo"
                        style={{ height: "70px", width: "70px", cursor: "pointer"}} 
                        onClick={()=> window.location.href = "http://localhost:5173/"}

                        
                     />
                </div>

                <div className ="nav-links">
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