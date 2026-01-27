import '../Styles/Header.css';
import { Link, useNavigate } from "react-router-dom";
import basket from '../assets/basket.png';
import logo from '../assets/logo.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import zoomOut from '../assets/zoom-out.svg';
import zoomIn from '../assets/zoom-in.svg';
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
                            <div>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ height: "70px", width: "70px", cursor: "pointer" }}
                                />
                            </div>
                        </Link>

                        <div className="nav-links">
                            <Link to="/phone" className="nav-link">Phone</Link>
                            <Link to="/Tablets" className="nav-link">Tablet</Link>
                            <Link to="/Headphones" className="nav-link">Headphones</Link>
                            <Link to="/TV" className="nav-link">TV</Link>
                            <Link to="/Smartwatch" className="nav-link">Smartwatch</Link>
                            <Link to="/About" className="nav-link">About</Link>
                            <Link to="/Contact" className="nav-link">Contact</Link>
                        </div>

                        

                        <div className="nav-search">
                                <i className="fa-solid fa-magnifying-glass search-icon"
                                 onClick={() => setShowSearch(prev => !prev)}
                             ></i>

                         {showSearch && (
                            <input
                            type="text"
                            className="search-input"
                            placeholder="Search TechSphere..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleSearchKeyPress}
                            autoFocus
                              />
                            )}
                           </div>


                           <div className="account-dropdown">
                              <i className="fa-regular fa-user"></i>

                              <div className="account-menu">
                              <Link to="/registration">Register</Link>
                            </div>
                           </div>


                            <Link to="/Basket">
                                <div className="basket">
                                    <img src={basket} alt="Shopping Basket" />
                                </div>
                            </Link>
                        

                        <div className="light-dark-mode" onClick={ChangeMode}>
                            <img src={mode === "light" ? sun : moon} alt="Change mode" />
                        </div>

                        <div className="zoom-options">
                            <img
                                className="zoom-option"
                                src={zoomOut}
                                onClick={() => setZoom(zoom - 0.1)}
                                alt="Zoom out"
                            />
                            <img
                                className="zoom-option"
                                src={zoomIn}
                                onClick={() => setZoom(zoom + 0.1)}
                                alt="Zoom in"
                            />
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
}

export default Header;
