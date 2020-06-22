import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";
import ScrolltotopBtn from "./ScrolltotopBtn";
import PortfolioModals from "./PortfolioModals";

const App = () => {
	return (
		<div>
			<Navbar />
            <HeroSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <CopyrightSection />
            <ScrolltotopBtn />
            <PortfolioModals />
		</div>
	);
};

export default App;
