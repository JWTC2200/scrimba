import { Link, useOutletContext } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"


export default function Dashboard() {

    const hostVans = useOutletContext()
    
    const vanElements = hostVans.map(van => {
        return (
            <Link 
                to={`vans/${van.id}`} 
                key={van.id}
            >
                <div className="host-van-listing">
                    <img className="host-van-listing-image" src={van.imageUrl}/>
                    <div className="host-van-listing-detail">
                        <div className="host-van-listing-name">{van.name}</div>
                        <div className="host-van-listing-price">${van.price}/day</div>
                    </div>
                </div>
            </Link>            
        )
    })

    return(
        <div className="host-dash-container">
            <section className="host-dash-welcome">
                <h2 className="mp0 fs32 bold">Welcome!</h2>
                <section className="host-dash-welcome-income">
                    <p>Income last <span className="underline bold">30 days</span></p>
                    <Link to="income">Details</Link>
                </section>  
                <div className="host-dash-welcome-earned fs32">$2,260</div>       
            </section>
            <section className="host-dash-review">
                <div>Review score &#11088;<span className="bold"> 5.0</span>/5</div>
                <div>Details</div>
            </section>
            <section className="host-dash-vans">
                <section className="host-dash-vans-nav">
                    <h3>Your listed vans</h3>
                    <Link to="vans">View all</Link>
                </section>
                {vanElements}
            </section>

        </div>
    )
}