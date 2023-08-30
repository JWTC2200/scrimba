import React from "react"
import Button from "../../components/Button/Button"
import VanListing from "../../components/VanListing/VanListing"
import "./vans.css"
import { useSearchParams, Link } from "react-router-dom"
import { fetchVansData } from "../../api"

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const [vansData, setVansData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const displayedVans = typeFilter 
        ? vansData.filter(van => van.type.toLowerCase() === typeFilter) 
        : vansData

    const vansElements = displayedVans.map(van => {
        return (
            <Link to={`/vans/${van.id}`} state={{searchParams: searchParams.toString() }}>
                <VanListing key={van.id} {...van}></VanListing>
            </Link>
        )
    })

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await fetchVansData()            
            setVansData(data)
            setLoading(false)
        }
        loadVans()
    }, [])

    function handleSearchFilter(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="vans-page-container">
            <h1>Explore our van options</h1>
            <div className="vans-page-search-filters">
                <Button styling={`simple ${typeFilter === "simple" && "on"}`} click={() => handleSearchFilter("type", "simple")}>Simple</Button>
                <Button styling={`luxury ${typeFilter === "luxury" && "on"}`} click={() => handleSearchFilter("type", "luxury")}>Luxury</Button>
                <Button styling={`rugged ${typeFilter === "rugged" && "on"}`} click={() => handleSearchFilter("type", "rugged")}>Rugged</Button>
                {typeFilter && 
                    <Button styling="naked" click={() => handleSearchFilter("type", null)}>clear Filters</Button>}
            </div>
            {
                loading 
                    ? <h1>Loading...</h1> 
                    : <div className="vans-page-listing-container">
                        {vansElements}
                    </div>
            }                
        </div>
        
    )
}