import '../Styles/Header.css';
import { Link, useNavigate } from "react-router-dom";
import basket from '../assets/basket.png';
import logo from '../assets/logo.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import zoomOut from '../assets/zoom-out.svg';
import zoomIn from '../assets/zoom-in.svg';
import logodarkmode from '../assets/logodarkmode.png';
import { useState, useEffect } from 'react';

function Header() {
    const [mode, setMode] = useState("light");
    const [zoom, setZoom] = useState(1);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);


    const navigate = useNavigate();

    const ChangeMode = () => {
        setMode(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    useEffect(() => {
        document.body.style.zoom = zoom;
    }, [zoom]);

    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter") {
            navigate(`/search?q=${query}`);
        }
    };

    return (
        <>
            <div className="nav-container">
                <header>
                    <nav>
                            <Link to="/" className="logo">
                            <img
                                src={mode === "light" ? logo : logodarkmode}
                                alt="logo"
                                style={{ height: "40px", width: "40px", cursor: "pointer" }}
                            />
                            </Link>

                        <div className="nav-links">
                            <Link to="/phone" className="nav-link">Phones</Link>
                            <Link to="/Tablets" className="nav-link">Tablets</Link>
                            <Link to="/Headphones" className="nav-link">Headphones</Link>
                            <Link to="/TV" className="nav-link">TVs</Link>
                            <Link to="/Smartwatch" className="nav-link">Watches</Link>
                            <Link to="/About" className="nav-link">About</Link>
                            <Link to="/Contact" className="nav-link">Contact</Link>
                        </div>

                        

                        <div className="search-wrapper">
                         <i className="fa-solid fa-magnifying-glass search icon"></i>

                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search TechSphere...."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleSearchKeyPress}
                            />
                            </div>



                           <div className="account-dropdown">
                              <i className="fa-solid fa-user"></i>

                              <div className="account-menu">
                              <Link to="/registration">Register</Link>
                              <Link to="/orders">Previous Orders</Link>
                              <Link to="/">Account Details</Link>
                            </div>
                           </div>


                            <Link to="/Basket" className="basket">
                                    <i className ="fa-solid fa-cart-shopping"></i>
                            </Link>
                        

                                <div className="light-dark-mode" onClick={ChangeMode}>
                                {mode === "light" ? (
                                    <i className="fa-solid fa-sun"></i>
                                    
                                ) : (
                                    <i className="fa-solid fa-moon"></i>
                                )}
                                </div>


                                 <div className="zoom-options">
                                <i
                                    className="fa-solid fa-magnifying-glass-minus zoom-option"
                                    onClick={() => setZoom(zoom - 0.1)}
                                    title="Zoom out"
                                ></i>

                                <i
                                    className="fa-solid fa-magnifying-glass-plus zoom-option"
                                    onClick={() => setZoom(zoom + 0.1)}
                                    title="Zoom in"
                                ></i>
                                </div>

                    </nav>
                </header>
            </div>
        </>
    );
}

export default Header;
