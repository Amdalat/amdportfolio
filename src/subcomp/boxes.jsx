import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dhpbox({img=null, title, text, extradiv=null}) {
    return (
        <div className="dhpbox" style={ img ? null : { textAlign: "center" } }>
            {img ? (<div className="dhpimg">{img?? <FontAwesomeIcon icon={faLinkedin} />}</div>) : null}
            
            <h3>{title}</h3>
            <p>{text}</p>
            {extradiv}
        </div>
    )
}

function Textobox({img=null, index=null, title, text}) {
    return (
        <div className="textobox">
            <div className="squareimg">{img?? index+1}</div>
            {title ? (
                <>
                    <h3>{title}</h3>
                    <p>({text})</p>
                </>
            ): (
                <h4 style={{ fontWeight:"lighter" }}>{text}</h4>
            )}
            
        </div>
    )
}

function Nobox({title, text}) {
    return (
        <div className="textobox nobox">
            <p className='green'>{text}</p>
            <h3>{title}</h3>
        </div>
    )
}

function Ovalbox({text}) {
    return (
        <div className="projectstack" key={text}>{text}</div>
    )
}

export { Dhpbox, Textobox, Nobox, Ovalbox };