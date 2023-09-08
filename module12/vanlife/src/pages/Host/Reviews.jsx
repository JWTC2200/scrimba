import reviewgraph from "../../assets/images/reviews-graph.png"

export default function Reviews() {
    return (
        <div className="host-reviews-container">
            <h2 className="bold mp0 fs24">Your reviews  <span className="fs16 fw500">last <span className="underline bold">30 days</span></span></h2>
            <img className="host-graph mt4" src={reviewgraph}/>
        </div>
    )
}