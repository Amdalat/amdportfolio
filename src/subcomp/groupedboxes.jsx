import React from "react";
import { Dhpbox, Nobox, Ovalbox, Textobox} from "./boxes";

function Gdhpbox({boxtype, border=false, title, arobj}) {
    return (
        <div className="info" style={border ? { border: `none`, paddingLeft: "0" } : undefined}>
            {title && <h2>{title}</h2>}
            <div className={ boxtype != "ovalbox" ? "rowflex" : "rowflex gapred" }>
                {arobj.map((item, index) => (
                    boxtype === "texttobox" ? (
                        <Textobox key={index} index={index} img={item.img} title={item.title} text={item.text}></Textobox>
                    ) : boxtype === "nobox" ? (
                        <Nobox key={index} title={item.title} text={item.text}></Nobox>
                    ): boxtype === "ovalbox" ? (
                        <Ovalbox key={index} text={item}></Ovalbox>
                    ) : (
                        <Dhpbox key={index} img={item.img} title={item.title} text={item.text}></Dhpbox>
                    ))
                )}
            </div>
        </div>  
    )
};

function Gdhpboxwarrow({boxtype, title, arobj}) {
    return (
        <div className="info">
            <h2>{title}</h2>
            <div className="rowflex">
                {arobj.map((item, index) => (
                    <React.Fragment key={index}>
                        {boxtype === "texttobox" ? (
                            <Textobox key={index} index={index} img={item.img} title={item.title} text={item.text}></Textobox>
                        ) : (
                            <Dhpbox key={index} img={item.img} title={item.title} text={item.text}></Dhpbox>
                        )}
                        {index < arobj.length - 1 && (
                            <div className="arrow">→</div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>  
    )
}


export { Gdhpbox, Gdhpboxwarrow };