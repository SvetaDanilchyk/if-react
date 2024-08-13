import React from "react";

import "./Footer.css";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
            <svg className="footer__logo">
                <use href="./src/img/icons/logo-vector.svg#logo-footer" />
            </svg>
    
            <div className="contacts contacts-width">               
                <div>
                <div className="contacts__title" href="#">About</div>
                <a className="contacts__descr" href="#">How Triphouse works</a>
                <a className="contacts__descr" href="#">Careers</a>
                <a className="contacts__descr" href="#">Privacy</a>
                <a className="contacts__descr" href="#">Terms</a>
                </div>
                <div>
                <div className="contacts__title" href="#">Property types</div>
                <a className="contacts__descr" href="#">Guest houses</a>
                <a className="contacts__descr" href="#">Hotels</a>
                <a className="contacts__descr" href="#">Apartments</a>
                <a className="contacts__descr" href="#">Villas</a>
                <a className="contacts__descr" href="#">Holiday homes</a>
                <a className="contacts__descr" href="#">Hostels</a>
                </div>
                <div>
                <div className="contacts__title" href="#">Support</div>
                <a className="contacts__descr" href="#">Contact Customer Service</a>
                <a className="contacts__descr" href="#">FAQ</a>
                </div>
            </div>
            <strong className="footer__copyright col-xs-3">
                &copy; 2020 Triphouse, Inc. All rights reserved
            </strong>
            </div>
        </footer>
    );
};