import React from "react"
import { MenuContext } from "./Menu"

export default function MenuItem({ children }) {
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}