var username = document.getElementById('username')
var password = document.getElementById('pass')
const navButtons = document.getElementById('navButtons')
const pastTrips = document.getElementById('pastTrips')
const pendingTrips = document.getElementById('pendingTrips')
const upcomingTrips = document.getElementById('upcomingTrips')
const addTrips = document.getElementById('addTrips')
const costThisYear = document.getElementById('costThisYear')
const finalCostDiv = document.getElementById('finalCost')
const destSelect = document.getElementById('destinationSelect')
const errorAddTrips = document.getElementById('errorAddTrips')
const addTripInputs = {
    startDate: document.getElementById('tripStartInput'),
    tripDuration: document.getElementById('tripDurationInput'),
    travelers: document.getElementById('numTravelersInput'),
    destinations: document.getElementById('destinationSelect'),
}
const confirmTrips = document.getElementById('confirmTrips')
const confirmTripInfo = {
    startDate: document.getElementById('startDateConfirm'),
    tripDuration: document.getElementById('durationComfirm'),
    travelers: document.getElementById('travelersConfirm'),
    destinations: document.getElementById('destinationConfirm'),
    travelAgent: document.getElementById('travelAgentConfirm'),
    finalCostThisTrip: document.getElementById('finalCostThisTrip'),
}
const costThisTrip = document.getElementById('costThisTrip')
const finalCostThisTrip = document.getElementById('finalCostThisTrip')
const usernameDiv = document.querySelector('#usernameDiv label')
const passwordDiv = document.querySelector('#passwordDiv label')


function displayPastTrips(tripDates, tripLocations) {
    pastTrips.innerHTML = ''
    tripDates.forEach((date, i) => {
        pastTrips.innerHTML += `<ul>${i+1}. ${tripLocations[i].destination} // ${date}</ul>`
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

function populateConfirmTripRequest(startDate, tripCost, destName) {
    let travelAgentFee = tripCost * 0.1
    let finalCost = tripCost * 1.1
    confirmTripInfo.startDate.innerText = `start date: ${startDate}`
    confirmTripInfo.tripDuration.innerText = `duration: ${addTripInputs.tripDuration.value} days`
    confirmTripInfo.travelers.innerText = `travelers: ${addTripInputs.travelers.value}`
    confirmTripInfo.destinations.innerText = `destination: ${destName}`
    confirmTripInfo.travelAgent.innerText = `travel agent fee (10%): $${travelAgentFee.toFixed(2)}`
    confirmTripInfo.finalCostThisTrip.innerText = `$${finalCost.toFixed(2)}`
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

function displayNewTripConfirm() {
    addTrips.classList.add('hidden')
    navButtons.classList.add('hidden')
    confirmTrips.classList.remove('hidden')
    costThisTrip.classList.remove('hidden')
    finalCostThisTrip.classList.remove('hidden')
    costThisYear.classList.add('hidden')
    finalCostDiv.classList.add('hidden')
}

function goBackAddTrip() {
    addTrips.classList.remove('hidden')
    navButtons.classList.remove('hidden')
    confirmTrips.classList.add('hidden')
    costThisTrip.classList.add('hidden')
    finalCostThisTrip.classList.add('hidden')
    costThisYear.classList.remove('hidden')
    finalCostDiv.classList.remove('hidden')
}

function displayPendingTrips(pendTrips, tripLocations) {
    if (pendTrips && tripLocations) {
        pendingTrips.innerText = ''
        pendTrips.forEach((trip, i) => {
            pendingTrips.innerHTML += `<ul>${i+1}. ${tripLocations[i].destination} // ${trip.date}</ul>`
        })
    }
}

function switchToPendingTrips() {
    navButtons.classList.remove('hidden')
    pendingTrips.classList.remove('hidden')
    costThisYear.classList.remove('hidden')
    finalCostDiv.classList.remove('hidden')
    costThisTrip.classList.add('hidden')
    finalCostThisTrip.classList.add('hidden')
    confirmTrips.classList.add('hidden')
    changePageTitle('pending')
    
    addButton.classList.remove('selected-button')
    pendingButton.classList.add('selected-button')
}

function displayDash() {
    loginBox.classList.add('hidden')
    navButtons.classList.remove('hidden')
    dashTitle.classList.remove('hidden')
    costThisYear.classList.remove('hidden')
    finalCostDiv.classList.remove('hidden')
    pastTrips.classList.remove('hidden')
}

function displayLoginError(field) {
    if (field === 'username') {
        usernameDiv.classList.add('error')
        usernameDiv.innerText = 'please enter a valid username'
    } else if (field === 'password') {
        passwordDiv.classList.add('error')
        passwordDiv.innerText = 'please enter a valid password'
    }
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
    displayErrorMessage,
    displayNewTripConfirm,
    goBackAddTrip,
    displayPendingTrips,
    switchToPendingTrips,
    displayDash,
    displayLoginError
}