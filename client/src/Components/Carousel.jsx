import '../Styles/Carousel.css';

function Carousel(){
    return(
        
            <div className="slider-container">
                <div class="slide">
                    <img src="17pro.png" alt="Slide 1"/>
                </div>
                <div class="slide">
                    <img src="17.png" alt="Slide 2"/>
                </div>
                <div class="slide">
                    <img src="slide3.jpg" alt="Slide 3"/>
                </div>



                <script>
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");


  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }


  slides[slideIndex - 1].style.display = "block";


  setTimeout(showSlides, 3000);
}
</script>
        </>
    )
}

export default Carousel;