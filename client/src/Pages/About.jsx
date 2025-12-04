import React from "react";
import "../styles/About.css";

function About(){
    return (
        <div className="about-page">
            <header className="about-hero">
                <div className="about-hero-inner">
                    <h1 className="about-title">TechSphere</h1>
                    <p className="about-tagline">Connecting you to the future of tech thoughtfully curated devices, honest advice, and standout service.</p>
                    <div className="about-hero-actions">
                        <a className="btn primary" href="/Contact">Contact Us</a>
                        <a className="btn ghost" href="/Phone">Shop Phones</a>
                    </div>
                </div>
            </header>

            <main className="about-content">
                <section className="about-section about-mission">
                    <h2>Our Mission</h2>
                    <p>At TechSphere we make it simple to find the right technology for your needs. We combine expert curation, clear information, and exceptional post-purchase support so you can buy with confidence.</p>
                </section>

                <section className="about-section about-values">
                    <h2>What We Value</h2>
                    <div className="values-grid">
                        <article className="value-card">
                            <h3>Quality</h3>
                            <p>We select tried and true products from trusted brands, prioritizing performance and reliability.</p>
                        </article>
                        <article className="value-card">
                            <h3>Transparency</h3>
                            <p>Honest reviews, clear specs, and real comparisons help you make the best choice.</p>
                        </article>
                        <article className="value-card">
                            <h3>Support</h3>
                            <p>From purchase to setup, our team is here to answer questions and solve problems.</p>
                        </article>
                    </div>
                </section>

                

                <section className="about-section about-contact-cta">
                    <h2>Ready to get started?</h2>
                    <p>If you have questions or need a recommendation, we’d love to help. Reach out anytime.</p>
                    <a className="btn primary large" href="/Contact">Get In Touch</a>
                </section>
            </main>
        </div>
    )
}


export default About;
