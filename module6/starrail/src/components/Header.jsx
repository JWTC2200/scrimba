import React from "react";

export default function Header(props) {
    return (
        <header>
            <nav>
                <div className="nav-title link" key="index" onClick={() => props.handleChange("index")}>
                    <img className="header-icon" src="images/icon_starrail.png"></img>
                    <h3>Honkai Star Rail</h3>
                </div>              
                <ul>
                    <li className="link" key="home" onClick={() => props.handleChange("home")}>Home</li>
                    <li className="link" key="about" onClick={() => props.handleChange("about")}>About</li>
                </ul>        
            </nav>
        </header>
    )
}