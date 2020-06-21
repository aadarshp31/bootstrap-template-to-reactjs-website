import React from "react";
import Card from "./Card";

const PortfolioSection = () => {
    return(
        <section className="page-section portfolio" id="portfolio">
        <div className="container">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div className="row">
                <Card />
                <Card imgSrc="assets/img/portfolio/cake.png" />
                <Card imgSrc="assets/img/portfolio/circus.png" />
                <Card imgSrc="assets/img/portfolio/game.png" />
                <Card imgSrc="assets/img/portfolio/safe.png" />
                <Card imgSrc="assets/img/portfolio/submarine.png" />
                <Card imgSrc="assets/img/portfolio/safe.png" />
            </div>
        </div>
    </section>
    );
}

export default PortfolioSection;