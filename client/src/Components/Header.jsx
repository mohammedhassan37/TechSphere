import '../Styles/Header.css'
import { Link } from "react-router-dom";
import basket from '../assets/basket.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useState, useEffect } from 'react';



function Header() {

    const [mode, setMode] = useState("light");

    const ChangeMode = () => {
        setMode(previousMode => (previousMode === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);



    return (
        <>
        <div class="nav-container">
        <header>
            <nav>
                <div class="logo">
                    
                    <Link to="/" id='title'><h1></h1></Link>
                </div>
                

                <div class="nav-links">
                    <Link to="/phone">Phone</Link>
                    <Link to="/Tablets">Tablets</Link>
                    <Link to="/Headphones">Headphones</Link>
                    <Link to="/TV">TV & Home</Link>
                    <Link to="/Smartwatch">Smartwatch</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Registration">Register</Link>
                </div>
                
                <div class="nav-search">
                    <div class="search-container">
                        
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div class="basket">
                        <img src={basket} alt= "Shopping Basket"/>
                        
                    </div>
                    
                </div>

                <div class="light-dark-mode" onClick={ChangeMode}>
                    <img src={mode === "light" ? sun : moon} alt= "Change mode"/>
                </div>

            </nav>
        </header>
    </div> 
        </>
    )
}

export default Header;