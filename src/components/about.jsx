function About() {
        const techStack = {
        frontend: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Vite"
        ],

        backend: [
            "PHP",
            "Laravel",
            "Node.js",
            "Express.js",
            "FastAPI",
            "REST APIs"
        ],

        languages: [
            "PHP",
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "C++",
            "SQL"
        ],

        tools: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "SQLite"
        ]
    };
    return (
        <div id="about">
            <div id="aboutleft">
                <p className="green">$ cat about.txt</p>
                <p style={{ color: "#a09f9f" }}>I'm Amdalat... though, judging by the name on the website, you probably figured that out already. <br /><br />
                I'm a Computer Science graduate and software developer passionate about building practical, reliable web applications. I enjoy working across the stack, with a particular interest in backend development, APIs, and the systems that power great products. <br /><br />
                I enjoy solving problems, learning new technologies, and turning ideas into things that actually work. The stack I work with is right here if you're curious. <br /> <br />
                Outside of coding, you'll probably find me reading a book, watching anime, or exploring whatever has caught my interest lately.<br />
                </p>
                <p className="green">_</p>
            </div>
            <div id="aboutright">
                <AboutItem head="LANGUAGES" items={techStack.languages}/>
                <AboutItem head="BACKEND" items={techStack.backend}/>
                <AboutItem head="FRONTEND" items={techStack.frontend}/>
                <AboutItem head="TOOLS" items={techStack.tools}/>
            </div>
        </div>
    )
}

function AboutItem({head, items}) {
    return (
        <div className="aboutitem">
            <h2>{head}</h2>
            <p style={{ color: "#a09f9f" }}>{items.join(" • ")}</p>
            {/* {items.join(" • ")} */}
        </div>
    )
}

export default About