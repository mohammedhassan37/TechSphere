    import "../Styles/Header.css";
    import { Link, useNavigate, useLocation } from "react-router-dom";
    import logo from "../assets/logo.png";
    import logodarkmode from "../assets/logodarkmode.png";
    import { useState, useEffect } from "react";

    function Header() {
    const [mode, setMode] = useState("light");
    const [zoom, setZoom] = useState(1);
    const [query, setQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const ChangeMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    useEffect(() => {
        document.body.style.zoom = zoom;
    }, [zoom]);

    useEffect(() => {
        const checkLoginStatus = async () => {
        try {
            const response = await fetch(`${API_URL}/account-details`, {
            method: "GET",
            credentials: "include",
            });

            if (!response.ok) {
            setIsLoggedIn(false);
            setIsAdmin(false);
            return;
            }

            const data = await response.json();
            setIsLoggedIn(true);
            setIsAdmin(data.user?.isAdmin || false);
        } catch (error) {
            console.error("Error checking login status:", error);
            setIsLoggedIn(false);
            setIsAdmin(false);
        }
        };

        checkLoginStatus();
    }, [location.pathname, API_URL]);

    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter" && query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const handleLogout = async () => {
        try {
        const response = await fetch(`${API_URL}/logout`, {
            method: "POST",
            credentials: "include",
        });

        if (!response.ok) return;

        setIsLoggedIn(false);
        setIsAdmin(false);
        navigate("/");
        window.location.reload();
        } catch (error) {
        console.error("Error logging out:", error);
        }
    };

    return (
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
                <Link to="/tablets" className="nav-link">Tablets</Link>
                <Link to="/headphones" className="nav-link">Headphones</Link>
                <Link to="/tv" className="nav-link">TVs</Link>
                <Link to="/smartwatch" className="nav-link">Watches</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>

            <div className="search-wrapper">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
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
                {!isLoggedIn && <Link to="/registration">Register</Link>}

                {isLoggedIn && (
                    <>
                    <Link to="/orders">Previous Orders</Link>
                    <Link to="/account-details">Account Details</Link>
                    {isAdmin && <Link to="/admin">Admin Hub</Link>}
                    <button
                        onClick={handleLogout}
                        className="logout-button"
                        style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "10px",
                        textAlign: "left",
                        width: "100%",
                        color: "inherit",
                        font: "inherit",
                        }}
                    >
                        Log out
                    </button>
                    </>
                )}
                </div>
            </div>

            <Link to="/basket" className="basket">
                <i className="fa-solid fa-cart-shopping"></i>
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
                onClick={() => setZoom((prev) => Math.max(0.6, prev - 0.1))}
                title="Zoom out"
                ></i>

                <i
                className="fa-solid fa-magnifying-glass-plus zoom-option"
                onClick={() => setZoom((prev) => Math.min(2, prev + 0.1))}
                title="Zoom in"
                ></i>
            </div>
            </nav>
        </header>
        </div>
    );
    }

    export default Header;