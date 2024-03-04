const pastTrips = document.getElementById('pastTrips')
const pendingTrips = document.getElementById('pendingTrips')
const upcomingTrips = document.getElementById('upcomingTrips')
const addTrips = document.getElementById('addTrips')
const finalCostDiv = document.getElementById('finalCost')
const destSelect = document.getElementById('destinationSelect')
const errorAddTrips = document.getElementById('errorAddTrips')
const addTripInputs = {
    startDate: document.getElementById('tripStartInput'),
    tripDuration: document.getElementById('tripDurationInput'),
    travelers: document.getElementById('numTravelersInput'),
    destinations: document.getElementById('destinationSelect'),
}
const confirmTripInfo = {
    startDate: document.getElementById('startDateConfirm'),
    tripDuration: document.getElementById('durationComfirm'),
    travelers: document.getElementById('travelersConfirm'),
    destinations: document.getElementById('destinationConfirm'),
    travelAgent: document.getElementById('travelAgentConfirm'),
    finalCostThisTrip: document.getElementById('finalCostThisTrip'),
}

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

function populateConfirmTripRequest(startDate, travelAgentFee, finalCost) {
    confirmTripInfo.startDate.innerText = `start date: ${startDate}`
    confirmTripInfo.tripDuration.innerText = `duration: ${addTripInputs.tripDuration.value} days`
    confirmTripInfo.travelers.innerText = `travelers: ${addTripInputs.travelers.value}`
    confirmTripInfo.destinations.innerText = `destination: ${addTripInputs.destinations.value}`
    confirmTripInfo.travelAgent.innerText = `travel agent fee (10%): $${travelAgentFee}`
    confirmTripInfo.finalCostThisTrip.innerText = `$${finalCost}`

    // hide pages
    // show amount
}

function displayErrorMessage() {
    let noErrors = true
    if (addTripInputs.startDate.value.slice(0, 4) < 2024 || addTripInputs.startDate.value.slice(0, 4) > 2099) {
        errorAddTrips.innerText = 'please enter a valid date'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.startDate.classList.add('error')
        noErrors = false
    } else if (/[a-zA-Z]/.test(addTripInputs.tripDuration.value) || !addTripInputs.tripDuration.value) {
        errorAddTrips.innerText = 'please enter a valid duration'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.tripDuration.classList.add('error')
        noErrors = false
    } else if (/[a-zA-Z]/.test(addTripInputs.travelers.value) || !addTripInputs.travelers.value) {
        errorAddTrips.innerText = 'please enter a valid traveler amount'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.travelers.classList.add('error')
        noErrors = false
    } else if (!addTripInputs.destinations.value) {
        errorAddTrips.innerText = 'please enter a valid destination'
        errorAddTrips.classList.remove('hidden')
        addTripInputs.destinations.classList.add('error')
        noErrors = false
    } 
    return noErrors
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
    displayDestinationsInList,
    populateConfirmTripRequest,
    displayErrorMessage
}