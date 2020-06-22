import React from "react";
import Modal from "./Modal";

const PortfolioModals = () => (
    <div>
        <Modal />
        <Modal 
            title = "Tasty Cake"
            imgSrc = "assets/img/portfolio/cake.png"
            modalNumber = "2"
        />
        <Modal 
            title = "Circus Tent"
            imgSrc = "assets/img/portfolio/circus.png"
            modalNumber = "3"
        />
        <Modal 
            title = "Controller"
            imgSrc = "assets/img/portfolio/game.png"
            modalNumber = "4"
        />
        <Modal 
            title = "Locked Safe"
            imgSrc = "assets/img/portfolio/safe.png"
            modalNumber = "5"
        />
        <Modal 
            title = "Submarine"
            imgSrc = "assets/img/portfolio/submarine.png"
            modalNumber = "6"
        />
    </div>
)

export default PortfolioModals;