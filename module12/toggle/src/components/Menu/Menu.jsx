import React from "react"
import useToggle from "../../Hooks/useToggle"

export const MenuContext = React.createContext()

export default function Menu({ children, onOpen }) {
    const [ toggleOn, toggle ] = useToggle({initialValue: false, onToggle: onOpen})

    return (
        <MenuContext.Provider value={{toggleOn, toggle}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

