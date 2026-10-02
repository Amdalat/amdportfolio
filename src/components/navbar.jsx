import { useEffect, useState } from "react";
import cv from "../assets/amdalat_cv_pdf.pdf";
import { useLocation, useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (section) => {
        if (location.pathname !== "/") {
            navigate(`/#${section}`);
        } else {
            document.getElementById(section)?.scrollIntoView({
                behavior: "smooth"
            });
        }

        setMenuOpen(false);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            setTimeout(() => {
                document.getElementById(location.hash.substring(1))?.scrollIntoView({
                    behavior: "smooth"
                });
            }, 100);
        }
    }, [location]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setMenuOpen(false);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <nav>
            <a href="/">AMDALAT.DEV</a>

            <button className="menutoggle" onClick={() => setMenuOpen(!menuOpen)} > {menuOpen ? "✕" : "☰"} </button>
            
            <ul className={menuOpen ? "open" : ""}>
                <li><a onClick={() => goToSection("work")}>WORK</a></li>
                <li><a onClick={() => goToSection("about")}>ABOUT</a></li>
                <li><a onClick={() => goToSection("contact")}>CONTACT</a></li>
                                
                {/* <li><a href="/amdportfolio/#work" onClick={() => setMenuOpen(false)}>WORK</a></li>
                <li><a href="/amdportfolio/#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
                <li><a href="/amdportfolio/#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li> */}

                {/* <Link to="/#work">WORK</Link>
                <Link to="/#about">ABOUT</Link>
                <Link to="/#contact">CONTACT</Link> */}

                <li><a href={cv} target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={() => setMenuOpen(false)}>[ RESUME ]</a></li>
            </ul>
        </nav>
    );
}

export default Navbar