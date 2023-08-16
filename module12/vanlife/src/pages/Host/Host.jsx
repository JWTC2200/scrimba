import { Outlet, Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import "./host.css"

export default function Host() {
    return (
        <div className="hostpage-container">
            <div className="hostpage-navbar">
                <Link to="./"><Button styling="naked">Dashboard</Button></Link>
                <Link to="./income"><Button styling="naked">Income</Button></Link>
                <Link to="./reviews"><Button styling="naked">Reviews</Button></Link>
            </div>
            <Outlet />
        
        </div>
    )
}