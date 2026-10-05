import {projects, experiences} from "../assets/projectsData"
import { Gdhpbox } from "../subcomp/groupedboxes"

function ProjIntro({projectIndex}) {
    return (
        <div id="intro">
            {projects.filter((project, index) => index==projectIndex).map((project) => {
                return (
                    <div key={projectIndex+1}>
                        <div>
                            <h2 className="green">{projectIndex+1}/ PROJECT</h2>
                            <h1 style={{ marginBottom:"0" }}>{project.title}</h1>
                            <Gdhpbox border={true} boxtype="ovalbox" arobj={project.category}></Gdhpbox>
                        </div>
                        <br />
                        <div id="introbottom">
                            <div className="introimg">
                                {project.introImage && (
                                <img
                                    src={project.introImage}
                                />   
                                )}                                 
                            </div>

                            <div id="introbottomdesc">
                                {project.overview && (
                                    <>
                                        <h3>{project.overview.title}</h3>
                                        <p>{project.overview.text}</p>
                                        <h3>THE SOLUTION</h3>
                                    </>
                                )}
                                {project.description}
                            </div>

                        </div>
                    </div>
                )
            })}


        </div>

    )
}

function ExpIntro({experienceIndex}) {
    return (
        <div id="intro" style={{ paddingBottom:"1rem" }}>
            {experiences.filter((experience, index) => index==experienceIndex).map((experience) => {
                return (
                    <div key={experienceIndex+1}>
                        <div>
                            <h2 className="green">{experienceIndex+1}/ EXPERIENCE/ {experience.category}</h2>
                            <h1 style={{ marginBottom:"0" }}>{experience.title}</h1>
                            <h3>{experience.department ? `${experience.department} • ` : null}{experience.organization} </h3>
                            <p style={{ color: 'rgb(99, 99, 99)' }}>{experience.location ? `${experience.location} • ` : null}{experience.period} </p>
                            
                        </div>
                        <br />
                    </div>
                )
            })}
        </div>

    )
}

export {ProjIntro, ExpIntro};