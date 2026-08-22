function About() {
    return (
        <div id="about">
            <div id="aboutleft">
                <p className="green">$ cat about.txt</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis iusto quis, quasi molestias possimus quisquam quo voluptate debitis beatae iste vel veniam delectus ipsa nostrum tempora? Voluptas, veniam ut!</p>
                <p className="green">_</p>
            </div>
            <div id="aboutright">
                <AboutItem/>
                <AboutItem/>
                <AboutItem/>
                <AboutItem/>
            </div>
        </div>
    )
}

function AboutItem() {
    return (
        <div className="aboutitem">
            <h2>Languages</h2>
            <p>React • Next.js • Tailwind • HTML • CSS</p>
        </div>
    )
}

export default About