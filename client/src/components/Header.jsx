import '../Styles/Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <div className="nav-container">
        <header>
            <nav>
                <div className="logo">
                    
                    <h1>TechSphere</h1>
                </div>
                
                <div className="nav-links">
                    <Link to="/phone">Phone</Link>
                    <Link to="/Tablets">Tablets</Link>
                    <Link to="/Headphones">Headphones</Link>
                    <Link to="/TV">TV & Home</Link>
                    <Link to="/Smartwatch">Smartwatch</Link>
                    <Link to="/About">About</Link>
                </div>
                
                <div className="nav-search">
                    <div className="search-container">
                        
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className="basket">
                        <img src="basket.png"/>
                        
                    </div>
                    <div className="Account">
                        <Link to="/Registeration"><img src="basket.png"/></Link>
                        {/* replace the image source with a */}
                    </div>
                </div>
            </nav>
        </header>
    </div> 
        </>
    )
}

export default Header;