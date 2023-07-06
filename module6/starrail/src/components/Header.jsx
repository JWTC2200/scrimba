import React from "react";

export default function Header() {
    return (
        <header>
            <nav>
                <div class="nav-title">
                    <img class="header-icon" src="./src/images/icon_starrail.png"></img>
                    <h1 class="main-title">Honkai Star Rail</h1>
                </div>              
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>        
            </nav>
        </header>
    )
}