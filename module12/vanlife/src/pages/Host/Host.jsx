import React from "react"
import { Outlet, Link, NavLink } from "react-router-dom"
import Button from "../../components/Button/Button"
import "./host.css"

export default function Host() {

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


    return (
        <div className="hostpage-container">
            <div className="hostpage-navbar">
                <NavLink 
                to=""
                end
                >
                    {({isActive}) => isActive ? <Button styling="naked underline">Dashboard</Button> : <Button styling="naked">Dashboard</Button>}
                </NavLink>
                <NavLink 
                to="income"
                >
                    {({isActive}) => isActive ? <Button styling="naked underline">Income</Button> : <Button styling="naked">Income</Button>}
                </NavLink>
                <NavLink 
                to="vans"
                >
                    {({isActive}) => isActive ? <Button styling="naked underline">Vans</Button> : <Button styling="naked">Vans</Button>}
                </NavLink>
                <NavLink 
                to="reviews"
                >
                    {({isActive}) => isActive ? <Button styling="naked underline">Reviews</Button> : <Button styling="naked">Reviews</Button>}
                </NavLink>
            </div>
            <Outlet context={hostVans}/>
        
        </div>
    )
}