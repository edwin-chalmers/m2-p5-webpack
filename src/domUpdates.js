const pastTrips = document.getElementById('pastTrips')
const pendingTrips = document.getElementById('pendingTrips')
const upcomingTrips = document.getElementById('upcomingTrips')
const addTrips = document.getElementById('addTrips')
const finalCostDiv = document.getElementById('finalCost')
const destSelect = document.getElementById('destinationSelect')

function displayPastTrips(tripDates, tripLocations) {
    tripDates.forEach((date, i) => {
        pastTrips.innerHTML += `<p>${i+1}. ${tripLocations[i].destination} // ${date}</p>`
    })
}

function displayFinalCost(finalCost) {    
    finalCostDiv.innerText = `$${finalCost}` 
}

function changePageTitle(page) {
    dashTitle.innerText = `//${page} trips//`
}

function addDefaultButtonStyling() {
    document.querySelectorAll('.nav-buttons .butt').forEach(butt => {
        butt.classList.remove('selected-button');
    });
}

function hideTripsDiv() {
    document.querySelectorAll('.dashboard .trips').forEach(dashboard => {
        dashboard.classList.add('hidden');
    });
}

function displayDestinationsInList(destData) {
    let sortedDests = destData.destinations.sort((a, b) => a.destination.localeCompare(b.destination))
    sortedDests.forEach(dest => {
        destSelect.innerHTML += `<option value="${dest.id}">${dest.destination}</option>`
    })
}



export {
    pastTrips,
    pendingTrips,
    upcomingTrips, 
    addTrips,
    displayPastTrips,
    displayFinalCost,
    changePageTitle,
    addDefaultButtonStyling,
    hideTripsDiv,
    displayDestinationsInList
}