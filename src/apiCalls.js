import {
    displayFetchError
} from './domUpdates'

function fetchData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            displayFetchError(`//woops, fetch ${endpoint} broke//`)
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => {
        console.log(`Error fetching ${endpoint}:`, error);
        throw error; 
    });
}

function postData(endpoint, content) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`, {
        method: "POST",
		headers: {"Content-Type": "application/json"},
        body: JSON.stringify(content)
    })
    .then(response => {
        if (!response.ok) {
            displayFetchError(`//woops, fetch ${endpoint} broke//`)
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => console.log(`Error fetching ${endpoint}:`, error))
}


export {fetchData, postData}