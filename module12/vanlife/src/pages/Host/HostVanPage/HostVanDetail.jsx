import { useOutletContext, useParams } from "react-router-dom"
import React from "react"

export default function HostVanDetail() {

    const vanData = useOutletContext()

    return (
        <div>
            <p><span className="fw700">Name: </span>{vanData.name}</p>
            <p><span className="fw700">Category: </span>{vanData.type}</p>
            <p><span className="fw700">Descripton: </span>{vanData.description}</p>
            <p><span className="fw700">Visibility: </span>Public</p>
        </div>
    )
}