import React from "react"
import Toggle from "../Toggle"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {

    const { toggleOn} = React.useContext(MenuContext)

    return (
        toggleOn &&
            <div className="menu-dropdown">
                {children}
            </div>

    )
}