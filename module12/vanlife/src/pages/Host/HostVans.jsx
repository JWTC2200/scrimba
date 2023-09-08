import React from "react"
import { Link, useOutletContext } from "react-router-dom"

export default function HostVans() {

    const hostVans = useOutletContext()
    
    const vanElements = hostVans.map(van => {
        return (
            <Link 
                to={`${van.id}`} 
                key={van.id}
            >
                <div className="host-van-listing">
                    <img className="host-van-listing-image" src={van.imageUrl}/>
                    <div className="host-van-listing-detail">
                        <div className="host-van-listing-name">{van.name}</div>
                        <div className="host-van-listing-price">${van.price}/day</div>
                    </div>
                </div>
            </Link>            
        )
    })

    return (
        <div className="host-vans-container">
            {vanElements}
        </div>
    )
}