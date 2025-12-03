function Headphones(){
    return(
        <>
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
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
        <img src="headphone.webp" alt="Product 1">
        <h3>JBL Tune 720BT Over-Ear Wireless Headphones</h3>
        <p>$39.99</p>

        <a href="#" class="add-btn"
           data-name="JBL Tune 720BT Over-Ear Wireless Headphones"
           data-price="39.99"
           data-image="headphone.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 2 -->
    <div class="product_cards">
        <img src="sony_headphones.webp" alt="Product 2">
        <h3>Sony WH-CH520 On-Ear Bluetooth Headphones</h3>
        <p>$28.99</p>

        <a href="#" class="add-btn"
           data-name="Sony WH-CH520 On-Ear Bluetooth Headphones"
           data-price="28.99"
           data-image="sony_headphones.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 3 -->
    <div class="product_cards">
        <img src="beats_headphones.webp" alt="Product 3">
        <h3>Beats Studio Pro ANC Over-Ear Wireless Headphones</h3>
        <p>$99.99</p>

        <a href="#" class="add-btn"
           data-name="Beats Studio Pro ANC Over-Ear Wireless Headphones"
           data-price="99.99"
           data-image="beats_headphones.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 4 -->
    <div class="product_cards">
        <img src="airMax_headphones.webp" alt="Product 4">
        <h3>Apple AirPods Max Over-Ear Wireless Headphones-Purple</h3>
        <p>$499.99</p>

        <a href="#" class="add-btn"
           data-name="Apple AirPods Max Over-Ear Wireless Headphones-Purple"
           data-price="499.99"
           data-image="airMax_headphones.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 5 -->
    <div class="product_cards">
        <img src="airMax_headphones2.webp" alt="Product 5">
        <h3>Apple AirPods Max Over-Ear Wireless Headphones - Blue</h3>
        <p>$499.99</p>

        <a href="#" class="add-btn"
           data-name="Apple AirPods Max Over-Ear Wireless Headphones - Blue"
           data-price="499.99"
           data-image="airMax_headphones2.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 6 -->
    <div class="product_cards">
        <img src="jlab_headphones.webp" alt="Product 5">
        <h3>Jlab JBuds Lux ANC Over-Ear Wireless Headphones</h3>
        <p>$49.99</p>

        <a href="#" class="add-btn"
           data-name="Jlab JBuds Lux ANC Over-Ear Wireless Headphones"
           data-price="49.99"
           data-image="jlab_headphones.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 7 -->
    <div class="product_cards">
        <img src="marshall_headphones.webp" alt="Product 5">
        <h3>Marshall Major V On-Ear Wireless Headphones</h3>
        <p>$79.99</p>

        <a href="#" class="add-btn"
           data-name="Marshall Major V On-Ear Wireless Headphones"
           data-price="79.99"
           data-image="marshall_headphones.webp">
           Add to Basket
        </a>
    </div>

    <!-- Product 8 -->
    <div class="product_cards">
        <img src="shokz_headphones.webp" alt="Product 5">
        <h3>Shokz OpenSwim Pro Wireless Bluetooth Headphones</h3>
        <p>$135.99</p>

        <a href="#" class="add-btn"
           data-name="Shokz OpenSwim Pro Wireless Bluetooth Headphones"
           data-price="135.99"
           data-image="shokz_headphones.webp">
           Add to Basket
        </a>
    </div>

</div>
<br>
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
</html>
        </>
    )
}

export default Headphones;