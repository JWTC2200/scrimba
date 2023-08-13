import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import Toggle from "./Toggle/index"
import useToggle from "../Hooks/useToggle"

export default function Star({onChange}) {    

    const [toggleOn, toggle ] = useToggle({})


    return (
        toggleOn ? 
            <BsStarFill className="star filled" onClick={toggle}/> :
            <BsStar className="star" onClick={toggle}/>
    )
}
