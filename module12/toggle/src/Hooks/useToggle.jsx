import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle({initialValue = false, onToggle=()=>{}}) {
    const [toggleOn, setToggleOn] = React.useState(initialValue)

    function toggle() {
        setToggleOn(prevToggleState => !prevToggleState)
    }

    useEffectOnUpdate(onToggle, [toggleOn])

    return [ toggleOn, toggle, onToggle]
}