function Smartwatch(){
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
        <img src="smartwatch.webp" alt="Product 1">
        <h3>HUAWEI Watch Fit 3 Smart Watch-Grey</h3>
        <p>$139.00</p>

        <a href="#" class="add-btn"
           data-name="HUAWEI Watch Fit 3 Smart Watch"
           data-price="139.00"
           data-image="smartwatch.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 2 -->
    <div class="product_cards">
        <img src="reflex_watch.webp" alt="Product 2">
        <h3>Reflex Active Black Smart Watch-Black</h3>
        <p>$35.99</p>

        <a href="#" class="add-btn"
           data-name="Reflex Active Black Smart Watch"
           data-price="35.99"
           data-image="reflex_watch.webp">
           Add to Basket
           </a>
    </div>

    <!-- Product 3 -->
    <div class="product_cards">
        <img src="apple_watch.webp" alt="Product 3">
        <h3>Apple Watch Ultra 3 Black Ocean Band</h3>
        <p>$719.99</p>

        <a href="#" class="add-btn"
           data-name="Apple Watch Ultra 3 Black Ocean Band"
           data-price="719.99"
           data-image="apple_watch.webp">
           Add to Basket
           </a>
    </div>

    <!-- Product 4 -->
    <div class="product_cards">
        <img src="samsung_watch.webp" alt="Product 4">
        <h3>Samsung Galaxy Watch7 40mm Smart Watch</h3>
        <p>$249.99</p>

        <a href="#" class="add-btn"
           data-name="Samsung Galaxy Watch7 40mm Smart Watch"
           data-price="249.99"
           data-image="samsung_watch.webp">
           Add to Basket
           </a>
    </div>

    <!-- Product 5 -->
    <div class="product_cards">
        <img src="garmin_watch.webp" alt="Product 5">
        <h3>Garmin Forerunner 165 GPS Running Smart Watch</h3>
        <p>$169.99</p>

        <a href="#" class="add-btn"
           data-name="Garmin Forerunner 165 GPS Running Smart Watch"
           data-price="169.99"
           data-image="garmin_watch.webp">
           Add to Basket
           </a>
    </div>

    <!-- Product 6 -->
    <div class="product_cards">
        <img src="fitbit_watch.webp" alt="Product 5">
        <h3>Fitbit Versa 4 Smart Watch - Waterfall Blue</h3>
        <p>$129.99</p>

        <a href="#" class="add-btn"
           data-name="Fitbit Versa 4 Smart Watch - Waterfall Blue"
           data-price="129.99"
           data-image="fitbit_watch.webp">
           Add to Basket
           </a>
    </div>

    <!-- Product 7 -->
    <div class="product_cards">
        <img src="samsung_watch2.webp" alt="Product 5">
        <h3>Samsung Galaxy Watch8 40mm Smart Watch</h3>
        <p>$249.99</p>

        <a href="#" class="add-btn"
           data-name="Samsung Galaxy Watch8 40mm Smart Watch"
           data-price="249.99"
           data-image="samsung_watch2.webp">
           Add to Basket
           </a>
    </div>

    <!-- Product 8 -->
    <div class="product_cards">
        <img src="garmin_watch2.webp" alt="Product 5">
        <h3>Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black</h3>
        <p>$599.99</p>

        <a href="#" class="add-btn"
           data-name="Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black"
           data-price="599.99"
           data-image="garmin_watch2.webp">
           Add to Basket
           </a>
    </div>

</div>
<br>

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

export default Smartwatch;