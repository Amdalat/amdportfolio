function Work() {
    return (
        <div id="work">
            <section id="workhead">
                <h2>Selected Work</h2>
                <h2 className="green">01 / 03</h2>
            </section>

            <div id="workbody">
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
            </div>
            
        </div>
    )
};

function WorkItem() {
    return (
        <div className="workitem">
            <div className="workitemno green">01</div>
            <div className="workitemdesc">
                <h5 style={{ color: 'rgb(99, 99, 99)' }}>/ PROJECT</h5>
                <section>
                    <h2>COUNTERFEIT PHARMACEUTICAL DETECTION</h2>
                    <h2 style={{ fontSize: "2rem", fontWeight: "lighter", color: 'rgb(99, 99, 99)' }}>+</h2>
                </section>
                
                <section>
                    <p style={{ color: 'rgb(99, 99, 99)' }}>React . Node . FastAPI. XGBoost</p>
                    <a href="/" className="green" style={{ marginRight: '3rem' }}>VIEW CASE FILE →</a>
                </section>
                
            </div>
        </div>
    )
}

export default Work