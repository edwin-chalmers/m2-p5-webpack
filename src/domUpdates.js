function displayPastTrips(tripDates) {
    tripDates.forEach((date, i) => {
        pastTrips.innerHTML += `<p>${i+1}. ${date}</p>`
    })
}

export {
    displayPastTrips
}