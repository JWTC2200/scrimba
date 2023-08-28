import { Outlet, Link, useParams, NavLink } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"
import Button from "../../../components/Button/Button"
import "./hostvanpage.css"
import React from "react"

export default function HostVanPage() {

    const params = useParams()
    const [vanData, setVanData] = React.useState([])

    React.useEffect(() => {
        async function fetchVanData() { 
            try {
                const res = await fetch(`/api/vans/${params.id}`)
                if(!res.ok) {
                    throw Error(`${res.status}: ${res.statusText}`)
                } else {
                    const data = await res.json()
                    setVanData(data.vans)
                }
            } catch(error) {
                console.log(error)
            }
        }
        fetchVanData()
    }, [])

    return (
        <div>
            <Link to=".." relative="path" style={{display: "flex", alignItems:"center"}}>
                <BsArrowLeft />
                &nbsp;
                <Button styling="naked btn-stretch">Back to all vans</Button>
            </Link>
            <div className="host-van-page-container">
                <div className="host-van-page-basic-details">
                    <img className="host-van-page-basic-image" src={vanData.imageUrl}/>
                    <div className="host-van-page-basic-info">
                        <Button styling={`on ${vanData.type}`} classes="fs14">{vanData.type}</Button>
                        <div className="fs24 fw700">{vanData.name}</div>
                        <div><span className="fs18 fw700">${vanData.price}</span>/day</div>
                    </div>
                </div>
                <div className="host-van-page-navbar">
                    <NavLink to="." end>
                        {({isActive}) => isActive ? <Button styling="naked underline">Details</Button> : <Button styling="naked">Details</Button>}
                    </NavLink>
                    <NavLink to="pricing">
                        {({isActive}) => isActive ? <Button styling="naked underline">Pricing</Button> : <Button styling="naked">Pricing</Button>}
                    </NavLink>
                    <NavLink to="photos">
                        {({isActive}) => isActive ? <Button styling="naked underline">Photos</Button> : <Button styling="naked">Photos</Button>}
                    </NavLink>
                </div>
                <Outlet context={vanData} />
            </div>
        </div>
        
        
    )
}