import React from "react"
import useEffectOnUpdate from "../../Hooks/useEffectOnUpdate"
import useToggle from "../../Hooks/useToggle"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle = ()=>{} }) {
    const [ toggleOn, toggle] = useToggle()

    useEffectOnUpdate(onToggle, [toggleState])

    return (
        <ToggleContext.Provider value={{toggleState, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }