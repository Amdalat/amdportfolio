import { Link, useParams } from "react-router";
import { useLayoutEffect  } from "react";

import {experiences} from "../assets/projectsData";
import {ExpIntro} from "../components/intro"
// import {Gdhpbox, Gdhpboxwarrow} from "../subcomp/groupedboxes"
// import Slidebox from "../subcomp/slidebox"
import Navbar from "../components/navbar";
import { Gdhpbox, Gdhpboxwarrow } from "../subcomp/groupedboxes";
import { Dhpbox } from "../subcomp/boxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { faUserFriends } from "@fortawesome/free-solid-svg-icons/faUserFriends";
import { faLightbulb, faRocket } from "@fortawesome/free-solid-svg-icons";

function Experience() {
    const { slug } = useParams();

    useLayoutEffect (() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const experienceIndex = experiences.findIndex(
        experience => experience.slug === slug
    );
    
    const nextexperienceIndex = experienceIndex + 1;
    const prevexperienceIndex = experienceIndex - 1;

    const nextexperience = experiences[nextexperienceIndex];
    const prevexperience = experiences[prevexperienceIndex];
    const experience = experiences[experienceIndex]

    if (experienceIndex <0) {
        return <h1>FILE NOT FOUND</h1>;
    }

    return (
        <>
            <Navbar/>
            <div className="padding8">
                <ExpIntro experienceIndex={experienceIndex}></ExpIntro>

                <hr style={{ height: '0.5px', border: 'none', backgroundColor: '#2e2d2dd6' }} />

                {experience.details.responsibilities && (
                    <Gdhpbox border={true} title="WHAT I DID" arobj={experience.details.responsibilities}></Gdhpbox>
                )}
                
                {experience.details.activities ? (
                    <Gdhpbox boxtype="texttobox" title="ACTIVITIES" arobj={experience.details.activities}></Gdhpbox>
                ) : <Gdhpboxwarrow boxtype="texttobox" title="WORKFLOW" arobj={experience.details.workflow}></Gdhpboxwarrow>}

                <div className="rowflex">
                    <Dhpbox title="THE IMPACT" text={experience.details.impact} extradiv={
                        <>
                            <p className="green icon3"><FontAwesomeIcon icon={faRocket}/>  </p>
                        </>
                    }></Dhpbox>

                    <Dhpbox title="THE TAKEAWAY" text={experience.details.takeaway} extradiv={
                        <>
                            <p className="green icon3"><FontAwesomeIcon icon={faLightbulb}/></p>
                        </>
                    }></Dhpbox>
                </div>

                <hr style={{ height: '0.5px', border: 'none', backgroundColor: '#2e2d2dd6' }} />

                <div className="rowflex" style={{ borderTop:"1px solid green", padding:"1rem 0" }}>
                    {prevexperienceIndex < 0 ?  <p></p> : (
                        <Link to={`/experience/${prevexperience.slug}`} className="green"><span className="hintx">← </span>PREV EXPERIENCE {prevexperienceIndex+1}</Link>
                    )}

                    {nextexperienceIndex >= experiences.length ?  <p></p> : (<Link to={`/experience/${nextexperience.slug}`} className="green">NEXT EXPERIENCE {nextexperienceIndex+1} <span className="hintx">→</span></Link>)}
                </div>
            </div>
        </>
    );
}

export default Experience;