function Hero() {
    return (
        <div id="hero">
            <div id="heroleft">
                <h3>// building reliable systems <br />// solving practical problems</h3>

                {/* <h1 className="distort-text">
                {"AMDALAT".split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
                </h1> */}
                <h1>AMDALAT<span className="cursor">_</span></h1>
                <h2 className="green">SOFTWARE DEVELOPER</h2>
                <h3>Frontend • Backend • Full-Stack</h3>

                <br /><br />
                <hr style={{ height: '0.5px', border: 'none', backgroundColor: '#2e2d2dd6' }} />
                <h3 style={{ margin: '2.5rem 1rem', fontSize: '1rem' }}><span>•</span>  AVAILABLE FOR OPPORTUNITIES</h3>

            </div>

            <div id="heroright">
                <h5 className="green">$ whoami</h5>
                <p>Adetokunbo Amdalat <br /> Software Developer</p>

                <h5 className="green">$ focus</h5>
                <p>Frontend <br /> Backend <br /> Full-Stack</p>
                <h5 className="green">$ location</h5>
                <p>Nigeria</p>
                <h5 className="green">$ status</h5>
                <p>Available<span className="blockcursor">.</span></p>
            </div>
        </div>
    )
}

export default Hero