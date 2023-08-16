import React from "react"
import { useParams, Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import "./vanpage.css"
import { BsArrowLeft } from "react-icons/bs"

export default function VanPage() {
    const params = useParams()

    const [vanData, setVanData] = React.useState({})
    

    
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
        <div className="vanpage-container">
            <Link to="/vans" style={{display: "flex", alignItems:"center"}}>
                <BsArrowLeft />
                &nbsp;
                <Button styling="naked btn-stretch">Back to all vans</Button>
            </Link>
            <img src={vanData.imageUrl} className="vanpage-image"/>
            <Button styling={`on ${vanData.type}`}>{vanData.type}</Button>
            <h3 className="vandata-name fw700 fs32">{vanData.name}</h3>
            <p className="vandata-price fw500 fs20"><span className="fs24 fw700">${vanData.price}</span>/day</p>
            <p className="vandata-description fw500 fs16">{vanData.description}</p>
            <Button styling={`on orange btn-full btn-tall fs18`}>Rent this van</Button>

        </div>
    )
}