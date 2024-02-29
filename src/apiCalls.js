function fetchData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => console.log(`Error fetching ${endpoint}:`, error))
}

export {fetchData}