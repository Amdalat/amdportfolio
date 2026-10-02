import { Link, useParams } from "react-router";
import { useLayoutEffect  } from "react";

import {projects} from "../assets/projectsData";
import {ProjIntro} from "../components/intro"
import {Gdhpbox, Gdhpboxwarrow} from "../subcomp/groupedboxes"
import Slidebox from "../subcomp/slidebox"
import Navbar from "../components/navbar";

function Project() {
    const { slug } = useParams();

    useLayoutEffect (() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const projectIndex = projects.findIndex(
        project => project.slug === slug
    );
    const nextprojectIndex = projectIndex + 1;
    const prevprojectIndex = projectIndex - 1;

    const project = projects[projectIndex];

    const nextproject = projects[nextprojectIndex];
    const prevproject = projects[prevprojectIndex];

    if (projectIndex <0) {
        return <h1>FILE NOT FOUND</h1>;
    }

    return (
        <>
            <Navbar/>
            <div className="padding8">
                <ProjIntro projectIndex={projectIndex}></ProjIntro>
                <Gdhpboxwarrow boxtype="texttobox" title="HOW IT WORKS" arobj={project.process}></Gdhpboxwarrow>
                
                <div className="rowflex">
                    <Gdhpbox title="SYSTEM ARCHITECTURE" arobj={project.architecture}></Gdhpbox>
                    {project.metrics ? (
                        <Gdhpbox boxtype="nobox" title="MODEL PERFORMANCE" arobj={project.metrics}></Gdhpbox>
                    ) : (
                        <Gdhpbox title="FEATURES" arobj={project.features}></Gdhpbox>
                    )}
                </div>

                <Gdhpbox border={true} boxtype="ovalbox" title="TECH STACK" arobj={project.tech}></Gdhpbox>

                {project.screenshots?.length == 0 ? null : <Slidebox title="VISUALS" imgs={project.screenshots}></Slidebox>}

                {/* <div> */}

                <hr style={{ height: '0.5px', border: 'none', backgroundColor: '#2e2d2dd6' }} />

                <div className="btndiv">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="green"><button className="transbtn">VIEW GITHUB <span className="hintx">→</span></button></a>
                    {project.demo ? (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="green"><button className="transbtn">VIEW DEMO <span className="hintx">→</span></button></a>): null}
                </div>
{/* </div> */}
                <br /><br /><br />

                {/* <div> */}
                <hr style={{ height: '0.5px', border: 'none', background: 'none' }} />

                <div className="rowflex" style={{ borderTop:"1px solid green", padding:"1rem 0" }}>
                    {prevprojectIndex < 0 ?  <p></p> : (
                        <Link to={`/work/${prevproject.slug}`} className="green"><span className="hintx">← </span>PREV PROJECT {prevprojectIndex+1}</Link>
                    )}
                    {nextprojectIndex >= projects.length ?  <p></p> : (<Link to={`/work/${nextproject.slug}`} className="green">NEXT PROJECT {nextprojectIndex+1} <span className="hintx">→</span></Link>)}
                    
                </div>

                {/* </div> */}
            </div>
        </>
    );
}

export default Project;