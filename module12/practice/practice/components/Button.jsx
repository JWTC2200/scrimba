import classnames from "classnames"
import { MenuContext } from "./Menu"
import React from "react"

export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)
    const { toggle } = React.useContext(MenuContext)

    return (
        <button className={allClasses}{...rest} onClick={toggle}>
            {children}
        </button>
    )
}