function Slidebox({title, imgs}) {
    return (
        <div className="info">
            <h2>{title}</h2>
            <div className="rowflexscroll">
                {imgs?.map((img, index) => (
                    <div className="ss" key={index}>
                        <img
                            src={img}
                            alt={`Project ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>  
    )
}

export default Slidebox;
