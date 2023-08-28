import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        async function fetchHostVanData() {
            try {
                const res = await fetch(`/api/host/vans`)
                if(!res.ok) {
                    throw Error(`${res.status}: ${res.statusText}`) 
                } else {
                    const data = await res.json()
                    setHostVans(data.vans)
                }
            } catch(error) {
                console.log(error)
            }
        }
        fetchHostVanData()
    }, [])

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