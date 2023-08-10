import React from "react"

export const ToggleContext = React.createContext()

export default function Toggle({children}) {
    const [toggleState, setToggleState] = React.useState(false)

    function toggle() {
        setToggleState(prevToggleState => !prevToggleState)
    }

    return (
        <ToggleContext.Provider value={{toggleState, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}