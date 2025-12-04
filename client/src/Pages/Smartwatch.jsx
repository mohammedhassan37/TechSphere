import { Link } from "react-router-dom";
import smartwatch from "../assets/smartwatch.webp"
import reflex from "../assets/reflex.webp"
import apple_watch from "../assets/apple_watch.webp"
import reflex_watch  from "../assets/reflex_watch.webp"
import samsung_watch from "../assets/samsung_watch.webp"
import garmin_watch from "../assets/garmin_watch.webp"
import fitbit_watch from "../assets/fitbit_watch.webp"
import  samsung_watch2 from "../assets/samsung_watch2.webp"
import garmin_watch2 from "../assets/garmin_watch2.webp"

function Smartwatch(){
    return(
        <>
    
<div className="product_container">

   
    <div className="product_cards">
        <img src={smartwatch} alt="Product 1"/>
        <h3>HUAWEI Watch Fit 3 Smart Watch-Grey</h3>
        <p>$139.00</p>

        <Link href="#" class="add-btn"
           data-name="HUAWEI Watch Fit 3 Smart Watch"
           data-price="139.00"
           data-image={smartwatch}>
           Add to Basket
        </Link>
    </div>

    <div className="product_cards">
        <img src={reflex} alt="Product 2"/>
        <h3>Reflex Active Black Smart Watch-Black</h3>
        <p>$35.99</p>

        <Link href="#" className="add-btn"
           data-name="Reflex Active Black Smart Watch"
           data-price="35.99"
           data-image={reflex_watch}>
           Add to Basket
           </Link>
    </div>

    
    <div className="product_cards">
        <img src={apple_watch} alt="Product 3"/>
        <h3>Apple Watch Ultra 3 Black Ocean Band</h3>
        <p>$719.99</p>

        <Link href="#" className="add-btn"
           data-name="Apple Watch Ultra 3 Black Ocean Band"
           data-price="719.99"
           data-image={apple_watch}>
           Add to Basket
           </Link>
    </div>

    
    <div className="product_cards">
        <img src={samsung_watch} alt="Product 4"/>
        <h3>Samsung Galaxy Watch7 40mm Smart Watch</h3>
        <p>$249.99</p>

        <Link href="#" className="add-btn"
           data-name="Samsung Galaxy Watch7 40mm Smart Watch"
           data-price="249.99"
           data-image={samsung_watch}>
           Add to Basket
           </Link>
    </div>

   
    <div className="product_cards">
        <img src={garmin_watch} alt="Product 5"/>
        <h3>Garmin Forerunner 165 GPS Running Smart Watch</h3>
        <p>$169.99</p>

        <Link href="#" className="add-btn"
           data-name="Garmin Forerunner 165 GPS Running Smart Watch"
           data-price="169.99"
           data-image={garmin_watch}>
           Add to Basket
           </Link>
    </div>

    
    <div className="product_cards">
        <img src={fitbit_watch} alt="Product 5"/>
        <h3>Fitbit Versa 4 Smart Watch - Waterfall Blue</h3>
        <p>$129.99</p>

        <Link href="#" className="add-btn"
           data-name="Fitbit Versa 4 Smart Watch - Waterfall Blue"
           data-price="129.99"
           data-image={fitbit_watch}>
           Add to Basket
           </Link>
    </div>

    
    <div className="product_cards">
        <img src={samsung_watch2} alt="Product 5"/>
        <h3>Samsung Galaxy Watch8 40mm Smart Watch</h3>
        <p>$249.99</p>

        <Link href="#" className="add-btn"
           data-name="Samsung Galaxy Watch8 40mm Smart Watch"
           data-price="249.99"
           data-image={samsung_watch2}>
           Add to Basket
           </Link>
    </div>

    
    <div className="product_cards">
        <img src={garmin_watch2} alt="Product 5"/>
        <h3>Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black</h3>
        <p>$599.99</p>

        <Link href="#" className="add-btn"
           data-name="Garmin Fenix 8 47mm Smart Watch - Glass Grey & Black"
           data-price="599.99"
           data-image={garmin_watch2}>
           Add to Basket
           </Link>
    </div>

</div>
        </>
    )
}

export default Smartwatch;