import { useOutletContext } from "react-router-dom"
import React from "react"

export default function HostVanPhotos() {

    const vanData = useOutletContext()
    
    return (
        <img className="host-van-page-photos-photo" src={vanData.imageUrl}/>
    )
}