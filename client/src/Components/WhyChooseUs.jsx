import '../Styles/WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>

      <div className="why-cards">

        <div className="why-card">
          <div className="why-icon">🚚</div>
          <h3>Free Delivery</h3>
          <p>Available on all orders over £50.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">📞</div>
          <h3>24/7 Support</h3>
          <p>Our customer service team is always ready to help.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">🔐</div>
          <h3>Secure Payment</h3>
          <p>All transactions are fully protected.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">🥈</div>
          <h3>2 Year Warranty</h3>
          <p>Extended coverage on all electronic devices.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
