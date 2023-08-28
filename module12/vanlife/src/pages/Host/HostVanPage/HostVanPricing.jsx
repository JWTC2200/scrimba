import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {

    const vanData = useOutletContext()

    return (
        <div><span className="fs24 fw700">${vanData.price}.00</span>/day</div>
    )
}