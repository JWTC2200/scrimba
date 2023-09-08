import incomegraph from "../../assets/images/income-graph.png"

export default function Income() {
    return (
        <div className="host-income-container">
            <h2 className="bold mp0 fs24">Income</h2>
            <p> Last <span className="underline bold">30 days</span></p>
            <h3 className="bold mp0 fs32">$2,260</h3>
            <img className="host-graph" src={incomegraph}/>
            <div>
                <div className="flex-between">
                    <h4 className="bold mp0">Your transactions (3)</h4>
                    <p>Last <span className="fs14 underline bold">30 days</span></p>
                </div>
                <div className="host-income-container">
                    <div className="host-income-transaction flex-between">
                        <div className="mp0 fs24 bold">$720</div>
                        <div className="mp0 fs14">1/12/22</div>
                    </div>
                    <div className="host-income-transaction flex-between">
                        <div className="mp0 fs24 bold">$560</div>
                        <div className="mp0 fs14">10/11/22</div>
                    </div>
                    <div className="host-income-transaction flex-between">
                        <div className="mp0 fs24 bold">$980</div>
                        <div className="mp0 fs14">23/11/22</div>
                    </div>
                </div>
            </div>
        </div>

    )
}