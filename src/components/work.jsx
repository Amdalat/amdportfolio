function Work() {
    const projects = [
        {
            title: "COUNTERFEIT PHARMACEUTICAL DETECTION",
            category: "FULL-STACK / MACHINE LEARNING",
            tech: ["React", "Node.js", "FastAPI", "XGBoost"],
            github: "https://github.com/Amdalat/fyp_cppds",
            demo: "https://fyp-cppds-frontend.onrender.com/",
            description:
                "A full-stack intelligent verification system combining database verification with machine-learning classification to detect potentially counterfeit pharmaceutical products."
        },

        {
            title: "LARAVEL WEB APPLICATION",
            category: "BACKEND / FULL-STACK",
            tech: ["PHP", "Laravel"],
            github: "https://github.com/Amdalat/siliconnLaravel",
            demo: "",
            description:
                "A web application built with Laravel, demonstrating server-side application development and backend architecture."
        },

        {
            title: "NODE.JS BACKEND APPLICATION",
            category: "BACKEND",
            tech: ["Node.js", "Express.js", "REST API"],
            github: "https://github.com/Amdalat/horizonnodeass2",
            demo: "",
            description:
                "A backend application built with Node.js and Express, using structured controllers, models, middleware and API routes."
        },

        {
            title: "WEATHER APPLICATION",
            category: "FRONTEND / API",
            tech: ["React", "JavaScript", "REST API"],
            github: "https://github.com/Amdalat/weatherAppWApiReact",
            demo: "",
            description:
                "A React application that consumes a weather API to retrieve and display weather information."
        }
    ];

    return (
        <div id="work">
            <section id="workhead">
                <h2>Selected Work</h2>
                <h2 className="green">01 / { (projects.length<10)? ("0"+(projects.length)) : (projects.length) }</h2>
            </section>

            <div id="workbody">
                { projects.map((project, index) => {
                    return (
                        <div className="workitem" key={index}>
                            <div className="workitemno green">{ (index<9)? ("0"+(index+1)) : (index+1) }</div>
                            <div className="workitemdesc">
                                <h5 style={{ color: 'rgb(99, 99, 99)' }}>/ PROJECT</h5>
                                <section>
                                    <h2>{project.title}</h2>
                                    <h2 style={{ fontSize: "2rem", fontWeight: "lighter", color: 'rgb(99, 99, 99)' }}>+</h2>
                                </section>
                                <section>
                                    <p style={{ color: 'rgb(99, 99, 99)' }}>{project.tech.join(" • ")}</p>

                                    <section style={{ gap:"0.5rem" }}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="green" style={{ marginRight: '3rem' }}>VIEW CASE FILE <span className="hintx">→</span></a>
                                        {project.demo ? (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="green" style={{ marginRight: '3rem' }}>VIEW DEMO <span className="hintx">→</span></a>): null}
                                    </section>
                                </section>
                                
                            </div>
                        </div>
                    )
                })}
                
            </div>
            
        </div>
    )
};

// function WorkItem() {
//     return (
//         <div className="workitem">
//             <div className="workitemno green">01</div>
//             <div className="workitemdesc">
//                 <h5 style={{ color: 'rgb(99, 99, 99)' }}>/ PROJECT</h5>
//                 <section>
//                     <h2>COUNTERFEIT PHARMACEUTICAL DETECTION</h2>
//                     <h2 style={{ fontSize: "2rem", fontWeight: "lighter", color: 'rgb(99, 99, 99)' }}>+</h2>
//                 </section>
                
//                 <section>
//                     <p style={{ color: 'rgb(99, 99, 99)' }}>React . Node . FastAPI. XGBoost</p>
//                     <a href="/" className="green" style={{ marginRight: '3rem' }}>VIEW CASE FILE <span className="hintx">→</span></a>
//                 </section>
                
//             </div>
//         </div>
//     )
// }

export default Work