// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// **** // import {displayPastTrips, displayFinalCost} from './domUpdates'
import {fetchData} from './apiCalls'

var username = document.getElementById('username')
var password = document.getElementById('pass')
var login = document.getElementById('login')
const loginBox = document.getElementById('loginBox')
const pastTripsDiv = document.getElementById('pastTrips')
const finalCostDiv = document.getElementById('finalCost')

// ------- Login ------- //

login.addEventListener("click", () => {
    console.log(username.value)
    console.log(password.value)
    // getTrips('trips', parseUserId(username.value))
    getTripData(parseUserId(username.value))
    loginBox.classList.add('hidden')
    username.value = ''
    password.value = ''
})

document.addEventListener("DOMContentLoaded", () => {
    username.value = ''
    password.value = ''
})

function parseUserId(username) {
    return Number(username.replace('traveler', ''))
}

function sortDataById(data, userId) {
    return data.trips.filter(data => data.userID === userId)
}

function getTripData(userId) {
    Promise.all([fetchData('trips'), fetchData('destinations')])
    .then(([trips, destinations]) => {
        // --- past trips 
        let chronologicalDates = sortDataById(trips, userId).map(trip => trip.date).sort((a, b) => new Date(b) - new Date(a))
        let tripList = sortDataById(trips, userId)
        let tripLocations = getDestinationsByIds(destinations, tripList)
        let tripsThisYear = getTripsThisYear(tripList)
        let finalCost = getFinalCost(destinations, tripsThisYear)
        
        // --- dom updates
        displayPastTrips(chronologicalDates, tripLocations)
        displayFinalCost(finalCost)
        
        console.log('destinations',destinations.destinations)
        console.log('tripList', sortDataById(trips, userId))
        console.log('tripLocations', getDestinationsByIds(destinations, tripList))
    })
    .catch(error => console.error("Error loading data:", error));
}

function getDestinationsByIds(data, destIds) {
    let destArray = []
    destIds.forEach(id => {
        data.destinations.forEach(dest => {
         if (dest.id === id.destinationID) {
            destArray.push(dest)
         }
        })
    })
    return destArray
}

function getTripsThisYear(tripList) {
    let tripsThisYear = []
    tripList.forEach(trip => {
        if (trip.date.includes(tripList[0].date.slice(0, 4))) {
            tripsThisYear.push(trip)
        }
    })
    return tripsThisYear
}

function getFinalCost(data, destIds) {
    let finalCost = 0
    destIds.forEach(id => {
        data.destinations.forEach(dest => {
            if (dest.id === id.destinationID) {
                let tripTotal = ((id.travelers) + dest.estimatedLodgingCostPerDay) * 1.1
                finalCost += tripTotal
            }
        })
    })
    return finalCost.toFixed(2)
}

function displayPastTrips(tripDates, tripLocations) {
    tripDates.forEach((date, i) => {
        pastTripsDiv.innerHTML += `<p>${i+1}. ${tripLocations[i].destination} // ${date}</p>`
    })
}

function displayFinalCost(finalCost) {    
    finalCostDiv.innerText = `$${finalCost}` 
}

getTripData(parseUserId('40'))
