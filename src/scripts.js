// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png' //******** */
import {
    displayPastTrips, 
    displayFinalCost, 
    pastTrips,
    pendingTrips,
    upcomingTrips,
    addTrips,
    changePageTitle
} from './domUpdates'
import {fetchData} from './apiCalls'

var username = document.getElementById('username')
var password = document.getElementById('pass')
var login = document.getElementById('login')
const loginBox = document.getElementById('loginBox')
const pastButton = document.getElementById('pastButton')
const pendingButton = document.getElementById('pendingButton')
const upcomingButton = document.getElementById('upcomingButton')
const addButton = document.getElementById('addButton')
const navButtons = document.querySelector('.nav-buttons')
const dashTitle = document.getElementById('dashTitle')


// ------- event listeners ------- //

document.addEventListener("DOMContentLoaded", () => {
    username.value = ''
    password.value = ''
})

login.addEventListener("click", () => {
    console.log(username.value)
    console.log(password.value)
    // getTrips('trips', parseUserId(username.value))
    getTripData(parseUserId(username.value))
    loginBox.classList.add('hidden')
    username.value = ''
    password.value = ''
})

// navButtons.addEventListener("click", (e) => {
//     navButtons.classList.remove('selected-button')
//     const button = e.target.closest('.butt');
//     if (button) {
//         document.querySelectorAll('.nav-buttons .butt').forEach(butt => {
//         butt.classList.remove('selected-button');
//         });
    
//     button.classList.add('selected-button');
//       }
// })

// ----- button transitions -----

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

pastButton.addEventListener("click", () => {
    addDefaultButtonStyling()
    pastButton.classList.add('selected-button')
    hideTripsDiv()
    changePageTitle('past')
    pastTrips.classList.remove('hidden')
})

pendingButton.addEventListener("click", () => {
    addDefaultButtonStyling()
    pendingButton.classList.add('selected-button')
    hideTripsDiv()
    changePageTitle('pending')
    pendingTrips.classList.remove('hidden')
})

upcomingButton.addEventListener("click", () => {
    addDefaultButtonStyling()
    upcomingButton.classList.add('selected-button')
    hideTripsDiv()
    changePageTitle('upcoming')
    upcomingTrips.classList.remove('hidden')
})

addButton.addEventListener("click", () => {
    addDefaultButtonStyling()
    addButton.classList.add('selected-button')
    hideTripsDiv()
    changePageTitle('add')
    addTrips.classList.remove('hidden')
})


// ----- populate page -----

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

function getFinalCost(data, tripsThisYear) {
    let finalCost = 0
    tripsThisYear.forEach(id => {
        data.destinations.forEach(dest => {
            if (dest.id === id.destinationID) {
                let tripTotal = ((id.travelers) + dest.estimatedLodgingCostPerDay) * 1.1
                finalCost += tripTotal
            }
        })
    })
    return finalCost.toFixed(2)
}

// ------- dom updates ------- //



getTripData(parseUserId('40'))
