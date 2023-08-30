export async function fetchVansData() {
    try {
        const res = await fetch("/api/vans")
        if(!res.ok) {
            throw Error(`${res.status}: ${res.statusText}`)
        } else {
            const data = await res.json()
            return data.vans
        }
    } catch(error) {
        console.log(error)
    }
}

