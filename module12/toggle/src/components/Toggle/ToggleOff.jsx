import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOff({children}) {
    const { toggleState } = React.useContext(ToggleContext)

    return !toggleState ? children : null
}