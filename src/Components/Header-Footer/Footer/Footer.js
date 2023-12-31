import React from "react" 
import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer () {



    return(
        <div className="footer">
            <Link to="/partenaires"><button className="partenairesButton">Partenaires<img src="/images/icons/arrow-right.svg"></img></button></Link>
            <div className="reseauxSociaux">
                <h3 className="followUs">Nos réseaux sociaux</h3>
                <div className="footerLogos">
                    <img src="/images/icons/square-facebook-choco-pap.svg" alt="Facebook"></img>
                    <img src="/images/icons/instagram-choco-pap.svg" alt="Instagram"></img>
                    <img src="/images/icons/square-twitter-choco-pap.svg" alt="Twitter"></img>
                </div>
            </div>
            
        </div>
    );
}