function Tablets(){
    return(
        <>
            <body>
    <div class="nav-container">
        <header>
            <nav>
                <div class="logo">
                    
                    <h1>TechSphere</h1>
                </div>
                
                <div class="nav-links">
                    

                    <a href="Phone.html">Phone</a>
                    <a href="Tablets.html">Tablets</a>
                    <a href="Headphones.html">Headphones</a>
                    <a href="Tv&Home.html">Tv & Home</a>
                    <a href="Smartwatch.html">Smartwatch</a>
                    <a href="About.html">About</a>
                </div>
                
                <div class="nav-search">
                <div class="search-container">
                    <input type="text" placeholder="Search...">
                </div>

                <!-- BASKET ICON ONLY -->
                <div class="basket">
                    <a href="basket.html">
                        <img src="basket.png" alt="Basket">
                    </a>
                </div>
            </div>
        </nav>
    </header>
</div>
<div class="product_container">

    <!-- Product 1 -->
    <div class="product_cards">
        <img src="tablet.webp" alt="Product 1">
        <h3>Samsung Galaxy Tab S11 Ultra 14.6in 256GB Wi-Fi Tablet</h3>
        <p>£999.00</p>

        <a href="#" class="add-btn"
           data-name="Samsung Galaxy Tab S11 Ultra 14.6in 256GB Wi-Fi Tablet"
           data-price="999.00"
           data-image="tablet.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 2 -->
    <div class="product_cards">
        <img src="honour.webp" alt="Product 2">
        <h3>HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet</h3>
        <p>$109.99</p>

        <a href="#" class="add-btn"
           data-name="HONOR Pad X8a 11 Inch 128GB Wi-Fi Tablet"
           data-price="109.00"
           data-image="honour.webp">
           Add to Basket
        </a>

        
    </div>

    <!-- Product 3 -->
    <div class="product_cards">
        <img src="lenevo.webp" alt="Product 3">
        <h3>Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet</h3>
        <p>$149.99</p>

        <a href="#" class="add-btn"
           data-name="Lenovo Idea Tab 11 Inch 128GB Wi-Fi Tablet"
           data-price="149.99"
           data-image="lenevo.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 4 -->
    <div class="product_cards">
        <img src="tablet_A9.webp" alt="Product 4">
        <h3>Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet</h3>
        <p>$209.99</p>

        <a href="#" class="add-btn"
           data-name="Samsung Galaxy Tab A9+ 11in 64GB Wi-Fi Tablet"
           data-price="209.99"
           data-image="tablet_A9.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 5 -->
    <div class="product_cards">
        <img src="ipad.webp" alt="Product 5">
        <h3>Apple iPad Pro 2024 11 Inch Wi-Fi 256GB</h3>
        <p>$899.99</p>

        <a href="#" class="add-btn"
           data-name="Apple iPad Pro 2024 11 Inch Wi-Fi 256GB"
           data-price="899.99"
           data-image="ipad.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 6 -->
    <div class="product_cards">
        <img src="ipad_air.webp" alt="Product 5">
        <h3>Apple iPad Air 2025 13 Inch Wi-Fi 256GB</h3>
        <p>$799.99</p>

        <a href="#" class="add-btn"
           data-name="Apple iPad Air 2025 13 Inch Wi-Fi 256GB"
           data-price="799.99"
           data-image="ipad_air.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 7 -->
    <div class="product_cards">
        <img src="amazon_fire.webp" alt="Product 5">
        <h3>Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet</h3>
        <p>$129.99</p>

        <a href="#" class="add-btn"
           data-name="Amazon Fire Max 11 Inch 64GB Wi-Fi Tablet"
           data-price="129.99"
           data-image="amazon_fire.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 8 -->
    <div class="product_cards">
        <img src="amzon_fire2.webp" alt="Product 5">
        <h3>Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet</h3>
        <p>$89.99</p>

        <a href="#" class="add-btn"
           data-name="Amazon Fire HD 10 2024 10.1 Inch 32GB Wi-Fi Tablet"
           data-price="89.99"
           data-image="amzon_fire2.webp">
           Add to Basket
        </a>
    </div>
        </div>


        <!-- JavaScript for Add to Basket -->
<script>
document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        let product = {
            name: this.dataset.name,
            price: parseFloat(this.dataset.price),
            image: this.dataset.image,
            quantity: 1
        };

        let basket = JSON.parse(localStorage.getItem("basket")) || [];

        let existing = basket.find(item => item.name === product.name);

        if (existing) {
            existing.quantity += 1;
        } else {
            basket.push(product);
        }

        localStorage.setItem("basket", JSON.stringify(basket));

        window.location.href = "basket.html";
    });
});
</script>
</body>
        </>
    )
}

export default Tablets;