function parseUserId(username) {
    if (username.includes('traveler')) {
    return Number(username.replace('traveler', ''))
    }
}

function sortDataById(data, userId) {

    let list = data.trips.filter(data => data.userID === userId)
    if (list) {
        return list
    }
}

function sortTripsByPending(data, userId) {
    return data.trips.filter(data => data.userID === userId && data.status === "pending")
}

function sortDestinationsByPending(tripsData, destData) {
    let dest = []
    tripsData.forEach(trip => {
        dest.push(destData.destinations.find(dest => dest.id === trip.destinationID))
    })
    return dest
}

export {
    parseUserId,
    sortDataById,
    sortTripsByPending,
    sortDestinationsByPending
}