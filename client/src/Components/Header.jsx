import '../Styles/Header.css'
import { Link } from "react-router-dom";
import basket from '../assets/basket.png';
import logo from '../assets/logo.png'
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import zoomOut from '../assets/zoom-out.svg';
import zoomIn from '../assets/zoom-in.svg';
import { useState, useEffect } from 'react';


function Header() {
    const [mode, setMode] = useState("light");
    const [zoom, setZoom] = useState(1);

    const ChangeMode = () => {
        setMode(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    useEffect(() => {
        document.body.style.zoom = zoom;
    }, [zoom]);

    
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
                    <Link to="/phone" className="nav-link">Phone</Link>
                    <Link to="/Tablets" className="nav-link">Tablet</Link>
                    <Link to="/Headphones" className="nav-link">Headphone</Link>
                    <Link to="/TV" className="nav-link">TV</Link>
                    <Link to="/Smartwatch" className="nav-link">Smartwatch</Link>
                    <Link to="/About" className="nav-link">About</Link>
                    <Link to="/Contact" className="nav-link">Contact</Link>
                    <Link to="/Registration" className="nav-link">Registration</Link>
                    
                </div>
                
                <div class="nav-search">
                    <div class="search-container">
                        
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <Link to="/Basket">
                    <div class="basket">
                        <img src={basket} alt= "Shopping Basket"/>
                        
                    </div>
                    </Link>
                                    
                </div>

                <div className="light-dark-mode" onClick={ChangeMode}>
                    <img src={mode === "light" ? sun : moon} alt= "Change mode"/>
                    </div>

                <div className="zoom-options">
                    <img src={zoomOut} onClick={() => setZoom(0.1 - zoom)} alt= "Zoom out" />
                    <img src={zoomIn} onClick={() => setZoom(0.1 + zoom)} alt= "Zoom in" />
                </div>

            </nav>
        </header>
    </div> 
        </>
    )
}

export default Header;