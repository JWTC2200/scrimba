import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOn({children}) {
    const { toggleState } = React.useContext(ToggleContext)

    return (
        toggleState ? 
            children :
            null
    )
}