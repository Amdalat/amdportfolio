import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>
            <footer id="contact">
                <h3 style={{ color: '#464646' }}>LET'S BUILD SOMETHING GREAT</h3>
                <ul>
                    <li><a href="https://github.com/Amdalat/" style={{ color: '#7b7a7a', fontSize: '2rem'}}><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/amdalat-adetokunbo-71683327a" style={{ color: '#7b7a7a', fontSize: '2rem'}}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="mailto:hmayomikun@gmail.com@gmail.com" style={{ color: '#7b7a7a', fontSize: '2rem'}}><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a href="tel:+2349128925218" style={{ color: '#7b7a7a', fontSize: '2rem'}}><FontAwesomeIcon icon={faPhone} /></a></li>
                    <li><a href="/" style={{ color: '#15ed15', fontSize: '3rem', marginTop: "-60px" }}>↗</a></li>
                </ul>

            </footer>
            {/* <div>
                copyright
            </div> */}
        </>
    )
}

export default Footer