import "./navbar.css"
import { Link } from "react-router-dom"
import vanlifeLogo from "../../assets/images/vanlife_logo.png"

export default function Navbar() {

    return (
        <header className="navbar-container">
            <Link to="/">
                <img src={vanlifeLogo} className="navbar-logo"/>
            </Link>
            <div className="navbar-links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/host">Host</Link>
            </div>
        </header>
    )

}