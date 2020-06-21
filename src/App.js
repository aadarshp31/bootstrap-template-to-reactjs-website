import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";

const App = () => {
	return (
		<div>
			<Navbar />
            <HeroSection />
            <PortfolioSection />
		</div>
	);
};

export default App;
