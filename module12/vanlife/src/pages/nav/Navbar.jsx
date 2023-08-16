import "./navbar.css"
import { Link } from "react-router-dom"
import vanlifeLogo from "../../assets/images/vanlife_logo.png"

export default function Navbar() {

    const linkArray = ["about", "vans"]

    const linkElements = linkArray.map(link => {
        return (
            <Link key={link} to={`/${link}`}>{link}</Link>
        )
    })

    return (
        <header className="navbar-container">
            <Link to="/">
                <img src={vanlifeLogo} className="navbar-logo"/>
            </Link>
            <div className="navbar-links">
                {linkElements}
            </div>
        </header>
    )

}