import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
        <a href="#home">AMDALAT.DEV</a>

        <button className="menutoggle" onClick={() => setMenuOpen(!menuOpen)} > {menuOpen ? "✕" : "☰"} </button>
        
        <ul className={menuOpen ? "open" : ""}>
            <li><a href="#work" onClick={() => setMenuOpen(false)}>WORK</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
        </ul>
        </nav>
    );
}

export default Navbar