import React from "react"
import Button from "../../components/Button/Button"
import VanListing from "../../components/VanListing/VanListing"
import "./vans.css"
import { useSearchParams } from "react-router-dom"

export default function Vans() {


    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    const [vansData, setVansData] = React.useState([])

    const vansElements = vansData && vansData.map(van => {
        return (
            <VanListing key={van.id} {...van}></VanListing>
        )
    })

    React.useEffect(() => {
        async function fetchVansData() { 
            try {
                const res = await fetch("/api/vans")
                if(!res.ok) {
                    throw Error(`${res.status}: ${res.statusText}`)
                } else {
                    const data = await res.json()
                    setVansData(data.vans)
                }
            } catch(error) {
                console.log(error)
            }
        }
        fetchVansData()
    }, [])


    return (
        <div className="vans-page-container">
            <h1>Explore our van options</h1>
            <div className="vans-page-search-filters">
                <Button styling="simple">Simple</Button>
                <Button styling="luxury">Luxury</Button>
                <Button styling="rugged">Rugged</Button>
                <Button styling="naked">clear Filters</Button>
            </div>
            <div className="vans-page-listing-container">
                {vansElements}
            </div>            
        </div>
        
    )
}