import { Link } from "react-router-dom"
import "./home.css"
import vanlifeBg from "../../assets/images/vanlife_mountains.png"

export default function Home() {
    return(
        <div 
            className="home-container" 
            style={{
                backgroundImage: `url(${vanlifeBg})`
        }}>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans" className="home-find-van-button">Find your van</Link>
        </div>
    )
}