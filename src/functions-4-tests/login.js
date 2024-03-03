function parseUserId(username) {
    if (username.includes('traveler')) {
    return Number(username.replace('traveler', ''))
    }
}

function sortDataById(data, userId) {
    // return data.trips.filter(data => data.userID === userId)
    let list = data.trips.filter(data => data.userID === userId)
    if (list) {
        return list
    }
}

export {
    parseUserId,
    sortDataById
}