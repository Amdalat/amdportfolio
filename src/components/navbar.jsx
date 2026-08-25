import { useState } from "react";
import cv from "../assets/amdalat_cv_pdf.pdf";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navbar">
            <a href="#home">AMDALAT.DEV</a>

            <button className="menutoggle" onClick={() => setMenuOpen(!menuOpen)} > {menuOpen ? "✕" : "☰"} </button>
            
            <ul className={menuOpen ? "open" : ""}>
                <li><a href="#work" onClick={() => setMenuOpen(false)}>WORK</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
                <li><a href={cv} target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={() => setMenuOpen(false)}>[ RESUME ]</a></li>
            </ul>
        </nav>
    );
}

export default Navbar