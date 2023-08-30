import "./navbar.css"
import { NavLink, Link } from "react-router-dom"
import vanlifeLogo from "../../assets/images/vanlife_logo.png"
import { RxAvatar } from "react-icons/rx"

export default function Navbar() {

    return (
        <header className="navbar-container">
            <Link to="/">
                <img src={vanlifeLogo} className="navbar-logo"/>
            </Link>
            <div className="navbar-links">
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "isActive" : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "isActive" : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "isActive" : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="/login"
                >
                    {<RxAvatar className="fs20" />}
                </NavLink>
            </div>
        </header>
    )

}