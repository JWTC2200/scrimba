import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import Toggle from "./Toggle/index"

export default function Star() {    
    return (
        <Toggle>
            <Toggle.Button>
                <Toggle.On><BsStarFill className="star filled"/></Toggle.On>
                <Toggle.Off><BsStar className="star "/></Toggle.Off>
            </Toggle.Button>        
        </Toggle>
    )
}