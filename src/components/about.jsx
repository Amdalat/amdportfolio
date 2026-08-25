import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';

function About() {
    const techStack = {
        frontend: [
            "HTML",
            "CSS",
            "JavaScript",
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
            "JavaScript",
            "PHP",
            "Python",
            "SQL"
        ],

        databases: [
            "SQLite",
            "MySQL",
            "MongoDB"
        ],

        tools: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman"
        ]
    };

    const experiences = [
        {
            type: "LEADERSHIP",
            period: "2025-26",
            title: "VICE PRESIDENT",
            organization: "Crescent University, Abeokuta.",
            location: "Ogun, Nigeria",
            icon: faUser,
            description:
            "Supported departmental leadership, coordinated student initiatives, and represented students while working with staff and colleagues."
        },

        {
            type: "INTERNSHIP",
            period: "JULY-OCT 2025",
            title: "IT INTERN",
            organization: "Adron Homes & Properties Ltd.",
            location: "Lagos, Nigeria",
            icon: faLaptopCode,
            description:
            "Gained practical experience in IT operations and software development, contributing to technical tasks and supporting day-to-day digital systems."
        },

        {
            type: "INTERNSHIP",
            period: "JULY-OCT 2025",
            title: "FRONTEND INTERN",
            organization: "Qace Homes",
            location: "Lagos, Nigeria",
            icon: faCode,
            description:
            "Worked on frontend development, building and refining web interfaces while gaining practical experience with modern web technologies."
        }
    ];

    return (
        <>
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
                    <AboutItem head="DATABASES" items={techStack.databases}/>
                    <AboutItem head="TOOLS" items={techStack.tools}/>
                </div>
            </div>


            <div id="experience">
                <h2>BEYOND CODE<span className="cursor green">_</span></h2>
                <div id="experiencebody">
                    {experiences.map((x, index) => {
                        return(
                            <div className="xcard" key={index}>
                                <div className="xcardpic green"><FontAwesomeIcon icon={x.icon} /></div>
                                <div className="xcarddesc">
                                    <h5 style={{ color: 'rgb(99, 99, 99)' }}>/ {x.type} / {x.period}</h5>
                                    <h2 className="green">{x.title}</h2>
                                    <p style={{ color: 'rgb(99, 99, 99)' }}>{x.organization} | {x.location}</p>
                                    <br />
                                    <p style={{ color: 'rgb(121, 121, 121)' }}>{x.description}</p>
                                    <br />
                                    {/* <button> */}
                                        <a href="#hero" className="green">MORE <span className="hintx">→</span></a>
                                    {/* </button> */}
                                </div>
                            </div>  
                        )
                        

                    })}
                    {/* <Xcard/>
                    <Xcard/> */}
                </div>
            </div>
        </>
    )
}

function AboutItem({head, items}) {
    return (
        <div className="aboutitem">
            <h2>{head}</h2>
            <p style={{ color: "#a09f9f" }}>{items.join(" • ")}</p>
        </div>
    )
}

// function Xcard() {
//     return (
//         <div className="xcard">
//             <div className="xcardpic green"><FontAwesomeIcon icon={faUser} /></div>
//             <div className="xcarddesc">
//                 <h5 style={{ color: 'rgb(99, 99, 99)' }}>/ LEADERSHIP | 2025-26</h5>
//                 <h2 className="green">VICE PRESIDENT</h2>
//                 <p style={{ color: 'rgb(99, 99, 99)' }}>Crescent | Lagos, Nigeria</p>
//                 <br />
//                 <p style={{ color: 'rgb(121, 121, 121)' }}>lorem ipsum fsdeuf dgfhdsfohsyidse ydsjiidh yuoed yydjd hehfi hehfd ywgue yefnbud eu eehrjeygw</p>
//                 <br />
//                 {/* <button> */}
//                     <a href="/" className="green">MORE <span className="hintx">→</span></a>
//                 {/* </button> */}
//             </div>
//         </div>
//     )
// }

export default About