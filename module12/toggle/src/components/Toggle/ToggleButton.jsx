import { ToggleContext } from "./Toggle";
import React from "react";

export default function ToggleButton({children}) {

    const { toggle } = React.useContext(ToggleContext) 

    return (
        <div onClick={toggle}>
            {children}
        </div>
    )

}