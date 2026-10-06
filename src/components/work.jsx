import { Link } from "react-router"
import {projects} from "../assets/projectsData"

function Work() {
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
                            <div className="workitemno">{ (index<9)? ("0"+(index+1)) : (index+1) }</div>
                            <div className="workitemdesc">
                                <h5>/ PROJECT</h5>
                                <section>
                                    <h2>{project.title}</h2>
                                    <h2 style={{ fontSize: "2rem", fontWeight: "lighter", color: 'rgb(99, 99, 99)' }}>+</h2>
                                </section>
                                <section>
                                    <p>{project.tech.join(" • ")}</p>

                                    <section style={{ gap:"2rem", marginRight: '3rem' }}>
                                        <Link to={`/work/${project.slug}`} className="link">VIEW CASE FILE <span className="hintx">→</span></Link>
                                        {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="green">VIEW CASE FILE <span className="hintx">→</span></a> */}
                                        {project.demo ? (<a href={project.demo} target="_blank" rel="noopener noreferrer">VIEW DEMO <span className="hintx">→</span></a>): null}
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

export default Work