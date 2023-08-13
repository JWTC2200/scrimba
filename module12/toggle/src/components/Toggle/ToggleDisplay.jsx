import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleDisplay({ children }) {
    const { toggleState } = React.useContext(ToggleContext)

    return children(toggleState)
}