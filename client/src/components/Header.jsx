

function Header() {
    return (
        <>
        <div class="nav-container">
        <header>
            <nav>
                <div class="logo">
                    
                    <h1>TechSphere</h1>
                </div>
                
                <div class="nav-links">
                    <a href="#">Phone</a>
                    <a href="#">Tablets</a>
                    <a href="#">Headphones</a>
                    <a href="#">Tv & Home</a>
                    <a href="#">Smartwatch</a>
                    <a href="#">About</a>
                </div>
                
                <div class="nav-search">
                    <div class="search-container">
                        
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div class="basket">
                        <img src="basket.png"/>
                        
                    </div>
                </div>
            </nav>
        </header>
    </div> 
        </>
    )
}

export default Header;