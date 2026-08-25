import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>
            <footer>
                <div id="contact">
                    <h3 style={{ color: '#464646' }}>LET'S BUILD SOMETHING GREAT</h3>
                    <ul>
                        <li><a href="https://github.com/Amdalat/" className='footericons'><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="https://www.linkedin.com/in/amdalat-adetokunbo-71683327a" className="footericons"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="mailto:hmayomikun@gmail.com@gmail.com" className="footericons"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                        {/* <li><a href="tel:+2349128925218" className="footericons"><FontAwesomeIcon icon={faPhone} /></a></li> */}
                        {/* <li><a href="#hero" style={{ color: '#15ed15' ,fontSize: '3rem', marginTop: "-60px" }}>↗</a></li> */}
                    </ul>
                </div>
                
                <hr style={{ width:"90%", height: '0.5px', border: 'none', backgroundColor: '#2e2d2dd6' }} />

                <div id="credits">
                    <a href="#navbar" >AMDALAT.DEV</a>
                    <p style={{  color:"#737272", fontSize:"0.8rem" }}>&copy; 2026 AMDALAT</p>
                    <p style={{  color:"#737272", fontSize:"0.8rem" }}>💚 BUILT WITH REACT</p>
                    {/* <a href="#hero">↗</a> */}
                    <a href="#navbar" style={{ color: '#15ed15' ,fontSize: '2rem', marginTop: "-10px" }}>↗</a>
                </div>
            </footer>
        </>
    )
}

export default Footer